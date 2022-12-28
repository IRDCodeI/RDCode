function Skills(){
    return(
        <>
            <div className="p-2 md:p-8 bg-gray-100 dark:bg-gray-600 -my-1">
                <div className="p-2 border rounded-3xl border-transparent bg-slate-200 dark:bg-gray-700">
                    <div className="py-10 px-20 flex flex-col md:items-end items-center">
                        <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Habilidades</h3>
                        <span className="w-64 h-1 mt-5 rotate-180 bg-gradient-to-r from-gray-900 to-transparent dark:bg-gradient-to-r dark:from-slate-100"></span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-5 place-items-center">
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/html.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Html</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/css.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Css</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/js.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Javascript</figcaption>
                        </figure>                        
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/python.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Python</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/react.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">React</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/tailwind.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Tailwind</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/git.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Git</figcaption>
                        </figure>
                        <figure>
                            <div className=" w-32 p-2
                                bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 
                                ">
                                <img src="/icons/docker.svg"/>
                            </div>
                                <figcaption className="p-2 text-center font-medium text-xl uppercase dark:text-white">Docker</figcaption>
                        </figure>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills