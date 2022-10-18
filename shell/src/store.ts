interface Events {
  [key: string]: Function[]
}

interface Event<T> {
  data: T
}

export interface Observer {
  events: Events
  subscribe: (eventName: string, callback: <T>(event: Event<T>) => void) => void
  publish: <T>(eventName: string, data: T) => void
}

export const store: Observer = {
  events: {},
  subscribe(eventName: string, callback: Function) {
    if (!this.events[eventName]) this.events[eventName] = []

    this.events[eventName].push(callback)
  },
  publish<T>(eventName: string, data: T) {
    if (!this.events[eventName]) return

    this.events[eventName].forEach((callback: Function) => {
      if (typeof callback !== 'function') return
      callback({ data })
    })
  }
}

export default store
