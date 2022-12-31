function Menu(props){
    return(
        <div className="m-0 z-10 top-0 left-0 fixed w-screen h-screen bg-white dark:bg-gray-900">
             <div onClick={props.handleMenu}>X</div>
        </div>
     )
}

export default Menu;