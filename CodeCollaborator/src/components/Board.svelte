<script>
  import io from "socket.io-client";
  export let color;
  export let size;
  import { onMount } from "svelte";
  var timeout;
  // var socket = io.connect("https://lit-ocean-60441.herokuapp.com/");
  var socket = io.connect("http://localhost:2000/");
  var ctx;
  var isDrawing = false;

  onMount(() => {
    drawOnCanvas();
  });

  socket.on("canvas-data", function (data) {
    var root = this;
    var interval = setInterval(function () {
      if (root.isDrawing) return;
      root.isDrawing = true;
      clearInterval(interval);
      var image = new Image();
      var canvas = document.querySelector("#board");
      var ctx = canvas.getContext("2d");
      image.onload = function () {
        ctx.drawImage(image, 0, 0);

        root.isDrawing = false;
      };
      image.src = data;
    }, 200);
  });

  function changeColor(params) {
    var canvas = document.querySelector("#board");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = params.target.value;
  }

  function changeSize(params) {
    var canvas = document.querySelector("#board");
    ctx = canvas.getContext("2d");
    ctx.lineWidth = params.target.value;
  }

  const drawOnCanvas = () => {
    var canvas = document.querySelector("#board");
    ctx = canvas.getContext("2d");

    var sketch = document.querySelector("#sketch");
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
        console.log(
          mouse.x,
          last_mouse.x,
          e.pageX,
          this.offsetLeft,
          canvas.width
        );
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    /* Drawing on Paint App */
    console.log(size, color);
    ctx.lineWidth = "1";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";
    console.log(ctx.strokeStyle);

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    var root = this;
    console.log(root);
    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();

      var base64ImageData = canvas.toDataURL("image/png");
      socket.emit("canvas-data", base64ImageData);
    };
  };
</script>

<div class="container">
  <div class="whiteBoardHead">WhiteBoard</div>
  <div class="tools-section">
    <div class="color-picker-container">
      <div style="display: inline;">Select Brush Color :</div>
      <input type="color" on:change={(event) => changeColor(event)} />
    </div>

    <div class="brushsize-container">
      <div style="display: inline;">Select Brush Size :</div>
      <input
        type="range"
        min="1"
        max="20"
        value="1"
        on:change={(event) => changeSize(event)}
      />
    </div>
  </div>

  <div class="board-container">
    <div class="sketch" id="sketch">
      <canvas class="board" id="board" />
    </div>
  </div>
</div>

<style>
  .board {
    width: 100%;
    height: 100%;
  }

  .sketch {
    width: 100%;
    height: 100%;
    border: 2px solid black;
  }
  .color-picker-container {
    text-align: center;
    display: inline;
    color: black;
  }
  .color-picker-container input {
    height: 20px;
  }

  .brushsize-container {
    display: inline;
    color: black;
    margin-left: 12px;
  }

  .tools-section {
    text-align: center;
  }

  .board-container {
    width: 100%;
    height: 85%;
    margin: auto;
    margin-top: 1%;
    background: white;
  }

  .whiteBoardHead {
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
  }
</style>
