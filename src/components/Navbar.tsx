import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    }

    const signInOnClick = () => {
        loginWithRedirect();
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <div className="mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link 
                        className='font-medium text-2xl text-stone-300 tracking-tight'
                        to='/'>
                            Car Inventory
                    </Link>
                    <button 
                        onClick={dropDown} 
                        className='flex items-center px-3 py-2 text-stone-300 
                        border rounded border-stone-300 hover:text-white 
                        hover:border-white'>
                            <i className='fas fa-bars'></i>
                    </button>
                </div>
            </div>
            { isVisible ? (
            <div className='flex justify-end'>
                <div className="text-sm">
                    <Link to='/' onClick={ clicked} className='flex justify-end 
                            sm:inline-block lg:mt-0 text-stone-300 
                            hover:text-white mr-2 sm:mr-0'>
                        <Button className='p-3 m-5 bg-cyan-700 w-24 border 
                            border-transparent hover:border-white rounded'>
                                Home
                        </Button>
                    </Link>
                    <Link to='/about' onClick={ clicked} className='flex justify-end 
                            sm:inline-block lg:mt-0 text-stone-300 
                            hover:text-white mr-2 sm:mr-0'>
                        <Button className='p-3 m-5 bg-cyan-700 w-24 border 
                            border-transparent hover:border-white rounded'>
                                About
                        </Button>
                    </Link>
                    <Link to='/dashboard' onClick={ clicked} className='flex justify-end 
                            sm:inline-block lg:mt-0 text-stone-300 
                            hover:text-white mr-2 sm:mr-0'>
                        <Button className='p-3 m-5 bg-cyan-700 w-24 border 
                            border-transparent hover:border-white rounded'>
                                Dashboard
                        </Button>
                    </Link>
                    {
                        !isAuthenticated ? 
                        <Link to='/' onClick={signInOnClick} className='flex 
                                justify-end sm:inline-block lg:mt-0 text-stone-300 
                                hover:text-white mr-2 sm:mr-0'
                            >
                            <Button className='p-3 m-5 bg-cyan-700 w-24 border 
                                    border-transparent hover:border-white rounded'
                                >
                                    Login
                            </Button>
                        </Link>
                        :
                        <Link to='/' onClick={signOutOnClick} className='flex 
                                justify-end sm:inline-block lg:mt-0 text-stone-300 
                                hover:text-white mr-2 sm:mr-0'
                            >
                            <Button className='p-3 m-5 bg-cyan-700 w-24 border 
                                    border-transparent hover:border-white rounded'
                                >
                                    Logout
                            </Button>
                        </Link>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar