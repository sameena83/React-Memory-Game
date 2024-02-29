import { useState } from 'react'

import './App.css'

function App() {
  const gameIcons=[
   '🐍',
   '🐐',
   '👏',
   '🥰',
   '🌏',
   '🕴️'

  ]
 
  return (
    <>
      <main className='main'>
        <h1> Memory Game in React</h1>
        
        <div className='container'>
        { gameIcons.map((pieces,index)=>
        <div class="flip-card" key={index}>
       
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px",height:"300px;"}} />
    </div>
    <div className="flip-card-back">
    {pieces}
    </div>
        
  </div>
 
</div>
 )}
        </div>

      </main>
    </>
  )
}

export default App
