import React from 'react'

export default function Todolist () {
  const handleAddTask = () => {
    alert('task added')
  }
  return (
    <div className='todoContainer'>
        <div className='addContainer'>
            <form>
                <h3>Todo list</h3>
                <br></br>
                <input
                    type='text'
                    placeholder='Enter task'></input> <button onClick={handleAddTask}>Add </button>
            </form>

        </div>
        <div className='List'>
          <ul>j</ul>
        </div>

    </div>
  )
}
