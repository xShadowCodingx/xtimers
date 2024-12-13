// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the timer creation component for the timer (after it is created)
// 

// Import Modules
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

// Set Interface for Props
interface Props {
    date: string | number;
    timerFont: string;
    timerStyle: string | null;
    children: any;
};

// Export Component
export default function CreateTimer(props: Props) {

    // Set state variables
    const [days, setDays] = useState("--");
    const [hours, setHours] = useState("--");
    const [minutes, setMinutes] = useState("--");
    const [seconds, setSeconds] = useState("--");

    // UseEffect for refreshes
    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date(props.date);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

            // If the days, hours, minutes, or seconds are less than 10, add a 0 in front to make it two digits
            if (daysLeft < 10) {
                setDays('0' + daysLeft.toString());
            }
            else {
                setDays(daysLeft.toString());
            };
            if (hoursLeft < 10) {
                setHours('0' + hoursLeft.toString());
            }
            else {
                setHours(hoursLeft.toString());
            };
            if (minutesLeft < 10) {
                setMinutes('0' + minutesLeft.toString());
            }
            else {
                setMinutes(minutesLeft.toString());
            };
            if (secondsLeft < 10) {
                setSeconds('0' + secondsLeft.toString());
            }
            else {
                setSeconds(secondsLeft.toString());
            };
        }, 1000);

        // Clear interval
        return () => clearInterval(interval);
    }, [props.date]);

    return (
        <div className='text-center g-0 timer-pos-relative'>
            <Row className={`justify-content-center g-0 ${props.timerStyle} ${props.timerFont}`}>
                <div className="col-lg-2 col-5 timer-cell-left">
                    <p className="timer-cell-number">{days ? days : '00'}</p>
                    <p className="timer-cell-text">Days</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-middle-left">
                    <p className="timer-cell-number">{hours ? hours : '00'}</p>
                    <p className="timer-cell-text">Hours</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-middle-right">
                    <p className="timer-cell-number">{minutes ? minutes : '00'}</p>
                    <p className="timer-cell-text">Minutes</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-right">
                    <p className="timer-cell-number">{seconds ? seconds : '00'}</p>
                    <p className="timer-cell-text">Seconds</p>
                </div>
            </Row>
            {props.children}
        </div>
    );
};