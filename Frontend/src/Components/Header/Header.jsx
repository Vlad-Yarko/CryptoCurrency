import { useState } from 'react'
import { NavLink } from "react-router-dom";


function Header() {
    const [ tab, setTab ] = useState('/')

    return (
        <>
            <nav className={'bg-amber-300 py-8'}>
                <ul className='flex justify-evenly text-[150%] text-amber-700'>
                    <li className={`cursor-pointer border-2 p-2.5 rounded-full border-amber-700 
                    ${tab === '/' ? 'bg-amber-50' : 'bg-violet-200'}`}>
                        <NavLink to='/' onClick={() => setTab('/')}>Home</NavLink>
                    </li>
                    <li className={`cursor-pointer border-2 p-2.5 rounded-full border-amber-700
                        ${tab === '/crypto/BTC' ? 'bg-amber-50' : 'bg-violet-200'}`}>
                        <NavLink to='/crypto/BTC' onClick={() => setTab('/crypto/BTC')}>Crypto</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
