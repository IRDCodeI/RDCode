import Nav from "./nav";

function Header(){
    return(
        <>
            <div className="h-100 bg-hero bg-no-repeat bg-contain lg:bg-cover bg-origin-border bg-fixed bg-bottom">
                <header className="py-8 flex flex-col items-center">
                    <Nav/>
                </header>
                <div className="h-96 w-auto flex flex-row justify-evenly items-center">
                    <div>
                        <div className="my-12 mx-3">
                            <h2 className="text-white text-7xl font-semibold">Desarrollador</h2>
                            <h2 className="text-red-600 text-7xl font-semibold">Fullstack</h2>
                        </div>
                        <div>
                            <p className="text-white text-3xl">Programador <b>Frontend</b> y <b>Backend</b></p>
                        </div>
                    </div>
                    <div className="w-96 h-96 static">
                        <div className=" relative top-0 left-0 p-4 h-46 w-36 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                            <img src="/icons/html.svg"/>
                        </div>
                        <div className=" relative -top-10 left-20 p-4 h-46 w-36 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                            <img src="/icons/css.svg"/>
                        </div>
                        <div className=" relative -top-64 left-48 p-4 h-46 w-36 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                            <img src="/icons/js.svg"/>
                        </div>
                        <div className=" relative -top-52 left-0 p-4 h-46 w-36 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                            <img src="/icons/docker.svg"/>
                        </div>
                        <div className=" relative -top-96 left-52 p-4 h-46 w-36 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                            <img src="/icons/react.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;