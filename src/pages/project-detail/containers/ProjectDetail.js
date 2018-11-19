import React, { Component } from 'react'

const initialState = {
  projects: []
}

class ProjectDetail extends Component {
  state = initialState
    
  render() {
    return (
      <div>
        <h1>Project Detail</h1>
      </div>
    )
  }
}

export default ProjectDetail;