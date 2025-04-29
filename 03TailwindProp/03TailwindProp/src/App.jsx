import Card from '../component/Card'
import './App.css'

function App() {
  
  
  return (
    <>
      <h1 className='text-5xl font-bold underline bg-green-100 text-red-500 p-4 rounded-xl mb-4'>Hello world!</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        <Card username='Ritik'/>
        <Card btnTxt = "CLICk me->"/>
      </div>
    </>
  )
}

export default App
