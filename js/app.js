document.addEventListener("DOMContentLoaded", () => {
    getDate();
});
const reloj = document.querySelector("#reloj");

const getDate = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }
    reloj.classList.add("animated", "fadeIn");
    validarHora(time);
};

setInterval(getDate, 300);

const validarHora = ({ hour, min, sec }) => {
    if (min < 10 && sec < 10) {
        reloj.innerHTML = `<span class="hora">${hour}</span> :
                        <span class="min">0${min}</span> :
                        <span class="sec">0${sec}</span>`;
    } else if(min < 10) {
        reloj.innerHTML = `<span class="hora">${hour}</span> :
                        <span class="min">0${min}</span> :
                        <span class="sec">${sec}</span>`;
    } else if(sec < 10) {
        reloj.innerHTML = `<span class="hora">${hour}</span> :
                        <span class="min">${min}</span> :
                        <span class="sec">0${sec}</span>`;
    } else {
        reloj.innerHTML = `<span class="hora">${hour}</span> :
                        <span class="min">${min}</span> :
                        <span class="sec">${sec}</span>`;
    }
};