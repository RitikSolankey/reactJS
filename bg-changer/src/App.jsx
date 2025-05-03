import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-lg p-2'>
            <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Red")}>Red</button>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Green")}>Green</button>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Blue")}>Blue</button>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Yellow")}>Yellow</button>
            <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Purple")}>Purple</button>
            <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("Pink")}>Pink</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg' onClick={() => setColor("cyan")}>Cyan</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
