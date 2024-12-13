// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the color settings component for the timer setup form
// 

// Import Modules
import { SwatchesPicker } from "react-color";
import { Row, Form } from "react-bootstrap";

// Set Interface for Props
interface Props {
    backgroundColor: string;
    textColor: string;
    handleBackgroundColorChange: any;
    handleTextColorChange: any;
};

// Export Component
export default function TimerSetupFormColorSettings(props: Props) {
    return (
        <Row className='justify-content-center g-0'>
            <Form.Group className="mb-3 col-xxl-5 col-11" controlId="BackgroundColor">
                <Form.Label><b>Choose your Background Color:</b></Form.Label>
                <div style={{ height: "30px", width: "100px", border: "1px solid black", backgroundColor: props.backgroundColor, marginBottom: "10px" }}></div>
                <SwatchesPicker color={props.backgroundColor} onChangeComplete={props.handleBackgroundColorChange} />
            </Form.Group>
            <Form.Group className="mb-3 col-xxl-5 col-11" controlId="TextColor">
                <Form.Label><b>Choose your Text Color:</b></Form.Label>
                <div style={{ height: "30px", width: "100px", border: "1px solid black", backgroundColor: props.textColor, marginBottom: "10px" }}></div>
                <SwatchesPicker color={props.textColor} onChangeComplete={props.handleTextColorChange} />
            </Form.Group>
        </Row>
    );
};