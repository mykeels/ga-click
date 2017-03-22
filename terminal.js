function Terminal(elem) {
    this.elem = elem || document.createElement('div');

    this.write = function (html) {
        var containerDiv = document.createElement('div');
        var pointerSpan = document.createElement('span');
        pointerSpan.innerText = '> ';
        pointerSpan.style.color = 'white';
        containerDiv.appendChild(pointerSpan);
        var textNode = document.createTextNode(html);
        containerDiv.appendChild(textNode);
        this.elem.appendChild(containerDiv);
    }
}