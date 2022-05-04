import React, { useState, useEffect, useRef } from 'react'
import photo from '../../img/photo1.png'
import './countdown.css'
import AnimateOnScroll from '../../utils/AnimateOnScroll'

const Countdown = () => {

    window.addEventListener('scroll', AnimateOnScroll);

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const countDownDate = new Date("May 30, 2022 09:00:00").getTime();

    let x = useRef();

    const setTimer = () => {
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
              
            // If the count down is over, it's over
            if (distance < 0) {
              clearInterval(x);
            }
          }); 
    }

    useEffect(() => {
        setTimer();
    });
    
  return (
    <div className='countdown'>
        { /* Background */ }
        <div className='countdown-bg'>
            <img className='countdown-img reveal' src={photo} />
        </div>

        { /* Container putih */ }
        <div className='countdown-container reveal'>

            { /* Judul */ }
            <h1 className='countdown-title'>Counting down to the big day</h1>

            { /* Waktu */ }
            <p className='countdown-time'>
                <div className='countdown-timeDetails'>
                    <p>{days}</p>
                    <p className='countdown-timerDesc'>
                        <span className='daysLg'>Day(s)</span>
                        <span className='daysSm'>Day</span>
                    </p>
                </div>
                :
                <div className='countdown-timeDetails'>
                    <p>{hours}</p>
                    <p className='countdown-timerDesc'>
                        <span className='daysLg'>Hour(s)</span>
                        <span className='daysSm'>Hrs</span>
                    </p>
                </div>
                :
                <div className='countdown-timeDetails'>
                    <p>{minutes}</p>
                    <p className='countdown-timerDesc'>
                        <span className='daysLg'>Minute(s)</span>
                        <span className='daysSm'>Min</span>
                    </p>
                </div>
                :
                <div className='countdown-timeDetails'>
                    <p>{seconds}</p>
                    <p className='countdown-timerDesc'>
                        <span className='daysLg'>Second(s)</span>
                        <span className='daysSm'>Sec</span>
                    </p>
                </div>
            </p>

        </div>
    </div>
  )
}

export default Countdown