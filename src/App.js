import React, { useState, useEffect } from 'react';
import studentsData from './students.json'; // Import the students data
import './App.css';
const App = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the JSON file
  useEffect(() => {
    setStudents(studentsData);
  }, []);

  return (
    <div className="app-container">
      <h1>Student Directory</h1>
      <div className="students-container">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h2>{student.name}</h2>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Subject:</strong> {student.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
