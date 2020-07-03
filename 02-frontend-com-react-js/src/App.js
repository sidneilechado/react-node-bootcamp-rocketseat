import React, { useState, useEffect } from 'react';

import './App.css';

import api from './services/api';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  // useStat returns array with 2 positions
  //
  // 1. Variable with initial value
  // 2. Function to update value

  useEffect(() => {
    api.get('/projects')
      .then(response => {
        setProjects(response.data);
      })
  }, []);

  async function handleAddProject() {
    const response = api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Teste"
    });

    const project = response.data;  
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects">

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </Header>
      <button type="button" onClick={handleAddProject}> Adicionar projeto</button>
    </>
  )
}

export default App;