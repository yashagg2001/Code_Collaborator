<script>
  import io from "socket.io-client";
  // const socket = io.connect('https://fathomless-wave-10975.herokuapp.com/');
  const socket = io.connect("http://localhost:4000");

  // const myPeer = new Peer(undefined, {
  //     host: "videocodewing.herokuapp.com",
  //     port:"443",
  //     secure:!0,
  // });
  const myPeer = new Peer(undefined, {
    host: "/",
    port: "3001",
  });


  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const peers = {};
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      addVideoStream(myVideo, stream);

      myPeer.on("call", (call) => {
        call.answer(stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
      });

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });
    });

  socket.on("user-disconnected", (userId) => {
    if (peers[userId]) peers[userId].close();
  });

  myPeer.on("open", (id) => {
    socket.emit(
      "join-room",
      window.location.href.split("/")[3].split("-")[1],
      id
    );
  });

  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
      video.remove();
    });

    peers[userId] = call;
  }

  function addVideoStream(video, stream) {
    var videoGrid = document.getElementById("grid");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoGrid.append(video);
  }
</script>

<div class="video-grid" id="grid" />

<style>
  #grid {
    display: flex;
    flex-wrap: wrap;
    height: 40vh;
    overflow: scroll;
    overflow-y: scroll;
  }

</style>
