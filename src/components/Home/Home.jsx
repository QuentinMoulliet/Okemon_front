import './Home.scss';

import Intro from '../Intro/Intro';
import Slider from '../Slider/Slider';
import Ladder from '../Ladder/Ladder';

/**
 * Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Slider />
      <Ladder />
    </div>
  );
};

export default Home;
