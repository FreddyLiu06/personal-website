import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h1>Hello!</h1>
                    <h2>I'm <b>Freddy</b>, a student at the University of Pennsylvania pursuing a bachelor's degree in Computer Science </h2>
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