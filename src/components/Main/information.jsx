import About from "./about";
import Blog from "./blog";
import Skills from "./skills";


function Information(){
    return(
        <>
            <div className="bg-slate-100">
                <About/>
                <Skills/>
                <Blog/>
            </div>
        </>
    )
}

export default Information