import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function Contato() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }
  return (

   
      <Container style={{marginTop:'5%'}}>
        <h1 style={{width: '50%', margin:'auto'}}>Entre em contato conosco</h1>
        <Form style={{width: '50%', margin:'auto'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{fontSize:'large'}}>Informe seu e-mail</Form.Label>
          <Form.Control type="email" placeholder="nome@exemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{fontSize:'large'}}>Assunto</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit" variant='dark'>Enviar</Button>
      </Form>
      <Container style={{width: '50%', margin:'auto', marginTop:'10%'}}>
     
        Voltar para o <Button variant="dark" onClick={handleClick}>Inicio</Button>
      
      </Container>
    </Container>
    
 

    )
}

export default Contato
