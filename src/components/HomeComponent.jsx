import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SubBarComponent from './SubBarComponent.jsx'
import MovieCarouselComponent from './MovieCarouselComponent.jsx'

const HomeComponent = () => {
    return (
        <>
            <SubBarComponent />
            <MovieCarouselComponent  movie="the lord of the rings"/>
            <MovieCarouselComponent  movie="star wars"/>
            <MovieCarouselComponent movie="shrek" />
        </>
    )
}

export default HomeComponent