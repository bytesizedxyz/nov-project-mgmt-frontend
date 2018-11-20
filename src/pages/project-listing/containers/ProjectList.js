import React, { Component } from 'react'

// dummy data
const projectList = [
  {
    name: "Project One",
    description: "This one's gonna be a dousy."
  },
  {
    name: "Project Two",
    description: "Okay... Another one. We can do this.."
  },
  {
    name: "Project Three",
    description: "Slow down..."
  }
]

const initialState = {
  projects: []
}

class ProjectList extends Component {
  state = initialState
  componentDidMount = async () => {
    // axios GET request to fetch all projects
    // that will be displayed
    //setTimeout(this.props.updateProjectList(projectList), 5000)
    this.props.updateProjectList(projectList);
    // update state with projects once the request is fulfilled.
  }
  
  render() {
    return (
      <div>
        <h1>Project List</h1>
        <ul>
        {projectList.map(project=><li>{project.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default ProjectList;