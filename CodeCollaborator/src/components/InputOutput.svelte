<script>
  import { EditorStore } from "../services/store";
  import { get } from "svelte/store";

  function myFunction() {
    let editor = get(EditorStore);
    let text = editor.getValue();
    // compile code
    // right now we removed it beacuse we not able to implement library here
  }
</script>

<div class="side-bar">
  <p
    type="text"
    id="output"
    style=" height: 500px;background-color:white; width:300px; overflow:scroll"
    name="username"
    value="Output"
    readonly
  />
  <button on:click={myFunction}>Try it</button>
</div>

<style>
  .side-bar {
    display: flex;
    flex-direction: column;
    background: #30353e;
  }
  .icons {
    font-size: 60px;
    padding: 50px;
    color: #b3b5b8;
    border-bottom: 1px solid #000;
  }

  .icons:hover {
    cursor: pointer;
  }
</style>
