import React from 'react'
import { TodoListItem } from '../componets/TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ol className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        index={i} />
                )
                )
            }
        </ol>
    )
}
