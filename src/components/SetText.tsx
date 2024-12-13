// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the text component for the timer (after it is created)
// 

// Import Modules
import { Row } from 'react-bootstrap';

// Set Interface for Props
interface Props {
    text: string | null;
    textColor: string;
    textFont: string;
};

// Export Component
export default function SetText(props: Props) {

    // Set text color from props
    const TextStylingOne = {
        color: "#" + props.textColor,
    }

    return (
        <Row className='text-center g-0' style={TextStylingOne}>
            <p className={`${props.textFont} timer-text`}>{props.text ? props.text : ""}</p>
        </Row>
    );
};