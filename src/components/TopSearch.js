import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';


export default function TopSearch() {
    // const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return null

        // const resultsArray = posts.filter(post => post)
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        
        <Navbar.Collapse id="navbarScroll">
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onChange={handleSearchChange}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

