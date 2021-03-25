import './styles/App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students")
        .then(res => {
          setData(res.data.students)
    })
  })

  const listStudents = data.map((data) => {
    
  })

  return (
    <div className="App">
      {listStudents}
    </div>
  );
}

export default App;
