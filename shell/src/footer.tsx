import React from 'react'
import styled from 'styled-components'

export const Footer: React.FC = () => {
  return <StyledFooter>Shell</StyledFooter>
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #f8cecc;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-top: 1px solid #b85450;
`
