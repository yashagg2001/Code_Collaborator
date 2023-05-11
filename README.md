# CodeCollaborator
CodeCollaborator is a collaborative editor  that allows several people to edit, view, compile a programming code simultaneously  over a computer network. Users can edit the same code, run the code, can chat through the text box in real time. 

This is our System Practicum (CS307) Group Project.

## APP Sources

1. [Source Code](https://github.com/yashagg2001/Code_Collaborator)
2. [PPT](https://docs.google.com/presentation/d/1hCIjj44t1N0ZOFnRXiGLcqVfH2z2E7E-omJ8AzY5Z9o/edit#slide=id.g2418759353a_2_221) 
3. [Working Demo](https://www.loom.com/share/624b349089bf4eea8b0e01d95c2ff255)

## Our Team 

1. [Yash Aggarwal](https://github.com/yashagg2001)
2. [Priyanshu Singh](https://github.com/PriyanshuSingh00/)
3. [S Samarth Reddy](https://github.com/Samarth88)
4. [Krati Khinchi](https://github.com/krati0511)
5. [Sanvi Reddy](https://github.com/Sanvireddy)
6. [Akshansh Dhiman](https://github.com/Akshansh57)
7. Akkapelli Harshith
8. Jahnavi

## Features
1. Video Call Application: Multiple people can interact in a room to talk with each other.
2. RealTime WhiteBoard: Different people can interact to explain their thoughts on a whiteboard. 
3. RealTime Code Editor: Editor where different people write code in a room.
4. Code Compilation and Download: Allow compilation of code, also download it.
5. Chat Application: Allow different user to chat with each other in a room.

## Implimentation
### Frontend
1. We have used [SvelteJS](https://svelte.dev/) for frontend.
2. To implement the Collaborating Text Editor we have used CodeMirror of [Firepad](https://firepad.io/examples/#-rrTN85TPay).
3. Chat, Video, and White board uses WebSocket to connect with server.

### Backend
1. We have used four different server in [NodeJS](https://nodejs.org/en/)
2. [White Board Server](https://github.com/yashagg2001/Code_Collaborator/tree/master/wb_server) for implementing white board.
3. [Video Server](https://github.com/yashagg2001/Code_Collaborator/tree/master/video_server) for implementing Video application.
4. [Chat Server](https://github.com/yashagg2001/Code_Collaborator/tree/master/chat_server) for implementing chat application.
5. [Peer Js](https://peerjs.com/#:~:text=PeerJS%20simplifies%20WebRTC%20peer%2Dto,connection%20to%20a%20remote%20peer.) PeerJS simplifies WebRTC peer-to-peer data, video, and audio calls

### ScreenShot
![image](https://github.com/yashagg2001/Code_Collaborator/assets/54476313/c2aed2bd-3ed9-4175-94b2-bbeb84de5b5b)


## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Go ahead and fork the project.

## Setting Up the Environment

To setup the environment first you have to run the four different servers locally. Lets get started
### 1. Clone the repo 
    https://github.com/yashagg2001/Code_Collaborator

### 2. Start Chat Server
Install the dependencies...
```bash
cd chat_server
npm install
```
Run - `npm start`. Server will run locally on port 3000.

### 3. Start White Board Server
Install the dependencies...
```bash
cd wb_server
npm install
```
Run - `npm start`. Server will run locally on port 2000.

### 4. Start Video Server and PeerJS
1. Install the dependencies...
```bash
cd video_server
npm install
```
2. Run - `npm start`. Server will run locally on port 4000.
3. Now to start the Peerjs Server. Open new terminal in the same video_server directory.
4. Install Peerjs globally
```bash
npm install -g peer
```
5. Start the peerjs server on port 3001 only. **Note** - Also make sure that you are conected to internet. Otherwise streaming on different tabs is not visible.
```bash
peerjs --port 3001
```
6. If you face error like this then open **Powershell as Administrator** and run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` or follow this [link](https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system) to resolve the error 


### 5. Now SetUp the Frontend  
1. Install the dependencies...
```bash
cd CodeCollaborator
npm install
```
2. Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```
3. Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
4. **Note** - Make sure that you are connected to internet. Otherwise realtime changes are not visible.
5. Now copy the room link from browser tab and paste in new tab to see the real time changes in both tabs. Result will look like image shown below.
![image](https://github.com/yashagg2001/Code_Collaborator/assets/54476313/ae51f410-7a45-4d0c-b378-3a44e67c3b8e)

