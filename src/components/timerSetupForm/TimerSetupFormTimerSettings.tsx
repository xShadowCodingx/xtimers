// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the timer settings component for the timer setup form
// 

// Import Modules
import { Row, Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    setTimerFont: any;
    setTimerEmblem: any;
};

// Export Component
export default function TimerSetupFormTimerSettings(props: Props) {
    return (
        <Row className='justify-content-between g-0'>
            <Form.Group className="mb-3 col-md-5 col-11" controlId="TimerFont">
                <Form.Label><b>What Font For the Timer?</b> <i className="timer-setup-form-optional-grey">*optional</i></Form.Label>
                <Form.Select aria-label="Timer Font" onChange={(e) => props.setTimerFont(e.target.value)}>
                    <option value="0">Choose a Font</option>
                    <option value="1" className='arial-font'>Arial</option>
                    <option value="2" className='cambria-font'>Cambria</option>
                    <option value="3" className='verdana-font'>Verdana</option>
                    <option value="4" className='times-new-roman-font'>Times New Roman</option>
                    <option value="5" className='trebuchet-font'>Trebuchet</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-md-6 col-11" controlId="Emblem">
                <Form.Label><b>Would you like to show an emblem on the timer?</b></Form.Label>
                <Form.Select aria-label="Timer Emblem" onChange={(e) => props.setTimerEmblem(e.target.value)}>
                    <option value="0">No</option>
                    <option value="1">Holly Leaf</option>
                    <option value="2">Birthday Cake</option>
                    <option value="3">Firework</option>
                    <option value="4">Exclamation</option>
                    <option value="5">Heart</option>
                    <option value="6">Balloons</option>
                </Form.Select>
            </Form.Group>
        </Row>
    );
};