import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"><Navbar.Brand>BlogMaster</Navbar.Brand></Link>
                    <Link to="/" className='link'>Home</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Button variant="outline-secondary"><Link to='/add_post' className='link'>Add Posts</Link></Button>{' '}

        
                        </Nav>

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>
        </div>
    )
}

export default NavBar