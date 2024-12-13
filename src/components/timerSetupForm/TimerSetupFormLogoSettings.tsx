// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the logo settings component for the timer setup form
// 

// Import Modules
import { Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    setUrlLogo: any;
};

// Export Component
export default function TimerSetupFormLogoSettings(props: Props) {
    return (
        <Form.Group className="mb-3" controlId="LogoURL">
            <Form.Label><b>URL to Your Logo</b> <i className="timer-setup-form-optional-grey">*optional</i></Form.Label>
            <Form.Control type="text" className='col-lg-12 col-11' placeholder="Enter logo URL" onChange={(e) => props.setUrlLogo(e.target.value)} />
        </Form.Group>
    );
};