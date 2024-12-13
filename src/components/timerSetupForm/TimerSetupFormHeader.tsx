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
        <Row className='justify-content-center text-center g-0'>
            <div className='text-center mb-4'>
                <div>
                    <img src="/xtimers_logo.png" alt="xTimers Logo" className='xtimers-logo' />
                </div>
            </div>
            <h1 className='verdana-font'>xTimers by ShadowCoding</h1>
            <p className='times-new-roman-font col-md-6 col-11'>Easily create and display a timer anywhere you can use a browser! The link automatically generates at the bottom of the page. Just copy and paste it into your URL bar!</p>
        </Row>
    );
};