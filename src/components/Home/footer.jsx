import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsLinkedin, BsTelegram, BsGithub, BsLaptop} from 'react-icons/bs'

function Footer(){
    return(
        <>
            <footer id='Contact' className='md:block bg-slate-900'>
                <div className='py-10 flex flex-row justify-evenly items-center '>
                    <div className='w-20 md:w-96 bg-white h-px'></div>
                    <div className='space-x-2 md:w-60 h-auto flex flex-row justify-around'>
                        <MdOutlineAlternateEmail fontSize={'2.2rem'} color='white'/>
                        <a target='_blank' href='https://www.linkedin.com/in/stalin-david-pillajo-masache-2945ba206/'><BsLinkedin fontSize={'2.2rem'} color='white'/></a>
                        <a target='_blank' href='https://t.me/RDCodev'><BsTelegram fontSize={'2.2rem'} color='white'/></a>
                        <a target='_blank' href='https://github.com/IRDCodeI'><BsGithub fontSize={'2.2rem'} color='white'/></a>
                    </div>
                    <div className='w-20 md:w-96 bg-white h-px'></div>
                </div>
                <div className='md:py-8 flex flex-col items-center'>
                    <div className='flex flex-row items-center'>
                        <BsLaptop color='white'fontSize={'2.5rem'}/>
                        <p className='ml-5 text-white text-4xl font-semibold'>RDCODE</p>
                    </div>
                    <p className='text-white text-sm'>©2022 Stalin David Pillajo Masache</p>
                </div>
                <div className='hidden py-10 md:py-6 flex-row justify-center'>
                    <span className='text-center text-xs md:text-base text-white font-semibold'>Informacion Legal</span>
                    <div className='w-px h-6 bg-white mx-4'></div>
                    <span className='text-center text-xs md:text-base text-white font-semibold'>Politica de Privacidad</span>
                    <div className='w-px h-6 bg-white mx-4'></div>
                    <span className='text-center text-xs md:text-base text-white font-semibold'>Cookies</span>
                </div>
            </footer>
        </>
    )
}

export default Footer