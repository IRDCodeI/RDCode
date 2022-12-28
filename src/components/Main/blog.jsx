function Blog(){
    return(
        <>
            <div className="hidden p-14 bg-slate-100 dark:bg-gray-600">
                <div className="flex flex-col">
                    <h3 className="text-5xl font-bold dark:text-white">Blog</h3>
                    <span className="w-64 h-1 mt-5 bg-gradient-to-r from-gray-900 to-transparent dark:bg-gradient-to-r dark:from-slate-100"></span>
                </div>
                <div className="w-auto m-10 p-5 flex flex-row justify-around">
                    <div className="w-fit bg-slate-300 border rounded-xl dark:bg-gray-700 dark:border-gray-500">
                        <div className="w-80 h-60 bg-empty bg-contain bg-center"></div>
                        <div className="p-4 flex flew-row space-x-6">
                            <div className="w-12 h-12 bg-rdcode bg-contain rounded-full outline outline-offset-2"></div>
                            <div>
                                <p className="font-semibold dark:text-white">Stalin David</p>
                                <p className="dark:text-white">Desarrollador</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit bg-slate-300 border rounded-xl dark:bg-gray-700 dark:border-gray-500">
                        <div className="w-80 h-60 bg-empty bg-contain bg-center"></div>
                        <div className="p-4 flex flew-row space-x-6">
                            <div className="w-12 h-12 bg-rdcode bg-contain rounded-full outline outline-offset-2"></div>
                            <div>
                                <p className="font-semibold dark:text-white">Stalin David</p>
                                <p className="dark:text-white">Desarrollador</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit bg-slate-300 border rounded-xl dark:bg-gray-700 dark:border-gray-500">
                        <div className="w-80 h-60 bg-empty bg-contain bg-center"></div>
                        <div className="p-4 flex flew-row space-x-6">
                            <div className="w-12 h-12 bg-rdcode bg-contain rounded-full outline outline-offset-2"></div>
                            <div>
                                <p className="font-semibold dark:text-white">Stalin David</p>
                                <p className="dark:text-white">Desarrollador</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Blog;