import Intro from "./components/intro/Intro.jsx";
import Quotes from "./components/quotes/Quotes.jsx";
import Bio from "./components/bio/Bio.jsx";
import Location from "./components/location/Location.jsx";
import Countdown from "./components/countdown/Countdown.jsx";
import RSVP from "./components/rsvp/RSVP.jsx";
import Protocol from "./components/protocol/Protocol.jsx";
import Slideshow from "./components/slideshow/Slideshow.jsx";
import Guestbook from "./components/guestbook/Guestbook.jsx";

function App() {
  return (
    <div>
      <Intro />
      <Quotes />
      <Bio />
      <Location />
      <Countdown />
      <RSVP />
      <Protocol />
      <Slideshow />
      <Guestbook />
    </div>
  );
}

export default App;
