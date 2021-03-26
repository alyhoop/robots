import './styles/App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Media from 'react-bootstrap/Media'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students")
        .then(res => {
        setData(res.data.students)
    })
  })

  const listStudents = data.map((students) => (
    <Media key={students.id} className="media">
      <img
        width={200}
        height={200}
        className="align-self-start mr-3 student-image"
        src={students.pic}
        alt={students.firstName}
      />
      <Media.Body>
        <h1>{students.firstName}{students.lastName}</h1>
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
