
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "./Header";
import logo from "./logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function App() {
  let template='';
    let [count,setCount]=useState(1)
   let [pshow,setpshow]=useState(false)
   if(pshow){
    template=<>
    <button className='bg-[red] p-4'onClick={()=>setpshow(!pshow)}>Hide</button>
    <p>welcome to ws</p>
    </>
   }
   else{
    template=<Button className='bg-[red] p-4'onClick={()=>setpshow(!pshow)}>show</Button>
   }
  return (
    <div className="main">
      <Header email="ws@gmail.com"/>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon icon={faSearch}/>

      <footer/>
      <Container fluid>
        <Container>
          <Row>
            <Col class ='col-12 text-center'>
           <h1> welcome to ws</h1>
            </Col>
          </Row>
          <Row className="wg">
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="we" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg="3" md="6"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
            <Col lg="3" md="6"></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
