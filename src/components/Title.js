import React from 'react'

function Title({name, contact, school, college, roll, bus}) {
  return (
    <div>
    <h1 style={{fontSize:50, color:"red"}}>{name}</h1>
    <h1 style={{fontSize:30, color:"red"}}>{contact}</h1>
    <h1 style={{fontSize:30, color:"red"}}>{school}</h1>
    <h1 style={{fontSize:30, color:"red"}}>{college}</h1>
    <h1 style={{fontSize:30, color:"red"}}>{roll}</h1>
    <h1 style={{fontSize:30, color:"red"}}>{bus}</h1>
     </div>
  );
}

export default Title;