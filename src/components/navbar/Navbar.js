import './Navbar.scss'; 
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="name">Freddy Liu</a>
                    <a href="https://www.linkedin.com/in/freddy-liu-153983206/" target="_blank"><LinkedIn className="icon"/></a>
                    <a href="https://github.com/FreddyLiu06" target="_blank"><GitHub className="icon" /></a>
                    <a href="mailto:freddyl6@seas.upenn.edu" target="_blank"><Email className="icon" /></a>
                </div>
                <div className="right">
                    <div className="items">
                    <a href="#intro">Intro </a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#photos">Photos</a>
                    <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar