import * as React from 'react'
import { Todo } from '../../../models/todo.model'

interface TodoListProps {
  list: Todo[]
}

const todoList = (props: TodoListProps) => {
  const list = props.list.map(data => (
    <div key={data.id} className="flex-column">
      {data.value}
    </div>
  ))

  return <div> {list} </div>
}

export default todoList