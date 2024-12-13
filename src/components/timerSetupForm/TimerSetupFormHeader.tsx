// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the header component for the timer setup form
// 

// Import Modules
import { Row } from "react-bootstrap";

// Export Component
export default function TimerSetupFormHeader() {
    return (
        <>
            <Row className='justify-content-center text-center g-0'>
                <div className='text-center col-md-6 col-11 timer-setup-form-container'>
                    <div>
                        <img src="/xtimers_logo.png" alt="xTimers Logo" className='xtimers-logo' />
                    </div>
                </div>
            </Row>
            <Row className='justify-content-center text-center g-0'>
                <div className="text-center col-md-6 col-11 timer-setup-form-container">
                    <h1 className='roboto-font timer-setup-form-header'>xTimers by ShadowCoding</h1>
                    <p className='roboto-font timer-setup-form-header-text'>Easily create and display a timer anywhere you can use a browser! The link automatically generates at the bottom of the page. Just copy and paste it into your URL bar!</p>
                </div>
            </Row>
        </>
    );
};