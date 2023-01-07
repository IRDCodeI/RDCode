import About from "./about";
import Projects from "./projects";
import Skills from "./skills";


function Information(){
    return(
        <>
            <div className="block bg-slate-100">
                <About/>
                <Skills/>
                <Projects/>
            </div>
        </>
    )
}

export default Information