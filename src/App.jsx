import { useState } from 'react'
import './App.css'
import CVSection from './Components/CVSection.jsx'
import Contact from './Components/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row min-vh-100 align-items-start">
        <div className="col-flex-3 col-lg-3 p-0 px-lg-3 border-1 border-secondary">
          <Contact />
        </div>
        <div className="col-12 col-lg-9 top-border border-1 border-secondary">
          <div className="row justify-content-center">

            <main className="max-w-3xl">
              <h1 className="mx-4 font-bold mt-4 text-center my-lg-3 d-none d-lg-block">Curriculum Vitae</h1>
              <CVSection />
            </main>
          </div>
        </div>
      </div>

      <footer className="text-center py-2 mt-4 border-top">
      curriculum vitae (cv) website written in React by Arastoo Khajehee &copy; {new Date().getFullYear()} 
      </footer>
    </>
  )
}

export default App
