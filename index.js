const text = document.getElementById('textbox');
const ctf = document.getElementById('tof');
const ftc = document.getElementById('toc');
const result = document.getElementById('result');
let temp;
function convert() {
    if (ctf.checked) {
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} F`;
    }
    else if (ftc.checked) {
        temp = Number(text.value);
        temp = (temp-32)*(5/9) ;
        result.textContent = `${temp.toFixed(1)} c`;
    }
    else {
        result.textContent = 'Select a Unite';
    }
}

