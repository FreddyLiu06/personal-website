import './Experience.scss'

const Experience = () => {
    return (
        <div className = "experience" id="experience">
            <h1>Experiences</h1>
            <div className = "experiences page">
            <div className = "experiences-entry">
                <h3 className="entryTitle"><b>Teaching Assistant</b> | University of Pennsylvania</h3>
                <p className="entryText">Working as a teaching assistant for the class <b>Data Structures and Algorithms</b>. Hold weekly office hours for a class of 200+ students to understand topics and homework questions. Co-lead weekly recitation for group of 15 students to review material. Write homework questions, obfuscations, and solutions. Plan and run review sessions on topics including complexity theory, divide and conquer algorithms, graph algorithms, hashing, binary trees, and more.</p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Software Engineering Intern</b> | Sengital Limited</h3>
                <p className="entryText">Undertook outsourcing project for investment company client Gravity Capital Partners. Developed impact measurement and management platform to evaluate 60 start-up projects and determine investment targets. Collaborated with team of 3 to implement web application by delegating individual and collaborative tasks, accomplished using React on the front-end and NodeJS and MariaDB on the server.</p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Vision Programmer</b> | Penn Aerial Robotics</h3>
                <p className="entryText">Developed unmanned aerial vehicles and autonomous flight systems to complete automated tasks. Worked together with vision team on obstacle avoidance, object detection and classification, and mapping. Studied image recognition techniques such as OpenCV. Applied using Raspberry Pi</p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Coding Instructor</b> | Cobo Academy</h3>
                <p className="entryText">Assisted a 2 week introductory coding summer camp hosted in Hong Kong for a group of 15 students. Collaborated with other instructor to plan and conduct classes, implemented engaging activities that included the use of the Arduino and Microbit.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Experience