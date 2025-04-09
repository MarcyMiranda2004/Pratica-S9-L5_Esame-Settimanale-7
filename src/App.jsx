import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import TVShows from './components/TVShows.jsx';  
import MovieDetailsComponent from './components/MovieDetailsComponent.jsx';  

// Extra
import SettingsComponent from './components/SettingsComponent.jsx';
import ProfileComponent from './components/ProfileComponent.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <header className='vw-100 px-5 mb-4'>
        <NavbarComponent />
      </header>

      <main className='px-5 mb-4 vw-100'>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/tvshows' element={<TVShows />} />
          <Route path='/settings' element={<SettingsComponent />} />
          <Route path='/profile' element={<ProfileComponent />} />
          <Route path='/moviedetails/:imdbID' element= {<MovieDetailsComponent />} />
          <Route path='*' element={<h1 className='text-center text-white'>404 Not Found</h1>} />
        </Routes>
      </main>

      <footer className='vw-100'>
        <FooterComponent />
      </footer>
    </BrowserRouter>
  );
}

export default App;
