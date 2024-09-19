import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browse = () => {

    const user = useSelector((store)=>store.user);

  return (
    <div>
        <Header/>
        <div className="p-48">
           <marquee behavior="scroll" direction="left">
                <h1 className="font-bold text-4xl">Welcome {user?.displayName}, We are under Maintenance. We will notify you soon</h1>
            </marquee>
</div>
    </div>
  )
}

export default Browse