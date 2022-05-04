import Intro from "./components/intro/Intro.jsx";
import Quotes from "./components/quotes/Quotes.jsx";
import Bio from "./components/bio/Bio.jsx";
import Location from "./components/location/Location.jsx";
import Countdown from "./components/countdown/Countdown.jsx";
import RSVP from "./components/rsvp/RSVP.jsx";
import Protocol from "./components/protocol/Protocol.jsx";
import Slideshow from "./components/slideshow/Slideshow.jsx";
import Guestbook from "./components/guestbook/Guestbook.jsx";
import Footer from "./components/footer/Footer.jsx";
import ModalIntro from "./components/modals/ModalIntro.jsx";
import { useState, useEffect } from 'react';
import './app.css';
 
function App() {

  const preloader = () => {
    var loader = document.getElementById('preloader');

    window.addEventListener('load', () => {
      loader.style.display = 'none';
    });
  }

  useEffect(() => {
    preloader();
  }, [])

  
  return (
    <div>
      <ModalIntro />
      <Intro />
      <Quotes />
      <Bio />
      <Location />
      <Countdown />
      <RSVP />
      <Protocol />
      <Slideshow />
      <Guestbook />
      <Footer />
    </div>
  );

}

export default App;
