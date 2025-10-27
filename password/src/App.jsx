import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setlength]=useState(8)
   const [numberallowed,setnumberallowed]=useState(false)
   const [charallowed,setcharacterallowed]=useState(false)
   const [password,setpassword]=useState("")

   // use ref hook

   const passwordref=useRef(null)
   const copypasswordtoclickboard =useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(5,10);
    window.navigator.clipboard.writeText(password)
   },[password])

   const generatepassword = useCallback(()=>{
     let pass=""
     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     if(numberallowed) str+="0123456789"
     if(charallowed) str+="!@#$%^&*()_+"

     for(let i=1;i<=length;i++){
        let char= Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
        setpassword(pass)
     }
  },[length,numberallowed,charallowed,setpassword])
  useEffect(()=>{generatepassword()},[length,numberallowed,charallowed,setpassword])

  return (
    <>
    <div className=" w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8  text-orange-500 bg-gray-700">
      <h1 className='text-white text-center'>password genertor</h1>
      <div className="flex shadow rounded-lg oveflow-hidden mb-4 py-2">
        
        <input 
        type="text" 
        className='w-full py-1 px-3 focus:outline-none rounded' 
        placeholder="passsword"
        value={password} readOnly
        ref={passwordref}/>
        <button 
        className='bg-orange-500 text-white px-3 py-1 rounded shrink-0'
        onClick={copypasswordtoclickboard}
        >copy</button>
        </div>
        <div className="flex flex-sm gap-x-2">
          <div className='flex items-center'>
            <input
            type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setlength(e.target.value)}}
            />
            <label> length:{length} </label>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberinput"
              onChange={(e)=>{
                setnumberallowed((prev)=>!prev);
              }}
            />
            <label> numbers{numberallowed} </label>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="charinput"
              onChange={(e)=>{
                setnumberallowed((prev)=>!prev);
              }}
            />
            <label> character{charallowed} </label>
            </div>
      </div>

      </div>
      </>
  ) 
}
export default App
