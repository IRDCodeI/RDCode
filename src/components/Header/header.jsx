import Nav from "./nav";

function Header(){
    return(
        <header className="p-1 flex flex-col items-center">
            <Nav/>
            <div className="w-11/12 flex flex-row justify-around">
                <div>
                    <h2 className="dark:text-white">Desarrollador</h2>
                    <h2 className="dark:text-white">Fullstack</h2>
                </div>
                <div>
                    <div className="p-2 h-46 w-40 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100">
                        <img src="/icons/html.svg"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;