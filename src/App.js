import React, { useEffect, useState } from 'react';
import './App.css';

function  App() {
  //let data = {title: "wating for data"};
  const [todo, setTodo] = useState([{}]);
  //const [isData, setData] = useState(false);
  //const [isFetch, setFetch] = useState(false);

    useEffect(() => {
      async function fetchData() {
        //setFetch(true);
        const response = await fetch("https://api.github.com/users/azharali8907/repos");
      console.log("response = ",response);
      //setFetch(false);
      setTodo(await response.json());
      console.log("Data = ", todo);
      }
      fetchData();
    },[]);

    /* if(isFetch){
      return "Data Loding..."
    } */

  return (
    <div className="App">
    <h1>You are seeing all repositories</h1>
    <ul>
      {todo.map((repoObj, ind) => {
        return (<li key={ind}>{repoObj.name}</li>)
      })}
    </ul>
  </div>
  );
}

export default App;
