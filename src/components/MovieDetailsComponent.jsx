import { Col, Container, Row, Card, Badge, Spinner } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieDetailsComponent = () => {
  const { imdbID } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const movieURL = `https://www.omdbapi.com/?apikey=fc488b95&i=${imdbID}`

  useEffect(() => {
    fetch(movieURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati')
        }
        return response.json()
      })
      .then(data => {
        if (data.Response === "False") {
          navigate("*")
        } else {
          setDetails(data)
        }
        setIsLoading(false)
      })
      .catch(err => {
        console.error('Errore:', err)
        setError(err.message)
        setIsLoading(false)
      })
  }, [imdbID])

  if (isLoading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <p>Errore: {error}</p>
        <Link to="/" className="btn btn-primary">Torna alla Home</Link>
      </Container>
    )
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <Card className="text-center my-3 bg-secondary">
            <Card.Img variant="top" src={details.Poster} />
            <Card.Body>
              <Card.Title><strong>{details.Title}</strong></Card.Title>
              <Card.Text><strong>Anno di Uscita:</strong> {details.Year}</Card.Text>
              <Card.Text>
                <Badge bg="warning fs-6 text-black">{details.Type}</Badge>
              </Card.Text>
              <Link to="/" className="btn btn-success">
                Torna alla home
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetailsComponent
