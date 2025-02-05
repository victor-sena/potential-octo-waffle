const countdown = () => {
    const DAY_EL = document.querySelector(".days");
    const HOURS_EL = document.querySelector(".hours");
    const MINUTES_EL = document.querySelector(".minutes");
    const SECONDS_EL = document.querySelector(".seconds");
    const FESTIVAL_DATE = new Date("06 June, 2025 00:00:00").getTime();
    const NOW = new Date().getTime();
    const DIFF = FESTIVAL_DATE - NOW;

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const RESULT_DAY = Math.floor( DIFF / DAY );
    const RESULT_HOUR = Math.floor(( DIFF % DAY ) / HOUR);
    const RESULT_MINUTE = Math.floor(( DIFF % HOUR ) / MINUTE);
    const RESULT_SECOND = Math.floor(( DIFF % MINUTE ) / SECOND);


    DAY_EL.innerHTML = RESULT_DAY;
    HOURS_EL.innerHTML = RESULT_HOUR;
    MINUTES_EL.innerHTML = RESULT_MINUTE;
    SECONDS_EL.innerHTML = RESULT_SECOND;
};

window.addEventListener('load', () => {
    countdown();
    setInterval(countdown, 1000);
});