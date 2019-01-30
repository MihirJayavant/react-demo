import * as React from 'react'
import './App.scss'
import TodoPage from './components/todo-page/todo-page'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoPage />
      </div>
    )
  }
}

export default App
