import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavbarComponent from './components/NavbarComponent.jsx'
import SubBarComponent from './components/SubBarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import MovieCarouselComponent from './components/MovieCarouselComponent.jsx'

// Extra
import SettingsComponent from './components/SettingsComponent.jsx'
import ProfileComponent from './components/ProfileComponent.jsx'

const App = () => {
  return (
    <>
      <header className='vw-100 px-5 mb-4'>
        <NavbarComponent />
      </header>

      <main className='px-5 mb-4 vw-100'>
        <SubBarComponent />
        <MovieCarouselComponent  movie="the lord of the rings"/>
        <MovieCarouselComponent  movie="star wars"/>
        <MovieCarouselComponent movie="shrek" />
        
        {/* Extra */}
        {/* <SettingsComponent />
        <ProfileComponent /> */}
      </main>

      <footer className=' vw-100'>
        <FooterComponent />
      </footer>
    </>
  )
}

export default App
