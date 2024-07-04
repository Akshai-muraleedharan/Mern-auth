import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='bg-slate-200'>
                <div className='flex justify-between p-3 items-center max-w-6xl mx-auto'>
                    <Link to={'/'}>
                        <h1 className='font-bold'>Auth app</h1>
                    </Link>


                    <ul className='flex gap-4'>
                        <Link to={'/'}> <li>Home</li></Link>
                        <Link to={'/about'}><li>About</li> </Link>
                        {/* <Link to={'/profil'}><li>Profil</li> </Link> */}
                        <Link to={'/signin'} ><li>Signin</li> </Link>   
                        {/* <Link to={'/signup'}><li>Signup</li> </Link> */}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header