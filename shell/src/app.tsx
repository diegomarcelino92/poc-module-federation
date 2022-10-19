import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import { Footer } from './footer'
import { Header } from './header'

const Mfe1 = lazy(() => import('mfe1/app'))
const Mfe1mini = lazy(() => import('mfe1/mini'))
const Mfe1Provider = lazy(() => import('mfe1/provider'))
const Mfe2 = lazy(() => import('mfe2/app'))

export const App: React.FC = () => (
  <Mfe1Provider>
    <Header>
      <Suspense fallback="loading...">
        <Mfe1mini />
      </Suspense>
    </Header>

    <Content>
      <Router>
        <Links>
          <Link to="/">Shell</Link>
          <Link to="mfe1">MFE - 1</Link>
          <Link to="mfe2">MFE - 2</Link>
        </Links>

        <Suspense fallback="loading...">
          <Routes>
            <Route index element={<Home />} />
            <Route path="mfe1/*" element={<Mfe1 />} />
            <Route path="mfe2" element={<Mfe2 />} />
          </Routes>
        </Suspense>
      </Router>
    </Content>

    <Footer />
  </Mfe1Provider>
)

const Home = () => (
  <HomeContainer>
    <img src="http://localhost:3000/module-federation.png" />
  </HomeContainer>
)

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 600px;
    height: 600px;
  }
`

const Content = styled.main`
  display: flex;
  gap: 16px;
  flex-grow: 1;
  padding: 32px 16px;
  flex-direction: column;
  background-color: #fff;
`

const Links = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 30px;

  a {
    color: #b85450;
  }
`

export default App
