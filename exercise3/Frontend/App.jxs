
import React, {useEffect, useState} from 'react'

function App() {
    const [data, setData] = useState([])
    
    useEffect(() => {
       fetch('http://localhost:8081/listall')       // call backend route
       .then(response => response.json())
       .then(data => setData(data))
       .catch(err => console.log(err));
    }, [])
return(
    <div>
       <table class="styled-table">
       <thead>
          <th>id</th>
          <th>name</th>
          <th>birthday</th>
          <th>gpa</th>
       </thead>
       <tbody>
             {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{new Date(d.birthday).toLocaleDateString()}</td>
                    <td>{d.gpa}</td>
                  </tr>
             ))}
       </tbody>
       </table>
    </div>
)
}

export default App
