import React, { Component } from 'react'

const initialState = {
  projects: []
}

class ProjectDetail extends Component {
  state = initialState
  updateTodoStatus = e => {
    this.props.updateStatus();
  };  
  render() {
    const {project} = this.props;
    return (
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {Todo(project.todoList, this.updateTodoStatus)}
      </div>
    )
  }
}
const Todo = (todoList, updateTodoStatus)=> {
return todoList.map(todo=>{
  return (<li onClick={updateTodoStatus}>
    {todo.description}
    </li>)
});
};
export default ProjectDetail;