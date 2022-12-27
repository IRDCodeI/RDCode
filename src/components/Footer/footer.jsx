import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsLinkedin, BsTelegram, BsGithub, BsLaptop} from 'react-icons/bs'

function Footer(){
    return(
        <>
            <footer className='bg-slate-900'>
                <div className='py-10 flex flex-row justify-evenly items-center '>
                    <div className='w-96 bg-white h-px'></div>
                    <div className='w-60 h-auto flex flex-row justify-around'>
                        <MdOutlineAlternateEmail fontSize={'2.2rem'} color='white'/>
                        <BsLinkedin fontSize={'2.2rem'} color='white'/>
                        <BsTelegram fontSize={'2.2rem'} color='white'/>
                        <BsGithub fontSize={'2.2rem'} color='white'/>
                    </div>
                    <div className='w-96 bg-white h-px'></div>
                </div>
                <div className='my-6 flex flex-col items-center'>
                    <div className='flex flex-row items-center'>
                        <BsLaptop color='white'fontSize={'2.5rem'}/>
                        <p className='ml-5 text-white text-4xl font-semibold'>RDCODE</p>
                    </div>
                    <p className='text-white text-sm'>©2022 Stalin David Pillajo Masache</p>
                </div>
                <div className='py-6 flex flex-row justify-center'>
                    <span className='text-white font-semibold'>Informacion Legal</span>
                    <div className='w-px h-6 bg-white mx-4'></div>
                    <span className='text-white font-semibold'>Politica de Privacidad</span>
                    <div className='w-px h-6 bg-white mx-4'></div>
                    <span className='text-white font-semibold'>Cookies</span>
                </div>
            </footer>
        </>
    )
}

export default Footer