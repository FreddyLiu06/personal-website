import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projectss page">
            <div className="projects-entry">
                <h3 className="projectname">Wireless Fall Detection Sensor</h3>
                <p className="projectdescription">Investigated wearable-free sensing and fall detection in individual research project supervised by Professor Wang at the Hong Kong Polytechnic University. Gathered 8 first-hand datasets of 100+ instances each using a TI mmWave FMCW sensor and processed data to train and create support vector machine model using Python sklearn library. Created prototype device by combing model with signal processing.</p>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Data Analytics Crash Course</h3>
                <p className="projectdescription">Hosted an introduction to machine learning and data analytics crash course for 20+ undergraduate students at the University of Pennsylvania. Collaborated with a team of 6 to plan content and weekly class schedule that spanned a semester. Worked together with Wharton Advisory Board to sort out logistical challenges. Integrated real-world applications with NLP to solidify students' understanding</p>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Bookshelf Project</h3>
                <p className="projectdescription">Created bookshelf web application to track of books read and personal book ratings. Developed using React on the frontend and Django on the backend, using Google books API for book data.</p>
            </div>
            <div className="projects-entry">
                <h3 className="projectname">Snake Game</h3>
                <p className="projectdescription">Developed snake game in Java from scratch.</p>
            </div>
            </div>
        </div>
    )
}

export default Projects