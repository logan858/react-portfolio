import './AboutComp.css'
import { motion } from 'framer-motion'

export default function AboutComp(props) {

    const addColor = (evnt) => {
        let elemnt = evnt.target
        if(props.theme === 'Dark') {
            elemnt.style.color = 'white'
            elemnt.style.fill = 'white'
        } else {    
            elemnt.style.color = 'rgb(131, 131, 131)'
            elemnt.style.fill = 'rgb(131, 131, 131)'
        }
    }
    const removeColor = (evnt) => {
        let elemnt = evnt.target
        if(props.theme === 'Dark') {
            elemnt.style.color = 'rgb(171, 171, 171)'
            elemnt.style.fill = 'rgb(171, 171, 171)'
        } else {    
            elemnt.style.color = 'rgba(47,47,47,0.9)'
            elemnt.style.fill = 'rgba(47,47,47,0.9)'
        }
    }

    return (
        <>
            <div
                id="about-me-intro"
                style={props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}} 
                onMouseEnter={evnt => addColor(evnt)}
                onMouseOut={evnt => removeColor(evnt)}
            >
                <img id="about-me-pic" src="images/itme.png" alt="profile-pic">
                </img>
            </div>
            <div
                id="about-me-body"
                style={props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}} 
                onMouseEnter={evnt => addColor(evnt)}
                onMouseOut={evnt => removeColor(evnt)}
            >
                Hi!  My name is Logan Major, &nbsp;a software engineering grad, &nbsp;a bringer of business solutions, &nbsp;and a student of computer science. 
                <br/><br/>
                Check out my links below to see some of my work. You can also reach out directly via LinkedIn or through the 'contact' page to the left.
            </div>
            <div
                id="about-me-footer"
                style={props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}} 
                onMouseEnter={evnt => addColor(evnt)}
                onMouseOut={evnt => removeColor(evnt)}
            >
                <a href="https://github.com/logan858" target="_blank" rel="noopener noreferrer">
                    <motion.svg 
                        className="about-me-svg"
                        whileHover={{
                            y: -8,
                        }}
                    >
                        <path 
                            className="about-me-icons"
                            onMouseEnter={evnt => addColor(evnt)}
                            onMouseOut={evnt => removeColor(evnt)}
                            style={props.theme === "Dark" ? {fill: "rgb(171, 171, 171"} : {fill: "rgba(47, 47, 47, 0.9)"}} 
                            d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"> </path>
                    </motion.svg>
                </a>
                <a href="https://www.linkedin.com/in/logan-major/" target="_blank" rel="noopener noreferrer">
                    <motion.svg 
                        className="about-me-svg"
                        whileHover={{
                            y: -8,
                        }}
                    >
                        <path 
                            className="about-me-icons"
                            onMouseEnter={evnt => addColor(evnt)}
                            onMouseOut={evnt => removeColor(evnt)}
                            style={props.theme === "Dark" ? {fill: "rgb(171, 171, 171"} : {fill: "rgba(47, 47, 47, 0.9)"}} 
                            d="M24.1,6.1H10.6c-2.7,0-4.8,2.2-4.8,4.8v13.5c0,2.7,2.2,4.8,4.8,4.8h13.5c2.7,0,4.8-2.2,4.8-4.8V10.9C28.9,8.2,26.8,6.1,24.1,6.1z M13.5,24.4h-2.9V13.8h2.9V24.4z M12.1,12.5c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7C13.8,11.8,13,12.5,12.1,12.5z M25.1,24.4h-2.9V19c0-3.2-3.9-3-3.9,0v5.4h-2.9V13.8h2.9v1.7c1.3-2.5,6.7-2.7,6.7,2.4V24.4z"
                        > 
                        </path>
                    </motion.svg>
                </a>
            </div>
        </>
    )
}