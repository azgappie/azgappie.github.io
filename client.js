let socket = new WebSocket("wss://89.205.137.52:9898");

// message received - show the message in div#messages
socket.onlead = function (event) {
    let lead = event.data;

    let leadElem = document.createElement('div');
    leadElem.textContent = lead;
    document.getElementById('leads').prepend(leadElem);
}