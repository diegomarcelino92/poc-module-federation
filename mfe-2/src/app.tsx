import React, { lazy } from 'react'

import styled from 'styled-components'

import { store } from 'shell/store'
const Mfe3 = lazy(() => import('mfe3/app'))

let teste = 1

export const App: React.FC = () => (
  <Container>
    <Wrapper>
      <h2>MFE - 2</h2>
      <Button />
    </Wrapper>
    <Mfe3 />
  </Container>
)

const Button = () => (
  <StyledButton onClick={() => store.publish('mfe2', { teste: teste++ })}>
    publish
  </StyledButton>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #d5e8d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #82b366;
  gap: 10px;
  color: #82b366;
`

const StyledButton = styled.button`
  background-color: #d5e8d4;
  border: 1px solid #82b366;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  color: #82b366;
`

export default App
