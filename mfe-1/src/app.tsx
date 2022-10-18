import React, { lazy, Suspense } from 'react'

import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from './styles'
import { useCounter } from './provider'
import { ErrorBoundary } from './error-boundary'

const Mfe3 = lazy(() =>
  import('mfe3/app').catch(() => import('./error-boundary'))
)

// const Mfe3 = lazy(() => import('mfe3/app'))

export const App: React.FC = () => {
  const { increment } = useCounter()

  return (
    <StyledContainer>
      <Wrapper>
        <h2>MFE - 1</h2>
        <Button onClick={increment}>increment</Button>
      </Wrapper>

      <Links>
        <Link to="/mfe1">Mfe - 1</Link>
        <Link to="mfe3">Mfe - 3</Link>
      </Links>

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="mfe3"
          element={
            <Suspense fallback="loading...">
              <ErrorBoundary>
                <Mfe3 />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </StyledContainer>
  )
}

const Home = () => <img src="/react.jpeg"></img>

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
  background-color: #dae8fc;
  border: 1px solid #6c8ebf;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
`

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

const Links = styled.div`
  display: flex;
  gap: 10px;
`

export default App
