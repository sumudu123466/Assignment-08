const topBox = document.getElementById('top-box');
const middleQueue = document.getElementById('middle-queue');
const bottomBox = document.getElementById('bottom-box');

let colorArray = [
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#3498db', // Blue
    '#f1c40f', // Yellow
    '#9b59b6', // Purple
    '#ff9f9f'  // Pink
];

function renderQueue() {
    middleQueue.innerHTML = '';
    topBox.style.backgroundColor = colorArray[0];
    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.backgroundColor = colorArray[i];
        middleQueue.appendChild(div);
    }
    bottomBox.style.backgroundColor = colorArray[5];
}
function autoMove() {
    let last = colorArray.pop();
    colorArray.unshift(last);
    
    renderQueue();
}

setInterval(autoMove, 1000);
renderQueue();
