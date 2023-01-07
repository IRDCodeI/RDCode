import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsLinkedin, BsTelegram, BsGithub} from 'react-icons/bs'

function Menu(props){

     const theme = props.darkMode;

    return(
        <div className="m-0 z-10 top-0 left-0 fixed w-screen h-screen bg-white dark:bg-gray-900">
          <div className='w-full h-full flex flex-col content-between'>
          <div className='flex flex-row justify-between'>
               <div className='inline-block p-5 w-fit' onClick={props.handleMenu}><AiFillCloseCircle fontSize={'1.8rem'} color={theme === 'light'? 'black':'white'}/></div>                       
               <div className='flex flex-col items-center p-5'>
               <label className="md:inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                         <div onClick={props.handleTheme} 
                            className="md:block w-11 h-6 bg-slate-400
                                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-300 rounded-full 
                                peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white 
                                after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                 dark:border-gray-600 peer-checked:bg-slate-400">
                         </div>                        
               </label>
               </div> 
          </div>
               <div className=' w-full h-full flex flex-col items-center justify-center space-y-10 '>
                    <h3 className='font-kanit text-5xl dark:text-white'>RDCode</h3>
                    <div className='w-full px-10'>
                         <ul className='flex flex-col space-y-1.5'>
                              <li className='text-lg px-4 dark:text-white'><a onClick={props.handleMenu} href='#Home'>Inicio</a></li>
                              <hr/>
                              <li className='text-lg px-4 dark:text-white'><a onClick={props.handleMenu} href='#Skills'>Habilidades</a></li>
                              <hr/>
                              <li className='text-lg px-4 dark:text-white'><a onClick={props.handleMenu} href='#'>Proyectos</a></li>
                              <hr/>
                              <li className='text-lg px-4 dark:text-white'><a onClick={props.handleMenu} href='#Contact'>Contactos</a></li>
                              <hr/>                              
                         </ul>
                    </div>     
               </div>
               <div className='p-5 space-x-6 md:w-60 h-auto flex flex-row justify-center'>
                    <a href='#'><MdOutlineAlternateEmail fontSize={'2.3rem'} color={theme === 'light'? 'black':'white'}/></a>
                    <a href='https://www.linkedin.com/in/stalin-david-pillajo-masache-2945ba206/'><BsLinkedin fontSize={'2.3rem'} color={theme === 'light'? 'black':'white'}/></a>
                    <a href='https://t.me/RDCodev'><BsTelegram fontSize={'2.3rem'} color={theme === 'light'? 'black':'white'}/></a>
                    <a href='https://github.com/IRDCodeI'><BsGithub fontSize={'2.3rem'} color={theme === 'light'? 'black':'white'}/></a>
               </div>
          </div>
        </div>
     )
}

export default Menu;