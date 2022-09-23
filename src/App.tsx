
import { useState } from 'react'
import './App.css'
import { CreateButton } from './components/CreateButton'

import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { TaskCard } from './components/TaskCard'

interface Tasks {
  isCompleted: boolean;
  text: string;
}

function App() {

  const [tasks, setTasks] = useState<Tasks[]>([])
  const [textTaskInput, setTextTaskInput] = useState<string>('')

  function newTaskText(text: string) {
    setTextTaskInput(text)
  }

  function newTask() {
    setTasks([...tasks, { isCompleted: false, text: textTaskInput }])
    setTextTaskInput('')
  }

  function deleteTask(id: string) {
    let tasksFiltered = tasks.filter((task) => task.text !== id)
    setTasks(tasksFiltered)
  }

  function changeTaskIsCompleted(id: string) {
    let tasksChanged = tasks.map((task) => task.text !== id ? task : { isCompleted: !task.isCompleted, text: task.text})
    setTasks(tasksChanged)
  }

  console.log(tasks)

  return (
    <div className="App">
      <Header />

      <div className='Content'>
        <div className='InputContent'>
          <InputTask newTaskText={newTaskText} textTaskInput={textTaskInput} />
          <CreateButton newTask={newTask} />
        </div>

        <div style={{ marginTop: 64 }}>

          <div className='headerTasks'>
            <p className='headerTasksText'>
              Tarefas criadas
              <span>
                {tasks.length}
              </span>
            </p>
            <p className='headerTasksText'>
              Concluidas
              <span>
                {tasks.filter((task) => task.isCompleted).length} de {tasks.length}
              </span>
            </p>

          </div>

          <div className='tasks'>
            {
              tasks.map((task) => (
                <TaskCard
                  key={task.text}
                  task={task.text}
                  deleteTask={deleteTask}
                  changeTaskIsCompleted={changeTaskIsCompleted}
                  isCompleted={task.isCompleted}
                />
              ))
            }
          </div>

        </div>


      </div>


    </div>
  )
}

export default App
