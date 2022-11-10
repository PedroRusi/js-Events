let ball = document.getElementById('ball');
let stadion = document.getElementById('stadion');
stadion.onclick = function(event) {
    let stadionCoords = this.getBoundingClientRect();
    let left = event.clientX - stadion.clientLeft - stadionCoords.left - ball.offsetWidth/2;
    let top = event.clientY - stadion.clientTop - stadionCoords.top -  ball.offsetHeight/2;
    console.log(left, top);
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top + ball.offsetHeight > stadion.clientHeight) top = stadion.clientHeight - ball.offsetHeight;
    if (left + ball.offsetWidth > stadion.clientWidth) left = stadion.clientWidth - ball.offsetWidth;
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';
}


let mesage = document.getElementsByClassName('pane');
for (let elem of mesage) {

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.innerHTML = 'X';
    removeBtn.style.top = '10px';
    elem.appendChild(removeBtn);
}
let button = document.getElementsByClassName('remove-button')
button[0].onclick = function() {
    del(0)
}
button[1].onclick = function() {
    del(1)
} 
button[2].onclick = function() {
    del(2)
} 
function del(num) {
    mesage[num].style.animationName = 'delete';
    mesage[num].style.animationDuration = '0.5s';
    mesage[num].onanimationend = () => {mesage[num].style.display = 'none'};
}
