// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the timer header component for the timer (after it is created)
// 

// Import Modules
import { Row } from "react-bootstrap";

// Set Interface for Props
interface Props {
    header: string | null;
    headerColor: string;
    headerFont: string;
};

// Export Component
export default function SetHeader(props: Props) {

    // Set header color from props
    const HeaderStylingOne = {
        color: "#" + props.headerColor,
    };

    return (
        <Row className='text-center g-0 mt-2 mb-4'>
            <h2 style={HeaderStylingOne} className={`${props.headerFont} timer-header`}>{props.header ? props.header : ""}</h2>
        </Row>
    );
};