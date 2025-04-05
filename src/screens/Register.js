import React, {useEffect, useState} from 'react'

function Register(e) {

    const [email, setEmail]= useState();   //HOOK------manage states-----stores value of input
    const [password, setPassword]= useState();   //HOOK------manage states-----stores value of input
    const [age, setAge]=useState(13);

    function handleRegister(event){
        event.preventDefault();  //do not reload screen on calling fxn
        console.log("Hello World")
    }
    // console.log(email);
    // console.log(password);

    useEffect(()=>{console.log("age: ", age);}, [age]); 

    function increaseAge (event){
        event.preventDefault(); 
        setAge(age+1);
    }

  
  return (
    <form>
        <h1>{age}</h1>
        <button onClick={increaseAge}>Increase</button>
        <div>
      <input className='form-input' type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input className='form-input'  type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
      <button onClick={handleRegister}>Submit</button>
    </div>
    
    </form>
  )
}

export default Register
