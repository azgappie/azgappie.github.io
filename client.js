let socket = new WebSocket("wss://172.20.10.2:9898");

// send message from the form
document.forms.publish.onsubmit = function () {
    let outgoingLead = this.lead.value;

    socket.send(outgoingLead);
    return false;
};

// message received - show the message in div#messages
socket.onlead = function (event) {
    let lead = event.data;

    let leadElem = document.createElement('div');
    leadElem.textContent = lead;
    document.getElementById('leads').prepend(leadElem);
}