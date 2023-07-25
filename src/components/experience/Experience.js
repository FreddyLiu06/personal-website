import './Experience.scss'

const Experience = () => {

    return (
        <div className = "experience" id="experience">
            <h1>Experiences</h1>
            <div className = "experiences page">
            <div className = "experiences-entry">
                <h3 className="entryTitle"><b>Undergraduate Researcher</b> | University of Pennsylvania</h3>
                <p className="entryDates">January 2023 - Present</p>
                <p className="entryText">Achieve <b>panoramic radar imaging</b> by combining signal processing and machine learning techniques. Supervised by <a href="https://cis.upenn.edu/~mingminz" target="_blank" style={{textDecoration: 'underline', color: 'blue'}}>Professor Mingmin Zhao</a>. Improve ground truth data labelling effiency by 90% by <b>iteratively training</b> a <b>depth map segmentation model</b> to automate tasks. Enable <b>circular object detection</b> capabilities by implementing a custom <b>panoramic Regional Proposal Network</b>. Integrated with a multi-task model network built on the <b>Detectron2</b> library.</p>
            </div>
            <div className = "experiences-entry">
                <h3 className="entryTitle"><b>Teaching Assistant</b> | University of Pennsylvania</h3>
                <p className="entryDates">August 2022 - Present</p>
                <p className="entryText">Working as a teaching assistant for the class <b>Data Structures and Algorithms</b>.Assist <b>200+ students</b> with understanding topics and homework questions by holding office hours. <b>Lead weekly recitation</b> for group of 15 students to review material. Write homework questions, obfuscations, and solutions. <b>Plan and run review sessions</b> on topics including <b>complexity theory, divide and conquer algorithms, graph algorithms, hashing, binary trees, and more.</b></p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Software Engineering Intern</b> | Sengital Limited</h3>
                <p className="entryDates">May 2022 - August 2022</p>
                <p className="entryText">Undertook <b>outsourcing software development project</b> for investment company client Gravity Capital Partners. Developed impact measurement and management platform to evaluate 60 start-up projects and determine investment targets. Facilitated <b>100% of startup assessments</b> by engineering web application from scratch, using <i>ReactJS</i> on frontend, and <i>NodeJS</i> and <i>MariaDB</i> on the server.</p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Vision Programmer</b> | Penn Aerial Robotics</h3>
                <p className="entryDates">January 2022 - July 2022</p>
                <p className="entryText">Developed unmanned aerial vehicles and autonomous flight systems to complete automated tasks. Worked together with vision team on obstacle avoidance, object detection and classification, and mapping. Studied image recognition techniques such as OpenCV. Applied using Raspberry Pi</p>
            </div>
            <div className="experiences-entry">
                <h3 className="entryTitle"><b>Coding Instructor</b> | Cobo Academy</h3>
                <p className="entryDates">July 2019 - August 2019</p>
                <p className="entryText">Assisted a 2 week introductory coding summer camp hosted in Hong Kong for a group of 15 students. Collaborated with other instructor to plan and conduct classes, implemented engaging activities that included the use of the Arduino and Microbit.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Experience