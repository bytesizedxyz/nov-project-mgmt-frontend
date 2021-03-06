import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import ProjectListingPage from './pages/project-listing'
import ProjectDetailPage from './pages/project-detail'


class App extends Component {
  state = {
    projects: []
  }
  
  updateProjectList = (projectList) => {
    console.log("got here")
    console.log(projectList)
    const reducedList = projectList.reduce((accum, current, i) =>{
      accum[i] = current;
      return accum;
    }, {})
    this.setState({projects: reducedList})
  }
  updateActive = event =>{
    this.setState({
      active:event.target.id
    })
  };
  updateStatus = (projectId, todoId) =>{
    //this is where we'll axios
    //put to update todo status
    console.log("todo status should update");
  };  
componentDidUpdate = ()=>{
  console.log(this.state);
}
  render() {
    const {projects, active} = this.state;
    return(
      <Router>
        <ProjectListingPage path="/" updateProjectList={this.updateProjectList} updateActive={this.updateActive} />
        {projects&&<ProjectDetailPage active={projects[active]} updateStatus={this.updateStatus} path="/ProjectDetail" />}
      </Router>
    )
  }
}

export default App;

