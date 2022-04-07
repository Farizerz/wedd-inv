import Intro from "./components/intro/Intro.jsx";
import Quotes from "./components/quotes/Quotes.jsx";
import Bio from "./components/bio/Bio.jsx";
import Location from "./components/location/Location.jsx";
import Countdown from "./components/countdown/Countdown.jsx";
import RSVP from "./components/rsvp/RSVP.jsx";

function App() {
  return (
    <div>
      <Intro />
      <Quotes />
      <Bio />
      <Location />
      <Countdown />
      <RSVP />
    </div>
  );
}

export default App;
