const ws = new require('ws');
const wss = new ws.Server({ noServer: true });

const clients = new Set();

http.createServer((req, res) => {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

function onSocketConnect(ws) {
    clients.add(ws);

    ws.on('lead', function (lead) {
        for (let client of clients) {
            client.send(lead);
        }
    });

    ws.on('close', function () {
        clients.delete(ws);
    });
}