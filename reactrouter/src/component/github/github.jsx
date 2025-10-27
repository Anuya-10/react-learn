import React from 'react'
import {useEffect,useState} from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data=useLoaderData()
   /* const [data,setdata]=useState();
    useEffect(()=>{
       fetch ('https://api.github.com/users/Anuya-10')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[])*/
    if (!data) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4">
        Loading...
      </div>
    );
  }
    return (
        <div className='text-center m-4 bg-gray-600 
        text-white p-4'>github followers : {data.followers}
        <img className='text-center' src={data.avatar_url}
        alt="git picture" width={300} />
        <div >github username: {data.name}</div>
        </div>
    )
}

export default Github

export const githubinfoloader =async()=>{
    const response =await fetch ('https://api.github.com/users/Anuya-10')
    return response.json()
}