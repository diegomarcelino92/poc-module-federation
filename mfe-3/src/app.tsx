import React from 'react'

import styled from 'styled-components'

export const App: React.FC = () => (
  <Container>
    <h2>MFE - 3</h2>
  </Container>
)

const Container = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 20px;
  margin: 20px;
  background-color: #ffe6cc;
  color: #444;
  display: flex;
  border: 1px solid #d79b00;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export default App
