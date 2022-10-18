declare module 'mfe1/*' {
  export const App: React.ComponentType
  export default App
}

declare module 'mfe1/provider' {
  export const App: React.ComponentType<React.PropsWithChildren>
  export default App
}

declare module 'mfe2/app' {
  export const App: React.ComponentType
  export default App
}

declare module 'mfe3/app' {
  export const App: React.ComponentType
  export default App
}

declare module 'shell/app' {
  export const App: React.ComponentType
  export default App
}

declare module 'shell/store' {
  type Observer = import('./shell/src/store').Observer
  export const store: Observer
  export default store
}
