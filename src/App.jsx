import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import elemento from './assets/elemento.png'
import Elemento from './componentes/Elemento'
import ninos from './assets/ninos.png'
import Nino from './componentes/Nino'
import Marco from './componentes/Marco'
import marco from './assets/marco.png'
import Click from './componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>

<Elemento imagen={elemento} />
< Marco imagen={marco} />
<Click />
<Nino imagen={ninos} />


      </div>
       
  )
}

export default App
