import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <StyledHeader>Shell {children}</StyledHeader>
)

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: #f8cecc;
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b85450;
  color: #b85450;
`
