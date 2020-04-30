const deadline = '2020-05-01';

function getTimeRemaining(deadline) {
    const t = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor(t / 1000 % 60);
    const minutes = Math.floor(t / 1000 / 60 % 60);
    const hours = Math.floor(t / 1000 / 60 / 60);

    return {
        'total' : t,
        'seconds' : seconds,
        'minutes' : minutes,
        'hours' : hours
    };
}

function setClock(el, deadline) {
    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining(deadline);

        function addZero(num) {
            if (num <= 9) {
                return '0' + num;
            } else return num;
        }

        document.querySelector(el).innerHTML = `${addZero(t.hours)} : ${addZero(t.minutes)} : ${addZero(t.seconds)}`;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);