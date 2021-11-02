const reloj = document.querySelector("#reloj");

const getDate = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }

    validarHora(time);
};

setInterval(getDate, 300);

const validarHora = (time) => {
    if (time.min < 10 && time.sec < 10) {
        reloj.innerHTML = `<span class="hora">${time.hour}</span> :
                        <span class="min">0${time.min}</span> :
                        <span class="sec">0${time.sec}</span>`;
    } else if(time.min < 10) {
        reloj.innerHTML = `<span class="hora">${time.hour}</span> :
                        <span class="min">0${time.min}</span> :
                        <span class="sec">${time.sec}</span>`;
    } else if(time.sec < 10) {
        reloj.innerHTML = `<span class="hora">${time.hour}</span> :
                        <span class="min">${time.min}</span> :
                        <span class="sec">0${time.sec}</span>`;
    } else {
        reloj.innerHTML = `<span class="hora">${time.hour}</span> :
                        <span class="min">${time.min}</span> :
                        <span class="sec">${time.sec}</span>`;
    }
};