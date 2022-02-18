import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <ul>
        <li>
          <Link to="/"><Button variant="dark">Inicio</Button></Link>
        </li>
        <li>
          <Link to="/Destinos"><Button variant="dark">Destinos</Button></Link>
        </li>
        <li>
          <Link to="/Contato"><Button variant="dark">Contato</Button></Link>
        </li>
      </ul>
    </nav>
    
  )
}

export default Navbar
