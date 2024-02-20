import React from 'react'
import { useEffect, useState } from 'react';
function Throttle() {
    const [val,setval] = useState(null);
    const [data, setdata] = useState(null)
    useEffect(()=>{
      console.log('useeffect');
      const id = setTimeout(()=>{
          setdata(val)
      },800)
  
      return ()=> clearTimeout(id)
    },[val])
    return (
      <div className="App">
            <p>Enter : </p>
            <input type="text" name="" id=""  onChange={(e)=>{setval(e.target.value)}} />
            {data && <p>{data}</p>}
      </div>
    );
}

export default Throttle