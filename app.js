function ageInDays() {
    let birthYear = prompt('What year were you born?');
    let regex = /^[0-9]+$/;
    if (birthYear.match(regex)) {
        if (birthYear < 1901) {
            let impossible = document.getElementById('flex-box-result');
            impossible.style.color = 'white';
            impossible.fontSize = 30 + 'px';
            impossible.innerHTML = 'Congrats, you are the oldest person in history';
        } else {
            const oneYear = 365.242199;
            let days = Math.floor((2021 - birthYear) * oneYear);
            let h1 = document.createElement('h1');
            let textAnswer = document.createTextNode('You are ' + days + ' days old.');

            h1.setAttribute('id', 'ageInDays');
            h1.appendChild(textAnswer);
            h1.style.color = 'white';
            h1.style.fontSize = 30 + 'px';

            document.getElementById('flex-box-result').appendChild(h1);
        }
    } else {
        return prompt('Please input a year');
    }
}