import '../style/style.css';
import '../style/Carousel.css';

import React, { Component } from 'react';
import Slider from 'react-slick';
import { Card, Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MovieCarouselComponent extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
    slidesToShow: 6,
  };

  componentDidMount() {
    const { movie } = this.props;
    const movieURL = `http://www.omdbapi.com/?apikey=fc488b95&s=${movie}`;

    fetch(movieURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        return response.json();
      })
      .then(data => {
        if (data.Search) {
          const filteredMovies = data.Search.filter(movie => movie.Type === 'movie');
          this.setState({ movies: filteredMovies, loading: false });
        } else {
          throw new Error('Nessun film trovato');
        }
      })
      .catch(error => {
        console.error('Errore:', error);
        this.setState({ error: error.message, loading: false });
      });

    window.addEventListener('resize', this.updateSlidesToShow);
    this.updateSlidesToShow();
  }

  updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.setState({ slidesToShow: 6 });
    } else if (width >= 992) {
      this.setState({ slidesToShow: 4 });
    } else if (width >= 576) {
      this.setState({ slidesToShow: 3 });
    } else {
      this.setState({ slidesToShow: 2 });
    }
  };

  capitalizeFirstLetter = (string) => {
    return string
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  };

  render() {
    const { movies, loading, error, slidesToShow } = this.state;

    if (loading) {
      return (
        <Container className=' d-flex justify-content-center align-items-center'>
          <Spinner animation="border" className='text-white mb-5'/>
        </Container>
      ) 
    }

    if (error) {
      return <div className="error-message" style={{color: "red"}}>Errore: {error}</div>; 
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 0,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    };

    return (
      <>
        <h2 className='text-white text-start ms-5'>{this.capitalizeFirstLetter(this.props.movie)}</h2>
        <div>
          <Slider {...settings} className='mb-4'>
            {movies.map((movie, index) => (
              <div key={index} className='d-flex justify-content-center align-items-center'>
                <Card className='w-75 p-0 border-0 m-1'>
                  <Card.Img variant="top" src={movie.Poster} className='img-fluid moviePoster' />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default MovieCarouselComponent;
