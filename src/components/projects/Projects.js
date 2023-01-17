import './Projects.scss';
import { Button } from '@mui/material';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectss page">
            <div className="projects-entry">
                <h3 className="projectname">Traffic Sign Recognition</h3>
                <p className="projectdescription">Investigated applying various <b>classical machine learning models</b>, such as K-Nearest Neighbors, Logistic Regression, and Support Vector Machines, as well as <b>deep learning methods</b> such as Convolutional Neural Networks and transfer learning to a <b>traffic sign classification task</b>. Utilized <b>data augmentation</b>, <b>k-fold cross validation</b> hyperparameter tuning, and other techniques to optimize model performances. Methods were compared when trained on both a large dataset, and a small dataset to simulate a scenario when data is scarce. Evaluated model performance using F1 score, LIME, and CNN activation visualizations.</p>
                <Button variant="contained" className="button" size="large" href="https://github.com/willjhliang/traffic-sign-recognition" target="_blank">View Project</Button>
                <Button variant="contained" className="button" size="large" href="https://github.com/willjhliang/traffic-sign-recognition/blob/main/paper.pdf" target="_blank">Paper</Button>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Bunked Roommate Matching</h3>
                <p className="projectdescription">Develop a <b>roommate matching</b> application that functions similarly to popular dating apps, allowing users to swipe through potentail roommates and make connections. Implement a <b>user recommendation algorithm</b> using a <b>modified K-Nearest Neighbor</b> method, along with word embeddings. Develop using React, NodeJS, and MongoDB.</p>
                <Button variant="contained" className="button" size="large" href="https://github.com/FreddyLiu06/Bunked" target="_blank">View Project</Button>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Wireless Fall Detection Sensor</h3>
                <p className="projectdescription">Investigated wearable-free sensing and fall detection in individual research project supervised by Professor Wang at the Hong Kong Polytechnic University. Gathered 8 first-hand datasets of 100+ instances each using a TI mmWave FMCW sensor and processed data to train and create support vector machine model using Python sklearn library. Created prototype device by combing model with signal processing.</p>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Bookshelf Project</h3>
                <p className="projectdescription">Created bookshelf web application to track of books read and personal book ratings. Developed using React on the frontend and Django on the backend, using Google books API for book data.</p>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Snake Game</h3>
                <p className="projectdescription">Developed snake game in Java from scratch using object oriented programming techniques.</p>
            </div>
            </div>
        </div>
    )
}

export default Projects