// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the logo component for the timer (after it is created)
// 

// Import Modules
import { Row } from "react-bootstrap";

// Set Interface for Props
interface Props {
    logoUrl: string;
};

// Export Component
export default function SetLogo(props: Props) {
    // If there is a logo URL parameter then display a logo
    if(props.logoUrl !== "") {
        return (
            <Row className='justify-content-center g-0' style={{ marginTop: '20px' }}>
                <img src={props.logoUrl} alt="Logo" style={{maxWidth: "90vw", width: "250px"}} />
            </Row>
        )
    }
    // If there isn't one, don't display anything
    else {
        return <></>
    };
};