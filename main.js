// javascript navigation menu
const navHamburger = document.querySelector('.nav-hamburger');
const navContainer = document.querySelector('.nav-container');
const body = document.querySelector('body');

navHamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    navHamburger.classList.toggle('active');
    body.classList.toggle('active');
})

document.querySelectorAll('.nav-links a, .nav-logo').forEach(n => n.addEventListener('click', () => {
    navHamburger.classList.remove('active');
    navContainer.classList.remove('active');
    body.classList.remove('active');
}))

// javascript countdown section

const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date('Jul 6, 2022 00:00:00').getTime();
    const now = new Date().getTime();

    // calculate remaining time
    const remainingTime = countDate - now;

    // workout the time in days, hours, minutes, seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    // update the html with the calculated values
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);