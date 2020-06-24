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

// Second Variant

//     const deadline = '2020-08-12';

//     function getTimeRemaining(endtime) {
//         // Получаем кол-во милисекунд.
//         const t = Date.parse(endtime) - Date.parse(new Date());
//         // 1000 миллисекунд в минуте, 60 минут в часе, 24 часа в сутках
//         const days = Math.floor(t / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((t / 1000 / 60) % 60);
//         const seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     // Добавляем 0, если число меньше 10
//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector);
//         const days = timer.querySelector('#days');
//         const hours = timer.querySelector('#hours');
//         const minutes = timer.querySelector('#minutes');
//         const seconds = timer.querySelector('#seconds');
//         const timeInterval = setInterval(updateClock, 1000);

//         // Чтобы не ждать секунду и не было мигания
//         updateClock();

//         function updateClock() {
//             // Получаем оставшееся время
//             const t = getTimeRemaining(endtime);

//             days.textContent = getZero(t.days);
//             hours.textContent = getZero(t.hours);
//             minutes.textContent = getZero(t.minutes);
//             seconds.textContent = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);
