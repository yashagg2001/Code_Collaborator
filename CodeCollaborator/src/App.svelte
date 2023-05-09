<script>
  import Message from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import SideNav from "./components/SideNav.svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
  import Board from "./components/Board.svelte";
  import VideoGrid from "./components/VideoGrid.svelte";
  import InputOutput from "./components/InputOutput.svelte";

</script>

<Header imageSrc="images/ShareCode.png" />

<div class="wrapper">
  <CodeEditor />
  <!-- <InputOutput /> -->
  <SideNav />
  <Message />
</div>

<div class="super-container">
  <Board />
  <div class="video-container">
    <VideoGrid />
  </div>
</div>

<style>
  .super-container {
    display: flex;
    flex-direction: row;
  }
  .video-container {
    width: 100%;
    border: 3px solid black;
    margin-top: 5px;
    border-radius: 2%;
  }
  .wrapper {
    display: flex;
    height: 65%;
  }
</style>
