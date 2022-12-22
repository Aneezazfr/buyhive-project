import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import buyhive from '../buyhive.png';
import signIn from '../signIn.svg'

export const NavBar = () => {
  return (
    <>
    {['lg'].map((expand) => (
      <Navbar expand={expand} className="mb-3 bg-white">
        <Container fluid>
          <Navbar.Brand><img style={{marginLeft: "-1.80rem"}} width="200px" height="80px" src={buyhive} /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{width: "1000px"}}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3" style={{paddingTop: "0.5rem"}}>
              <Nav.Link href="#action1">Expert Sourcing</Nav.Link>
              <Nav.Link href="#action2">Contract Manufacturing</Nav.Link>
              <Nav.Link href="#action2">Buy</Nav.Link>
              <Nav.Link href="#action2">Financing</Nav.Link>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Our Story</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action5">How to Buy</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              <hr></hr>
              <div className='d-flex flex-row justify-items-center'>
                <Nav.Link style={{marginRight: "-1rem"}}>
                  <Button style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}} className="square rounded-pill" variant="outline-info">Register</Button>
                </Nav.Link>
                <Nav.Link style={{marginRight: "-1rem"}}>
                    <Button  className="square rounded-pill" variant="outline-success">
                      <div className='d-flex justify-content-end'>
                      <img height="25px" width="25px" src={signIn} style={{paddingRight: "0.5rem"}}/>
                      <span className='d-flex justify-content-center align-self-center'>Sign In</span>
                      </div>
                  </Button>
                </Nav.Link>
                <Nav.Link style={{marginTop: "-0.25rem"}}><img width="45" height="45" src="https://img.icons8.com/sf-ultralight/50/40C057/shopping-basket.png"/></Nav.Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  )
}

export default NavBar;