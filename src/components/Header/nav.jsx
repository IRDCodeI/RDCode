import {GiHamburgerMenu} from 'react-icons/gi'
import {BsLaptop} from 'react-icons/bs'
import { useState } from 'react';
import { useEffect } from 'react';

function Nav(){

    // Almacenar estado de dark-mode en base de datos "Redis" 
    const [theme, setTheme] = useState('light')

    useEffect(
        () => {
            if(theme === 'dark'){
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
        }, [theme]);

    const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return(
            <nav className="w-9/12  m-4 py-3 px-12 flex flex-row justify-between items-center 
                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                dark:bg-gray-800 dark:border-gray-600">
                <div className="p-1 justify-between items-center flex flex-row">
                    <BsLaptop color={theme === 'light'? 'black':'white'} fontSize="1.9rem"/>
                    <span className='ml-3 text-2xl font-kanit dark:text-white'>RDCode</span></div>
                <div className='w-96'>
                    <ul className="flex flex-row justify-evenly">
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white hover:'>Inicio</li>
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'>Habilidades</li>
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'>Contactos</li>
                        <li className='font-kanit text-lg hidden md:inline-block dark:text-white'>Blog</li>   
                        <label className="hidden md:inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div onClick={handleThemeSwitch} 
                            className="w-11 h-6 bg-gray-200
                                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-300 rounded-full 
                                peer dark:bg-slate-400 peer-checked:after:translate-x-full peer-checked:after:border-white 
                                after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                 dark:border-gray-600 peer-checked:bg-gray-900"></div>                        
                        </label>                     
                    </ul>                 
                    <div className="inline-block md:hidden"><GiHamburgerMenu/></div>
                </div>
            </nav>
    )
}

export default Nav;