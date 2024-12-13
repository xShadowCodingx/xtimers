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
            <p>You can copy the entire URL or click the Copy button</p>
            <Row className='justify-content-evenly g-0'>
                <button style={{ width: '200px' }} onClick={() => navigator.clipboard.writeText(props.URLString)}>Copy</button>
            </Row>
            <p className='mt-3'>{props.URLString}</p>
        </Row>
    );
};