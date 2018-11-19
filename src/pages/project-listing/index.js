import React from 'react'
import styled from 'styled-components';
import ProjectList from './containers/ProjectList'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: periwinkle;
`

const ProjectListingPage = ({ updateProjectList }) => {
  return (
    <main>
      <ProjectList updateProjectList={updateProjectList} />
    </main>
  )
};
export default ProjectListingPage;