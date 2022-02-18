import { Container, Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function Viajem() {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate('/')
  }

  return (

  <Container style={{marginLeft:'30%', marginTop:'5%', width: '50%'}}>
    <h1>Agende uma viajem conosco</h1>
    <Form.Select aria-label="seletor de destino" >
      <option>Selecione um dos nossos destinos</option>
      <option value="1">Fernando de Noronha</option>
      <option value="2">Hawai</option>
      <option value="3">Disney</option>
    </Form.Select>
    <Form.Label style={{margin:'5px'}}>Nome completo</Form.Label>
      <Form.Control type="text"id="nomeComp"aria-describedby="nomeCompleto"/>
        <Form.Label style={{margin:'5px'}}>Data para a viajem</Form.Label>
          <Form.Control type="date"id="dataViajem"aria-describedby="dataViajem"/> 
          <Button variant="dark" type="submit" style={{margin:'10px'}}>
            Enviar
          </Button>

          <Container style={{width: '50%', margin:'auto', marginTop:'25%'}}>
     
            Voltar para o <Button variant="dark" onClick={handleClick}>Inicio</Button>
      
          </Container>
      

  </Container>

  )
}



export default Viajem