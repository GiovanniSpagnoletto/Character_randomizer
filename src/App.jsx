import './index.css'
import { useState } from 'react'
import data from './Components/content'
import OC from './Components/OC'
import Generate from './Components/Generate'

function App() {
  const [oc, setOc] = useState({
    occhi: "",
    capelli: "",
    altezza: "",
    eta: "",
    taglio: "",
    lunghezza: "",
    accessori: "",
    pelle: "",
    quirk: "",
    personalita: "",
    sesso: "",
    stile: "",
    tipo: "",
    isOn: false
  })

  function randomNumber(i){
    const num = Math.floor(Math.random() * i)
    return num
  }

  function generateOC(event){
    event.stopPropagation()
    setOc({
      isOn: true,
      occhi: data.coloreOcchi[ randomNumber ( data.coloreOcchi.length ) ],
      capelli: data.coloreCapelli[ randomNumber ( data.coloreCapelli.length ) ],
      altezza: data.altezza[ randomNumber ( data.altezza.length ) ],
      eta: data.età[ randomNumber ( data.età.length ) ],
      taglio: data.taglioCapelli[ randomNumber ( data.taglioCapelli.length ) ],
      lunghezza: data.lunghezzaCapelli[ randomNumber ( data.lunghezzaCapelli.length ) ],
      accessori: data.accessori[ randomNumber ( data.accessori.length ) ],
      pelle: data.colorePelle[ randomNumber ( data.colorePelle.length ) ],
      quirk: data.particolarità[ randomNumber ( data.particolarità.length ) ],
      personalita: data.personalità[ randomNumber ( data.personalità.length ) ],
      sesso: data.sesso[ randomNumber ( data.sesso.length ) ],
      stile: data.stileVestiario[ randomNumber ( data.stileVestiario.length ) ],
      tipo: data.tipo[ randomNumber ( data.tipo.length )]
    })
    }
  
  return (
    <div>
      {oc.isOn ? <OC go={generateOC} oc={oc} /> : <Generate go={generateOC} />}
    </div>
  )
}

export default App


