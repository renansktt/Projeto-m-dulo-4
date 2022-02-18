import logo from './img/home.png'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (

    <>
        <Card>
          <Card.Body>
            <Card.Text style={{fontFamily: 'sans-serif', fontSize:'large', margin:'10px'}}>
              <h1>Bem vindo!</h1>
            A Byebylon faz tudo por uma boa viagem. Por isso trabalha para transformar essa experiência na melhor conquista de sua vida, através de novas tendências e ampla rede de produtos e serviços turísticos. É essa forma de pensar que estabelece a Byebylon como a maior operadora de turismo da América Latina..
            O comprometimento social, a solidez e a inovação propiciaram notoriedade e visibilidade junto ao público. A Byebylon foi a primeira companhia a fretar aviões, a investir em um novo canal de distribuição com rede multimarca de produtos turísticos, a desenvolver o conceito de atendimento em shoppings e hipermercados, além de oferecer o parcelamento de viagens em 10 vezes sem juros e valores que cabem no bolso do consumidor.
            </Card.Text>
            <Card.Img variant="top" src={logo} style={{width:'50%', height:'50%', marginLeft:'25%'}} />
          </Card.Body>
        </Card>
 
    </>
  )
}

export default Home
