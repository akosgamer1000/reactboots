import { useState } from 'react'

import './App.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import"bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container fluid>
          <Row>
              <Col>
                <h1>oldalcim</h1>
                <Button variant="primary">hello</Button>{""}
              </Col>
          </Row>
      </Container>
    </>
  )
}

export default App
