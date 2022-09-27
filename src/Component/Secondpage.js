import react from "react"
import '../Assets/secondpage.css'
import secimg from"../Assets/secimg.jpg"
import About from "./About"
import Projects from "./Projects"
function Secondpage()

{
    return(
        <div className="secondpage">
            <div className="maind">
            <div className="leftside">
                <div className="image">
                <img src={secimg}></img>
                </div>
                <div className="menue">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>RESUME</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
                </div>
            </div>
            <div className="rightside">
                
            {/* <About></About> */}
            <Projects></Projects>
            </div>
            </div>
                    
                </div>


    )
}


export default Secondpage;