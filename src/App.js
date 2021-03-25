import './styles/App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Media } from 'react-bootstrap'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students")
        .then(res => {
        setData(res.data.students)
    })
  })

  const listStudents = data.map((students) => (
    <Media key={students.id}>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={students.pic}
        alt={students.firstName}
      />
      <Media.Body>
        <h5>{students.firstName}{students.lastName}</h5>
        <p>Email: {students.email}</p>
        <p>Company: {students.company}</p>
        <p>Skill: {students.skill}</p>
        <p>Average: {students.grades}</p>
      </Media.Body>
    </Media>
  ));

  return (
    <div className="App">
      {listStudents}
    </div>
  );
}

export default App;
