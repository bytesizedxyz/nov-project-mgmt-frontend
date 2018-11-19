import React from 'react'
import styled from 'styled-components';
import ProjectDetail from './containers/ProjectDetail'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: lime;
`

const ProjectDetailPage = () => {
  return (
    <Main>
      <ProjectDetail />
    </Main>
  )
};
export default ProjectDetailPage;
