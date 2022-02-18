import { useNavigate, Link } from 'react-router-dom'
import { Card, CardGroup, Container, Button } from 'react-bootstrap'
function Destinos() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    
<Container>
        <CardGroup>
                <Card style={{margin:'10px'}}>
                  <Card.Img variant="top" src="https://maladeaventuras.com/wp-content/uploads/2021/10/precos-fernando-de-noronha.jpg" />
                  <Card.Body >
                    <Card.Title>Fernando de Noronha</Card.Title>
                    <Card.Text>
                      Voe para Fernando de Noronha agora mesmo e se hospede nos melhores lugares !
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Link to="/Viajem">
                    <small className="text-muted" style={{fontSize:'large'}}> Vá agora mesmo clicando aqui !</small>
                    </Link>
                  </Card.Footer>
                </Card>
                <Card style={{margin:'10px'}}>
                  <Card.Img variant="top" src="https://lcchips-images.s3.amazonaws.com/media/beautiful-hawaii-from-the-sky-900x600.jpg" />
                  <Card.Body>
                    <Card.Title>Hawai</Card.Title>
                    <Card.Text>
                      Conheça o Hawai e suas belezas únicas.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Link to="/Viajem">
                    <small className="text-muted" style={{fontSize:'large'}}> Vá agora mesmo clicando aqui !</small>
                    </Link>
                  </Card.Footer>
                </Card>
                <Card style={{margin:'10px'}}>
                  <Card.Img variant="top" src="https://viagemeturismo.abril.com.br/wp-content/uploads/2015/09/magic-kingdom-personagens-da-disney-e-castelo-da-cinderela-do-fundo-na-disney-de-orlando-estados-unidos.jpg" />
                  <Card.Body>
                    <Card.Title>Disney</Card.Title>
                    <Card.Text>
                      A melhor oportunidade para você ir a Disney está aqui.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer >
                  <Link to="/Viajem">
                    <small className="text-muted" style={{fontSize:'large'}}> Vá agora mesmo clicando aqui !</small>
                    </Link>
                  </Card.Footer>
                </Card>
        </CardGroup>
  <Container style={{margin:'30px'}}>
     
        Voltar para o <Button variant="dark" onClick={handleClick}>Inicio</Button>
      
  </Container>
</Container>
  )
}

export default Destinos
