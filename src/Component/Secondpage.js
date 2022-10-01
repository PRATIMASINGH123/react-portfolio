import React , {useState} from "react"
import '../Assets/secondpage.css'
import secimg from"../Assets/secimg.jpg"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Resume from "./Resume"
function Secondpage()

{
        const [aboutus , setAbout] = useState(true);
        const [Project , setProject] = useState(false);
        const [contact , setContact] = useState(false);
        const [resume , setResume] = useState(false); 

       
        const handleClick = (e) => {
           
            const li = document.querySelectorAll("li");
            if(li){
                for(let i=0 ; i<li.length ; i++){
                    li[i].style.color = 'black';
                }
            }
            e.target.style.color = 'red';

            if(e.target.id === 'aboutus'){

                if(Project){setProject(!Project)}
                if(contact){setContact(!contact)}
                if(resume){setResume(!resume)}
                setAbout(!aboutus);
            }

            if(e.target.id === 'project'){
                if(aboutus){setAbout(!aboutus)}
                if(contact){setContact(!contact)}
                if(resume){setResume(!resume)}
               
                setProject(!Project);
            }

            if(e.target.id === 'contact'){
                if(aboutus){setAbout(!aboutus)}
                if(Project){setProject(!Project)}
                if(resume){setResume(!resume)}
               
                setContact(!contact);
            }


            
            if(e.target.id === 'resume'){

                if(aboutus){setAbout(!aboutus)}
                if(Project){setProject(!Project)}
                if(contact){setContact(!contact)}
               
                setResume(!resume);
            }



        }

    return(
        <div className="secondpage" id="spage">
            <div className="maind">
            <div className="leftside">
                <div className="image">
                <img src={secimg}></img>
                </div>
                <div className="menue">
                <ul className="nav-left">
                    <a href="home"><li>HOME</li></a>
                    <li id="aboutus" onClick={handleClick}>ABOUT ME</li>
                    <li id="resume" onClick={handleClick}>RESUME</li>
                    <li id="project" onClick={handleClick}>PROJECTS</li>
                    <li id="contact" onClick={handleClick}>CONTACT</li>
                </ul>
                </div>
            </div>
            <div className="rightside">
            {aboutus ? <About /> : ""}
            {Project ? <Projects /> : ""}
            {contact ? <Contact /> : ""}
            {resume ? <Resume /> : ""}
            </div>

            </div>
                    
                </div>


    )
}


export default Secondpage;