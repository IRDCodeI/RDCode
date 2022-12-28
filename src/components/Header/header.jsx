import gsap from "gsap";
import Nav from "./nav";

function Header(){

    return(
        <>
            <div className="h-100 md:w-auto md:h-100 bg-hero bg-cover md:bg-no-repeat md:bg-contain lg:bg-cover bg-origin-border bg-fixed bg-bottom">
                <header className="py-4 md:py-8 flex flex-col items-center">
                    <Nav/>
                </header>
                <div className="h-96 w-auto md:flex md:flex-row md:justify-evenly md:items-center">
                    <div className="flex flex-col items-center">
                        <div className="my-12 mx-3">
                            <h2 className="text-white text-5xl md:text-7xl font-semibold text-center md:text-start">Desarrollador</h2>
                            <h2 className="text-red-600 text-5xl md:text-7xl font-semibold text-center md:text-start">Fullstack</h2>
                        </div>
                        <div>
                            <p className="text-center md:text-start text-white text-2xl md:text-3xl">Programador <b>Frontend</b> y <b>Backend</b></p>
                        </div>
                    </div>
                    <div className="w-full md:w-96 md:h-96 py-7 px-2 md:py-0 static flex flex-row flex-nowrap space-x-3 overflow-hidden md:block">
                        <div className="w-20 shrink-0 md:relative md:top-0 md:left-0 md:p-4 md:h-46 md:w-36 
                                bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border">
                            <img src="/icons/html.svg"/>
                        </div>
                        <div className="w-20 shrink-0 md:relative md:-top-10 md:left-20 md:p-4 md:h-46 md:w-36 
                                bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border">
                            <img src="/icons/css.svg"/>
                        </div>
                        <div className="w-20 shrink-0 md:relative md:-top-64 md:left-48 md:p-4 md:h-46 md:w-36 
                                bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border">
                            <img src="/icons/js.svg"/>
                        </div>
                        <div className="w-20 shrink-0 md:relative md:-top-52 md:left-0 md:p-4 md:h-46 md:w-36 
                                bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border">
                            <img src="/icons/docker.svg"/>
                        </div>
                        <div className="w-20 shrink-0 md:relative md:-top-96 md:left-52 md:p-4 md:h-46 md:w-36 
                                bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border">
                            <img src="/icons/react.svg"/>
                        </div>
                    </div>
                </div>
                <div className="block -bottom-44 md:block relative md:-bottom-12 rotate-180 fill-slate-100 dark:fill-gray-600">
                    <svg  className="h-16 md:h-28 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill "></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Header;