import { useState, useCallback, useEffect, useRef } from 'react'
import wall from './assets/cool-background.png';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passGenerator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow)
      str += "012345678";
    if(charAllow)
      str += "@#$%&*~!";

    for(let i=1; i<= length; i++)
    {
       let r = Math.floor(Math.random()* str.length + 1);
       pass += str.charAt(r);
    }

    setPassword(pass);

  }, [length, numAllow, charAllow, setPassword])


  useEffect( () => {
    passGenerator();

  }, [length, numAllow, charAllow, passGenerator])
  

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className='w-full h-screen flex justify-center ' style={{ backgroundImage: `url(${wall})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',}}>

      <div className='w-[800px] h-[800px] bg-gray-500 rounded-3xl mt-20 shadow-2xl shadow-black text-center'>
          <h1 className='text-6xl mt-10 text-white' style={{
                              textShadow: '2px 2px 4px rgba(0, 0, 0, 3)',
                               }}>Password Generator</h1>

          <input type='text' placeholder='Generated Password' readOnly value={password} className='mt-10 p-6 w-[600px] px-3'></input>

          <button onClick={copyPassToClip}  className=' bg-blue-700 text-white mt-10 p-6 shadow-3xl shadow-black'>Copy</button>
          <div className='flex text-3xl gap-x-2 m-10 flex justify-center '>
          <input type="range" min={6} max={100} value={length} className=''
                onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>

          </div>
          <div className='text-3xl'>
          <input type="checkbox" defaultChecked={numAllow} className='w-8 h-8' id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);}}/>
          <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='text-3xl mt-10'>
          <input type="checkbox" defaultChecked={charAllow} className='w-8 h-8 gap-x-4' id="characterInput"
              onChange = {() => {
                setCharAllow((prev) => !prev )}}/>
          <label htmlFor="characterInput">Characters</label>
          </div>

      </div>



    </div>

  )
}

export default App
