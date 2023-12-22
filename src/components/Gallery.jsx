import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    try {
      const url = `https://www.omdbapi.com/?s=${this.props.searchValue}&apikey=9a318762`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Errore HTTP. Stato: ${response.status}`);
      }

      const data = await response.json();

      // utilizzato metodo slice per passare solo i primi 6 film
      const firstSixMovies = data.Search.slice(0, 6);
      this.setState({ movies: firstSixMovies, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      console.error("Errore durante il fetch dei dati: ", error);
    }
  }

  render() {
    const { movies, error, loading } = this.state;

    return (
      <div className="dark-background">
        <h5 className="my-3 text-light text-start ms-3">Explore The {this.props.searchValue} Saga</h5>
        <Row className="g-1 text-light">
          {error && (
            <Alert variant="danger">
              {/* EXTRA gestione errori: compare un alert quando qualcosa non funziona */}
              <Alert.Heading>Oh no! Qualcosa è andato storto...</Alert.Heading>
              <p>{error}</p>
              <hr />
              <p className="mb-0">Riprova più tardi o contattaci se il problema persiste.</p>
            </Alert>
          )}
          {loading ? (
            <>
              {/* EXTRA creato div placeholder per caricamento, quando non carica si disattiva */}
              <Col xs={12}>
                <div style={{ backgroundColor: "#333", width: "100%", height: "100px" }}></div>
              </Col>
            </>
          ) : (
            movies.map((movie) => (
              <Col key={movie.imdbID} xs={6} md={4} lg="2" className="hover-zoom">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                  style={{ width: "400px", height: "100px", objectFit: "cover" }}
                />
                {/*<h6>{movie.Title}</h6>*/}
                {/* Ho passato anche il titolo giusto per far vedere qualcosa ma è molto più bello e minimal senza, perciò lo commenterò */}
              </Col>
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default Gallery;
