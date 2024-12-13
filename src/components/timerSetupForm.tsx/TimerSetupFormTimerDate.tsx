// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the timer date component for the timer setup form
// 

// Import Modules
import { Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    timerDate: string;
    setTimerDate: any;
};

// Export Component
export default function TimerSetupFormTimerDate(props: Props) {
    return (
        <Form.Group className="mb-3 col-md-6 col-11" controlId="DatePicker">
            <Form.Label><b>What Date are we counting down to?</b></Form.Label>
            <Form.Control type="date" value={props.timerDate} onChange={(e) => props.setTimerDate(e.target.value)} />
        </Form.Group>
    );
};