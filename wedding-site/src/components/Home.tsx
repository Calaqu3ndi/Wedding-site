import React, { useState, useEffect } from 'react';
import '../App.css'
const calculateTimeLeft = () => {
  const weddingDate = new Date('2026-09-12T17:00:00');
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();
  let monLabel = "";
  let dayLabel = "";
  let hourLabel = "";

  let timeLeft = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      years: Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12)),
      months: Math.floor(difference % (1000 * 60 * 60 * 24 * 30 * 12)  / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  if (timeLeft.months === 1) {
    monLabel = "miesiąc";
  }
  else if (timeLeft.months < 5){
    monLabel = "miesiące";
  }
  else { monLabel = "miesięcy";}

  if (timeLeft.days === 1) {
    dayLabel = "dzień";
  }
  else { dayLabel = "dni";}

  if (timeLeft.hours === 1) {
    hourLabel = "godzina";
  }
  else if (timeLeft.hours < 5 || timeLeft.hours>21 ){
    hourLabel = "godziny";
  }
  else { hourLabel = "godzin";}
  return {monLabel, dayLabel, hourLabel, timeLeft};
};


function Home() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      
      return () => clearInterval(timer);
    }, []);

    
    return( 
        <>
        <div className="center1">
        <h1 >Witamy na naszej stronie ślubnej!</h1>
        <p>Data ślubu: <b>12 Wrzesień 2026</b></p>
        <div className="center1">
          <h2>Odliczanie do ślubu:</h2>
          <p>{timeLeft.timeLeft.years} lat, {timeLeft.timeLeft.months} {timeLeft.monLabel}, {timeLeft.timeLeft.days} {timeLeft.dayLabel}, {timeLeft.timeLeft.hours} {timeLeft.hourLabel}, {timeLeft.timeLeft.minutes} minut, {timeLeft.timeLeft.seconds} sekund</p>
        </div>
      </div>
      </>
    );
}

export default Home;