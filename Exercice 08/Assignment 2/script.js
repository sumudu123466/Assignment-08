const topBox = document.getElementById('top-box');
const middleQueue = document.getElementById('middle-queue');
const bottomBox = document.getElementById('bottom-box');

// පෝලිමේ ඇති පාටවල් 6
let colorArray = [
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#3498db', // Blue
    '#f1c40f', // Yellow
    '#9b59b6', // Purple
    '#ff9f9f'  // Pink
];

function renderQueue() {
    // 1. මැද පෝලිම පිරිසිදු කරන්න
    middleQueue.innerHTML = '';

    // 2. Top Box (Left) - Index 0
    topBox.style.backgroundColor = colorArray[0];

    // 3. Middle Queue (Center) - Index 1 සිට 4 දක්වා (කොටු 4 ක්)
    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.style.backgroundColor = colorArray[i];
        middleQueue.appendChild(div);
    }

    // 4. Bottom Box (Right) - Index 5
    bottomBox.style.backgroundColor = colorArray[5];
}

// පෝලිම auto rotate කරන logic එක
function autoMove() {
    // පෝලිමේ අන්තිම පාට (Pink) ඉවත් කරලා මුලට (Red ට කලින්) දානවා
    let last = colorArray.pop();
    colorArray.unshift(last);
    
    renderQueue();
}

// සෑම තත්පර 1 කට වරක් auto run වීමට
setInterval(autoMove, 1000);

// මුලින්ම පෝලිම පෙන්වන්න
renderQueue();