import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

import './App.scss';

import Starter from '../Starter/Starter';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Error404 from '../Error/Error404';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import Collection from '../Collection/Collection';
import Profile from '../Profile/Profile';
import User from '../Profile/User';
import LegalNotice from '../LegalNotice/LegalNotice';
import AboutUs from '../AboutUs/AboutUs';
import UserCollection from '../Collection/UserCollection';
import SingleCard from '../SingleCard/SingleCard';
import FlashMessage from '../FlashMessage/FlashMessage';

import { listenToScreenSize } from '../../actions/main';

/**
 * main App component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.main.theme);
  const stateLoaded = useSelector((state) => state.main.stateLoaded);
  const flashMessage = useSelector((state) => state.main.flashMessage);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const newSize = window.innerWidth;
      dispatch(listenToScreenSize(newSize));
    });
  }, [dispatch]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);

  if (!stateLoaded) {
    return (
      <div className="initialLoading">
        <Loading text="Chargement..." />
      </div>
    );
  }
  if (theme === '') {
    // If no theme is selected, show the starter page
    return <Starter />;
  }
  return (
    <div className="App">
      <Header />
      <main>
        {flashMessage.displayed && (
          <FlashMessage
            flashType={flashMessage.flashType}
            message={flashMessage.message}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartes" element={<Collection type="cards" />} />
          <Route path="/cartes/:slug" element={<SingleCard />} />

          <Route path="/utilisateurs" element={<Collection type="users" />} />
          <Route path="/utilisateurs/:slug" element={<User />} />
          <Route
            path="/utilisateurs/:slug/collection"
            element={<UserCollection page="collection" />}
          />
          <Route
            path="/utilisateurs/:slug/wishlist"
            element={<UserCollection page="wishlist" />}
          />
          <Route path="/profil" element={<Profile />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="//qui-sommes-nous" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
