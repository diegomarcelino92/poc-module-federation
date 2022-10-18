import styled from 'styled-components'

interface ContainerProps {
  width?: number
  height?: number
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width ?? 250}px;
  height: ${({ height }) => height ?? 250}px;
  border-radius: 20px;
  background-color: #dae8fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #6c8ebf;
  gap: 10px;
`
