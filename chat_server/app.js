const WebSocket = require('ws');
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: server_port });
console.log("Started on : "+ server_port);
wss.on('connection', function connection(ws) {
  ws.onmessage = (message) => {
    updateClients(message.data);
  };
});

const updateClients = (message) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};
