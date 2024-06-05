// src/App.js
import React from 'react';
import './App.css';
import IssueList from './components/IssueList';
// import axios from 'axios';

function App() {

  // useEffect(()=>{
  //   axios.get(("https://parakhagarwal945.atlassian.net/rest/api/3/search?jql=project=KAN")).then((res)=>{
  
  //     console.log("res of api is",res)
  //   }).catch((err)=>{
  //     console.log("err is",err)
  //   })
  // },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jira Project Issues</h1>
      </header>
      <main>
        <IssueList />
      </main>
    </div>
  );
}

export default App;
