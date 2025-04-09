import '../style/style.css';
import '../style/Carousel.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Card, Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieCarouselComponent = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(6);
  const navigate = useNavigate();

  const movieURL = `http://www.omdbapi.com/?apikey=fc488b95&s=${movie}`;

  useEffect(() => {
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
          setMovies(filteredMovies);
        } else {
          throw new Error('Nessun film trovato');
        }
      })
      .catch(error => {
        console.error('Errore:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setSlidesToShow(6);
      } else if (width >= 992) {
        setSlidesToShow(4);
      } else if (width >= 576) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);

    return () => {
      window.removeEventListener('resize', updateSlides);
    };
  }, [movie]);

  const capitalizeFirstLetter = (string) => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleCardClick = (imdbID) => {
    navigate(`/moviedetails/${imdbID}`);
  };

  if (loading) {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" className='text-white mb-5' />
      </Container>
    );
  }

  if (error) {
    return <div className="error-message" style={{ color: "red" }}>Errore: {error}</div>;
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
      <h2 className='text-white text-start ms-5'>{capitalizeFirstLetter(movie)}</h2>
      <div>
        <Slider {...settings} className='mb-4'>
          {movies.map((movie, index) => (
            <div key={index} className='d-flex justify-content-center align-items-center'>
              <Card
                className='w-75 p-0 border-0 m-1'
                onClick={() => handleCardClick(movie.imdbID)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Img variant="top" src={movie.Poster} className='img-fluid moviePoster' />
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MovieCarouselComponent;
