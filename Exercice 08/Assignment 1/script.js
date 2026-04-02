const queueWrapper = document.getElementById('queue-wrapper');

let queue = ['A', 'B', 'C', 'D', 'E', 'F'];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function render() {
    queueWrapper.innerHTML = '';
    queue.forEach((char) => {
        const div = document.createElement('div');
        div.className = 'person-box';
       
        div.onclick = () => resetAlphabetFrom(char);

        div.innerHTML = `
            <span class="label">${char}</span>
            <img src="1.jpeg" class="person-img">
        `;
        queueWrapper.appendChild(div);
    });
}

function resetAlphabetFrom(selectedChar) {
    const index = queue.indexOf(selectedChar);
    
    const part1 = queue.slice(0, index + 1);
    const part2 = queue.slice(index + 1);
    queue = [...part2, ...part1];

    for (let i = 0; i < queue.length; i++) {
        queue[(queue.length - 1 - i)] = alphabet[i];
    }
    
    render();
}

function autoMove() {
    let first = queue.shift();
    queue.push(first);
    render();
}

setInterval(autoMove, 1000); 

render();