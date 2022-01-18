let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate'); //This Give Array
    rates.forEach((rate) => {
        let selected = rate.value;
        if (rate.checked) {
            output.innerText = `You selected: ${selected}`;
        }
    });

});

