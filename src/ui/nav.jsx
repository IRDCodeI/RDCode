import Menu from './menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsLaptop} from 'react-icons/bs'
import { useState, useEffect } from 'react';
import {gsap, ScrollTrigger} from 'gsap/all';


function Nav(){

    // Almacenar estado de dark-mode en base de datos "Redis" 
    const [theme, setTheme] = useState('light')
    const [hidden, setHidden] = useState(false)

    gsap.registerPlugin(ScrollTrigger)
    //Scrub property
    useEffect( () => {
        gsap.to("#Navbar", {
            width:'97%',
            top:'0',
            margin:'5',
            duration: 1,
            scrollTrigger: {
                trigger: "#Tt",
                start: 'top center',
                end: 'bottom 100px',
                scrub: true
            }
        });
    },[])

    useEffect(
        () => {
            if(theme === 'dark'){
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
        }, [theme]);

    const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const handleMenuSwitch = () => setHidden(hidden == true ? false : true);

    return(
        <>
            <nav id='Navbar' className="fixed z-10 w-11/12 p-2 md:p-0 md:w-9/12 md:m-4 md:py-3 md:px-12 flex flex-row justify-around space-x-20 md:justify-between items-center
                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                dark:bg-gray-800 dark:border-gray-600">
                <div className="p-1 justify-between items-center flex flex-row">
                    <div className='hidden md:block'>
                        <BsLaptop color={theme === 'light'? 'black':'white'} fontSize="1.9rem"/>
                    </div>
                    <span className='text-3xl md:ml-3 tex md:text-2xl font-kanit dark:text-white'>RDCode</span></div>
                <div className='md:w-96'>
                    <ul className="flex flex-row justify-evenly space-x-2.5">
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white hover:'><a href='#Home'>Inicio</a></li>
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'><a href='#Skills'>Habilidades</a></li>
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'><a href='#Projects'>Proyectos</a></li>   
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'><a href='#Contact'>Contactos</a></li>
                        <label className="hidden md:inline-flex relative items-center cursor-pointer">
                            <input onClick={handleThemeSwitch}  type="checkbox" value="" className="sr-only peer"/>
                            <div
                            className="hidden md:block w-11 h-6 bg-gray-900
                                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-300 rounded-full 
                                peer dark:bg-slate-400 peer-checked:after:translate-x-full peer-checked:after:border-white 
                                after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                 dark:border-gray-600 peer-checked:bg-gray-200">
                            </div>                        
                        </label>                     
                    </ul>                 
                    <div className="block md:hidden" onClick={handleMenuSwitch}><GiHamburgerMenu color={theme === 'light'? 'black':'white'} fontSize={'1.9rem'}/></div>
                </div>
            </nav>
            {hidden? <Menu darkMode={theme} handleMenu={handleMenuSwitch} handleTheme={handleThemeSwitch}/> : <></>}
        </>
    )
}

export default Nav;