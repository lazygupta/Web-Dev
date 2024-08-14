import React, { useCallback, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData();

// const [data,setData] = useState([]);


  // const fetchData =useCallback(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])

  // useEffect(() => { // It runs very first when componment is called
  //   fetchData();
  // },[])
  
  return (
    <>
    <div className='flex justify-center' >Github Followers: {data.followers}</div>
    <img src={data.avatar_url} alt='Git Pic' width={300} />
    </>
  )
}

export default Github


export async function githubInfo () {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  const data = response.json()
  return data;
}