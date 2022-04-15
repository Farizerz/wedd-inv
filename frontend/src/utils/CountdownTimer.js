import { useState, useRef } from 'react';

export const CountdownTimer = (dayss, hourss, minutess, secondss) => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const countDownDate = new Date("May 30, 2022 09:00:00").getTime();

    let x = useRef();

    x = setInterval(() => {

        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var day = Math.floor(distance / (1000 * 60 * 60 * 24));
        (day < 10) ? day="0"+day : day=""+day;
        var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        (hour < 10) ? hour="0"+hour : hour=""+hour;
        var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        (minute < 10) ? minute="0"+minute : minute=""+minute;
        var second = Math.floor((distance % (1000 * 60)) / 1000);
        (second < 10) ? second="0"+second : second=""+second;

        // Output the result
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);

        dayss = days;
          
        // If the count down is over, it's over
        if (distance < 0) {
          clearInterval(x);
        }
      }); 
}