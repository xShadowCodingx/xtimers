// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the timer link component for the timer setup form
// 

// Import Modules
import { Row } from "react-bootstrap";

// Set Interface for Props
interface Props {
    URLString: string;
};

// Export Component
export default function TimerSetupFormTimerLink(props: Props) {
    return (
        <Row className='text-center g-0 mt-5 mb-5'>
            <h3>Use the URL below to see your timer!</h3>
            <p>You can copy the entire URL, click the Copy button, or just visit the timer below.</p>
            <Row className='justify-content-center g-0'>
                <div className="timer-setup-button-container">
                    <button className="timer-setup-form-link-button" onClick={() => navigator.clipboard.writeText(props.URLString)}>Copy</button>
                </div>
                <Row className="timer-setup-button-container justify-content-center">
                    <a className="timer-setup-form-link-button" href={props.URLString} target="_blank">Visit Timer</a>
                </Row>
            </Row>
            <p className='mt-3 timer-setup-form-url-container'>{props.URLString}</p>
        </Row>
    );
};