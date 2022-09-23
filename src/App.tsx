
import { useState } from 'react'
import './App.css'
import { CreateButton } from './components/CreateButton'

import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { TaskCard } from './components/TaskCard'

function App() {

  const [tasks, setTasks] = useState<string[]>([])

  function newTask(task: string) {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <Header />

      <div className='Content'>
        <div className='InputContent'>
          <InputTask />
          <CreateButton />
        </div>

        <div style={{ marginTop: 64 }}>

          <div className='headerTasks'>
            <p className='headerTasksText'>
              Tarefas criadas 
              <span>
                 5
              </span>
            </p>
            <p className='headerTasksText'>
              Concluidas 
              <span>
                2 de 5
              </span>
            </p>

          </div>

          <div className='tasks'>
            <TaskCard id='1'/>
            <TaskCard id='2'/>
            <TaskCard id='3'/>
            <TaskCard id='4'/>
          </div>

        </div>


      </div>


    </div>
  )
}

export default App
