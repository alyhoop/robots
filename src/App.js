import './styles/App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students")
        .then(res => {
        setData(res.data.students)
    })
  })

  // const fullName = (data, students) => {
  //   return students.firstName + ' ' + students.lastName
  // }
  //
  //const mean = (array) => array.reduce((a, b) => a + b)

  const listStudents = data.map((students) => (
    <ListGroup as="ul" key={students.id}>
      <ListGroup.Item as="li" className="student-card">
        <Container>
          <Row>
            <Col lg={3}>
              <img
                width={200}
                height={200}
                className="align-self-start mr-3 student-image"
                src={students.pic}
                alt={students.firstName}
              />
            </Col>
            <Col>
              <h1>{students.firstName}</h1>
              <p>Email: {students.email}</p>
              <p>Company: {students.company}</p>
              <p>Skill: {students.skill}</p>
              <p>Average: {students.grades}</p>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </ListGroup>
  ));

  return (
    <div className="App">
      {listStudents}
    </div>
  );
}

export default App;
