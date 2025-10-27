import {useState} from 'react';

function App() {
  const [color,setcolor]=useState("olive");


  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center gap-3
          shadow-lg bg-white rounded px-3 py-2">
            <button 
            onClick={()=>setcolor("red")}
            className=" outline-none px-4 rounded "
            style={{backgroundColor:"red",color:"white"}}
            >RED</button>
            <button 
            onClick={()=>setcolor("pink")}
            className=" outline-none px-4 rounded "
            style={{backgroundColor:"pink",color:"white"}}
            >pink</button>
            <button 
            onClick={()=>setcolor("yellow")}
            className=" outline-none px-4 rounded "
            style={{backgroundColor:"yellow",color:"white"}}
            >yellow</button>
            <button 
            onClick={()=>setcolor("blue")}className=" outline-none px-4 rounded "
            style={{backgroundColor:"blue",color:"white"}}
            >blue</button>
            <button 
            onClick={()=>setcolor("green")}className=" outline-none px-4 rounded "
            style={{backgroundColor:"green",color:"white"}}
            >green</button>
            <button 
            onClick={()=>setcolor("orange")}className=" outline-none px-4 rounded "
            style={{backgroundColor:"orange",color:"white"}}
            >orange</button>
            <button 
            onClick={()=>setcolor("purple")}className=" outline-none px-4 rounded "
            style={{backgroundColor:"purple",color:"white"}}
            >purple</button>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
