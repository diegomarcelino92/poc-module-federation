import React, { useState, useRef, useEffect, lazy } from 'react'

import styled from 'styled-components'

import { Container } from './styles'
import { useCounter } from './provider'

import store from 'shell/store'

export const AppMini: React.FC = () => {
  const [show, setShow] = useState(false)
  const [state, setState] = useState(0)

  const { counter } = useCounter()

  useEffect(() => {
    store.subscribe('mfe2', (event) => {
      const data = event.data as { teste: number }
      setState(data.teste)
    })
  }, [])

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const buttonRect = buttonRef.current?.getBoundingClientRect()

  return (
    <>
      <Button ref={buttonRef} onClick={() => setShow(!show)}>
        MFE - 1
      </Button>

      {show && (
        <Menu
          style={{
            top: buttonRect.bottom + 5,
            left: buttonRect.right - 150
          }}
        >
          <MenuContainer width={150} height={150}>
            <span>{`Event: ${state}`}</span>
            <span> {`Provider: ${counter}`}</span>
          </MenuContainer>
        </Menu>
      )}
    </>
  )
}

const Button = styled.button`
  border: none;
  background-color: #dae8fc;
  border: 1px solid #6c8ebf;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #6c8ebf;
`

const Menu = styled.div`
  position: absolute;
  top: 80px;
`

const MenuContainer = styled(Container)`
  justify-content: center;
  color: #6c8ebf;
`

export default AppMini
