import { useState,useEffect } from 'react'
import Confetti from 'react-confetti'

import './App.css'

function App() {
 
  const [pieces,setPieces]=useState([])
  const[isCompleted,setCompleted]=useState(false);
  const gameIcons=[
   '🐍',
   '🐐',
   '👏',
   '🥰',
   '🌏',
   '🕴️'

  ]

  console.log(gameIcons.length)

  console.log(pieces)

  const startGame=()=>{

    const duplicateGameIcons=[...gameIcons,...gameIcons];
    
    console.log(duplicateGameIcons)

   
   
  
   let haveit=[]
    const newGameIcons=[]
    while(newGameIcons.length < (gameIcons.length)*2) {
      
      const randIndex=Math.floor(Math.random() * duplicateGameIcons.length)
      
    
      
      console.log("random number=",randIndex)
      console.log("emoji=", duplicateGameIcons[randIndex])
      
      
      
      newGameIcons.push({
        emoji:duplicateGameIcons[randIndex],
        flipped:false,
        solved:false,
        position:newGameIcons.length

      })
      

    
        console.log("check this", duplicateGameIcons.splice(randIndex,1))
        }
        setPieces(newGameIcons)
       

    
    console.log("pieces=",pieces)

  }
  useEffect(()=>{

    startGame()

  },[])

  useEffect(()=>{

    gameLogicForFlipped()
    if(pieces.length > 0){
      checkIfGameCompleted()
    }



  },[pieces])


const  checkIfGameCompleted=()=>{
 if(pieces.every((piece)=>piece.solved)){

  alert("solved")
  setCompleted(!isCompleted)

}
  else{

    console.log("not solved")

  }


 }



  const handleActive=(data)=>{
    
 const flippedData=pieces.filter((data)=> data.flipped && !data.solved);
 if(flippedData.length ===2 ) return;
    const newpieces=pieces.map((piece)=>{
      if(piece.position== data.position){
        piece.flipped =!piece.flipped;

      }
      return piece;
    });

  setPieces(newpieces);
  console.log("piecs ===",pieces)

  };

  const gameLogicForFlipped=()=> {

    const flippedData=pieces.filter((data)=> data.flipped &&!data.solved)

    if(flippedData.length===2){

     setTimeout(()=> { if(flippedData[0].emoji===flippedData[1].emoji){
        setPieces(pieces.map(data=>{

          if(data.position===flippedData[0].position || data.position===flippedData[1].position){

            data.solved =true;

          }
          return data;

        }));

      }else {

        setPieces(pieces.map(data=>{

          if(data.position===flippedData[0].position || data.position===flippedData[1].position){

            data.flipped=false

          }
          return data;

        }))
      }

    },800);
    }

  }
  
 
  return (
    <>
      <main className='main'>
        <h1> Memory Game in React</h1>
        
        <div className='container'>
        { pieces.map((data,index)=>
        <div class={`flip-card ${data.flipped? "active" : " "}`} key={index} onClick={()=>handleActive(data)}>
       
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px",height:"300px;"}} />
    </div>
    <div className="flip-card-back">
    {data.emoji}
    </div>
        
  </div>
 
</div>
 )}
        </div>
        <div className='winner'> {isCompleted? <Confetti
      
    />: " "}</div>

      </main>
    </>
  )
}

export default App
//pull the data from the onclick and check whether, the position of the data we pulled from there is same as the position of rendered data