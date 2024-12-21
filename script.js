document.getElementById('flamesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    if (!name1 || !name2) {
        displayResult('Please enter both names.');
        return;
    }

    const uniqueLetters = getUniqueLetters(name1, name2);
    const flamesResult = getFlamesResult(uniqueLetters.length);

    displayResult(`Result: ${flamesResult}`);
});

function getUniqueLetters(name1, name2) {
    let combined = name1 + name2;
    for (let char of name1) {
        if (name2.includes(char)) {
            combined = combined.replace(char, '');
            name2 = name2.replace(char, '');
        }
    }
    return combined;
}

function getFlamesResult(count) {
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }
