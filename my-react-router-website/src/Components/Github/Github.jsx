import React from 'react'
import { useLoaderData } from 'react-router'
import  { useEffect, useState } from 'react'

function Github() {

    const data = useLoaderData();
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github id: {data.id}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>                    
    </>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/alstan0676')
    return response.json()
}