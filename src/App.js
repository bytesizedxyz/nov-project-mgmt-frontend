import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import ProjectListingPage from './pages/project-listing'
import ProjectDetailPage from './pages/project-detail'

class App extends Component {
  state = {
    projects: []
  }
  
  updateProjectList = (projectList) => {
    this.setState({project: projectList})
  }

  render() {
    render(
      <Router>
        <ProjectListingPage path="/ProjectList" onProjectListReceived={this.updateProjectList} />
        <ProjectDetailPage path="ProjectDetail" />
      </Router>
    )
  }
}

export default App;


import { React } from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

