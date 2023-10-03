const month = document.querySelector('.month');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const target = new Date();

const year_target = target.getFullYear() + 1;

const future_date = new Date(year_target, 0, 1, 0, 0 ,0);
const future_time = future_date.getTime();

const differenceInMonths = (date1, date2) => {
    const monthDiff = date1.getMonth() - date2.getMonth();
    const yearDiff = date1.getYear() - date2.getYear();

    return monthDiff + yearDiff * 12;
};

const getRemainingTime = () => {
    const now = new Date();

    let distance = future_time - now.getTime();

    let months = differenceInMonths(future_date, now);
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    months >= 10 ? month.children[0].textContent = months : month.children[0].textContent = `0${months}`;
    days >= 10 ? day.children[0].textContent = days : day.children[0].textContent = `0${days}`;
    hours >= 10 ? hour.children[0].textContent = hours : hour.children[0].textContent = `0${hours}`;
    minutes >= 10 ? minute.children[0].textContent = minutes : minute.children[0].textContent = `0${minutes}`;
    seconds >= 10 ? second.children[0].textContent = seconds : second.children[0].textContent = `0${seconds}`;
}

getRemainingTime();

if(target == future_date) {
    clearInterval(interval_id);
}

const interval_id = setInterval(() => {
    getRemainingTime();
}, 1000); 




