// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the main page component for the timer (after it is created)
// 

// Set Interface for Props
interface Props {
    backgroundColor: string;
    children: any;
};

// Export Component
export default function SetPage(props: Props) {
    return (
        <div style={{overflowX: "hidden", "height": "100vh", "width": "100vw", "backgroundColor": "#" + props.backgroundColor}}>{props.children}</div>
    );
};