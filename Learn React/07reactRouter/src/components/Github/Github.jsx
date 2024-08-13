import React, { useEffect, useState } from 'react'

function Github() {
const [data,setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then(data1 => data1.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
  },[])
  
  return (
    <div className='flex justify-center' >Github Followers: {data.followers}</div>
  )
}

export default Github