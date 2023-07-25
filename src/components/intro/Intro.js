import './Intro.scss';
import { Button } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h1>Hello</h1>
                    <h2>I'm <b>Freddy</b>, a student at the University of Pennsylvania pursuing a bachelor's degree in Computer Science </h2>
                    <p>Currently, I'm focused on exploring my interests in machine learning, algorithms, and other areas of computer science through my classes and research projects. In my free time I enjoy playing basketball, hiking and crocheting. Thank you for taking a look at my page.</p>
                    <div className="buttons">
                        <Button variant="contained" className="button" startIcon={<LinkedIn />} size="large" href="https://www.linkedin.com/in/freddy-liu-153983206/" target="_blank">LinkedIn</Button>
                        <Button variant="contained" className="button" startIcon={<GitHub />} size = "large" href="https://github.com/FreddyLiu06" target="_blank">Github</Button>
                        <Button variant="contained" className="button" startIcon={<Email />} size="large" href="mailto:freddyl6@seas.upenn.edu" target="_blank">Email</Button>
                    </div>
                </div>
                
            </div>
            <div className="right">
                <div className="imageContainer">
                    <img src="assets/myface.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Intro