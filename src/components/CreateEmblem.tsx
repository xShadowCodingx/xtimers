// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the emblem component for the timer (after it is created)
// 

// Set Interface for Props
interface Props {
    emblem: any;
    emblem_alt: string;
};

// Export Component
export default function CreateEmblem(props: Props) {
  return (
    <img src={props.emblem} alt={props.emblem_alt} className="timer-emblem" />
  );
};