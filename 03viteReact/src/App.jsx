import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)

  // const myobj = {
  //   Name : "Rajan Kumar", 
  //   id : '20cs109'
  // }

  // let myArr = [1,2,3,4,5]

  return (
    <>
    <h1 className='bg-green-400 rounded-xl mb-4'>Tailwind Test</h1>

      <Card  username ='Rajan kumar' id = '20cs109'  btnText = 'Visited Me'/>
      <Card username='Satyam Kumar' btnText= 'cliked me' />

    </>
  )
}

export default App
