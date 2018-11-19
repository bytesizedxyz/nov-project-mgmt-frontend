import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import ProjectListingPage from './pages/project-listing'
import ProjectDetailPage from './pages/project-detail'


class App extends Component {
  state = {
    projects: []
  }
  
  updateProjectList = (projectList) => {
    const reducedList = projectList.reduce((accum, current, i) =>{
      accum[i] = current;
    }, {})
    this.setState({project: reducedList})
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
    const {projectList, active} = this.state;
    return(
      <Router>
        Hello
        <ProjectListingPage path="/ProjectList" updateProjectList={this.updateProjectList} updateActive={this.updateActive} />
        {projectList&&<ProjectDetailPage active={projectList[active]} updateStatus={this.updateStatus} path="ProjectDetail" />}
      </Router>
    )
  }
}

export default App;

