// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the text settings component for the timer setup form
// 

// Import Modules
import { Row, Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    setTimerText: any;
    setTimerTextFont: any;
};

// Export Component
export default function TimerSetupFormTextSettings(props: Props) {
    return (
        <Row className='justify-content-between g-0'>
            <Form.Group className="mb-3 col-md-6 col-11" controlId="SubHeader">
                <Form.Label><b>What Text Would You Like Shown Below the Timer?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                <Form.Control type="text" placeholder="Enter Text" onChange={(e) => props.setTimerText(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 col-md-5 col-11" controlId="SubHeaderFont">
                <Form.Label><b>What Font For the Text?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                <Form.Select aria-label="Text Font" onChange={(e) => props.setTimerTextFont(e.target.value)}>
                    <option value="0">Choose a Font</option>
                    <option value="1" className='arial-font'>Arial</option>
                    <option value="2" className='cambria-font'>Cambria</option>
                    <option value="3" className='verdana-font'>Verdana</option>
                    <option value="4" className='times-new-roman-font'>Times New Roman</option>
                    <option value="5" className='trebuchet-font'>Trebuchet</option>
                </Form.Select>
            </Form.Group>
        </Row>
    );
};