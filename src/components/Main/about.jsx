function About (){

    return(
        <>
            <div className="py-10 md:px-16 md:py-20 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-evenly md:items-center bg-slate-100 dark:bg-gray-600">
                <div className=" md:my-10 md:mx-28 flex flex-col w-full items-center">
                    <h3 className="md:mb-5 text-5xl text-center md:text-start font-bold dark:text-white">RDCode</h3>
                    <span className="w-52 m-4 self-start inline-block md:mb-20 md:w-60 h-1 bg-gradient-to-r from-gray-900 to-transparent
                        dark:bg-gradient-to-r dark:from-slate-100"></span>
                    <span className="relative -top-5 right-3 w-52 md:hidden self-end rotate-180 inline-block md:mb-20 md:w-60 h-1 bg-gradient-to-r from-gray-900 to-transparent
                        dark:bg-gradient-to-r dark:from-slate-100"></span>
                    <div className="bg-rdcode bg-contain border rounded-full h-52 w-52"></div>                    
                </div>
                <div className="flex flex-col items-center space-y-10 md:items-end md:space-y-12 md:mt-24">
                <p className="px-5 md:p-5 text-xl dark:text-white">
                    Hola soy Stalin David autor de mi página web personal RDCode y un apasionado por la formación constante. 
                    Me gusta crear nuevas cosas en base a mis conocimientos en front-end y back-end, 
                    además he encontrado una nueva pasión por la inteligencia artificial por lo que actualmente me encuentro 
                    desarrollando mis habilidades en dicho campo tecnológico.
                </p>
                <button className="w-48 h-12 border boder-solid bg-slate-800 text-white font-semibold text-center rounded-xl text-xl
                dark:bg-white dark:text-gray-700">Contactar</button>
                </div>
            </div>
        </>
    )
}

export default About