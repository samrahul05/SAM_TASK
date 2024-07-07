import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

   const[courses,setCourses]=useState([]);

  useEffect(() =>{
    
    axios.get('http://localhost:6060/courseData')
    .then((response) =>{
        setCourses(response.data)
 
    })
    .catch((err)=>{
            console.log("Something Wrong!",err)
    })
  },[]);

  return (
    <div className="App">
          <header className="App-header">
            <h3>My Courses</h3>
            <h4>View All</h4>
          </header>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Start Date</th>
              <th>Lesson Completed</th>
              <th>Duration</th>
            </tr>
          </thead>  
        <tbody>
           {courses.map((value, index) => (
            <tr key={index}>
              <td>
                  <div className="course-info">
                      <img className="course-icon" src={value.image}/>
                      <div className="Course-name">
                         <div>{value.name}</div>
                         <div className="lessons">{value.lessons} Lessons</div>
                      </div>
                  </div>
              </td>
              <td>{value.startDate}</td>
              <td>{value.lessonsCompleted}</td>
              <td>{value.duration}</td>
            </tr>
            ))}
        </tbody>
        </table>
      
    </div>
  )};

export default App;
