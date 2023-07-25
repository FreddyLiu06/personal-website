import './Projects.scss';
import { Button } from '@mui/material';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectss page">
            <div className="projects-entry">
                <h3 className="projectname">Traffic Sign Recognition</h3>
                <p className="projectdescription">Solved traffic sign classification task by applying various <b>classical machine learning models</b>, such as K-Nearest Neighbors, Logistic Regression, and Support Vector Machines, as well as <b>deep learning methods</b> such as Convolutional Neural Networks and transformers. Optimized model performing by utilizing <b>data augmentation</b>, <b>k-fold cross validation</b> hyperparameter tuning, and other techniques. Methods were compared when trained on both a large dataset, and a small dataset to simulate a scenario when data is scarce. Evaluated model performance using F1 score, LIME, and CNN activation visualizations.</p>
                <Button variant="contained" className="button" size="large" href="https://github.com/willjhliang/traffic-sign-recognition" target="_blank">View Project</Button>
                <Button variant="contained" className="button" size="large" href="https://github.com/willjhliang/traffic-sign-recognition/blob/main/paper.pdf" target="_blank">Report</Button>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">NBA Insider Portal</h3>
                <p className="projectdescription">Developed web application that users to query and compare NBA statistics for teams and players. Reduced average database query time by <b>70%</b> using <b>query optimization</b> and <b>relational schema design</b> techniques. Enhanced <b>data quality, integrity, and efficiency</b> by leveraging <i>pandas</i> to clean dataset. Engineered interactive user interface using <i>ReactJS</i> on the front-end, and <i>NodeJS</i> on the back-end, linking to <i>MySQL</i> database hosted on <i>AWS EC2</i> instance.</p>
                <Button variant="contained" className="button" size="large" href="https://github.com/FreddyLiu06/NBA_Portal" target="_blank">View Project</Button>
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
            </div>
        </div>
    )
}

export default Projects