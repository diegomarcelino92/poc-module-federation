import { createContext, PropsWithChildren, useContext, useState } from 'react'

const Context = createContext({ counter: 0, increment: () => {} })

export const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter((c) => c + 1)

  return (
    <Context.Provider value={{ increment, counter }}>
      {children}
    </Context.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(Context)

  if (!context) throw new Error('Provider not found')

  return context
}

export default CounterProvider
