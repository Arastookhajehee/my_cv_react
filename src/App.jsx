import { useState } from 'react'
import './App.css'
import CVSection from './Components/CVSection.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="row">
          <div className="col-3">
            <Contact />
          </div>
          <div className="col-9 top-border border-1 border-secondary">
            <div className="row justify-content-center">
              
            <main className="max-w-3xl mx-auto mt-10">
            <h1 className="mx-4 font-bold mt-4 text-center">Curriculum Vitae</h1>
            <CVSection />
            </main>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
