function About (){

    return(
        <>
            <div className="px-16 py-20 flex flex-row justify-evenly items-center bg-slate-100 dark:bg-gray-600">
                <div className="my-10 mx-28 flex flex-col">
                    <h3 className="mb-5 text-5xl font-bold dark:text-white">RDCode</h3>
                    <span className="mb-20 w-60 h-1 bg-gradient-to-r from-gray-900 to-transparent
                        dark:bg-gradient-to-r dark:from-slate-100"></span>
                    <div className="bg-rdcode bg-contain border rounded-full h-52 w-52"></div>                    
                </div>
                <div className="flex flex-col items-end space-y-12 mt-24">
                <p className="p-5 text-xl dark:text-white">
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