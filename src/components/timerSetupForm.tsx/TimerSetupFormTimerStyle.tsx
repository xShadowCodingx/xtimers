// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the timer style component for the timer setup form
// 

// Import Modules
import { Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    setTimerStyleOption: any;
};

// Export Component
export default function TimerSetupFormTimerStyle(props: Props) {
    return (
        <Form.Group className="mb-3 col-md-5 col-11" controlId="TimerStyle">
            <Form.Label><b>What Timer Style?</b></Form.Label>
            <Form.Select aria-label="Timer Style" onChange={(e) => props.setTimerStyleOption(e.target.value)}>
                <option value="1">Standard</option>
                <option value="2">Festive</option>
                <option value="3">Blues</option>
                <option value="4">New Year</option>
            </Form.Select>
        </Form.Group>
    );
};