import { useState, useEffect } from "react"
import { Row } from "react-bootstrap";

interface Props {
    date: string | number,
    timerFont: string,
    timerStyle: string | null,
    children: any
}

export default function CreateTimer(props: Props) {

    const [days, setDays] = useState("--");
    const [hours, setHours] = useState("--");
    const [minutes, setMinutes] = useState("--");
    const [seconds, setSeconds] = useState("--");

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date(props.date);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
            
            if (daysLeft < 10) {
                setDays('0' + daysLeft.toString());
            }
            else {
                setDays(daysLeft.toString());
            }
            if (hoursLeft < 10) {
                setHours('0' + hoursLeft.toString());
            }
            else {
                setHours(hoursLeft.toString());
            }
            if (minutesLeft < 10) {
                setMinutes('0' + minutesLeft.toString());
            }
            else {
                setMinutes(minutesLeft.toString());
            }
            if (secondsLeft < 10) {
                setSeconds('0' + secondsLeft.toString());
            }
            else {
                setSeconds(secondsLeft.toString());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [props.date]);

    return (
        <div className='text-center g-0' style={{position: 'relative'}}>
            {/* <div style={timerStylingOne}>{days ? days : '00'}:{hours ? hours : '00'}:{minutes ? minutes : '00'}:{seconds ? seconds : '00'}</div> */}
            <Row className={`justify-content-center g-0 ${props.timerStyle} ${props.timerFont}`}>
                <div className="col-lg-2 col-5 timer-cell-left" style={{border: '10px solid', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px'}}>
                    <p className="timer-cell-number">{days ? days : '00'}</p>
                    <p className="timer-cell-text">Days</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-middle-left" style={{borderTop: '10px solid', borderBottom: '10px solid', borderRight: '10px solid'}}>
                    <p className="timer-cell-number">{hours ? hours : '00'}</p>
                    <p className="timer-cell-text">Hours</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-middle-right" style={{borderTop: '10px solid', borderBottom: '10px solid', borderRight: '10px solid'}}>
                    <p className="timer-cell-number">{minutes ? minutes : '00'}</p>
                    <p className="timer-cell-text">Minutes</p>
                </div>
                <div className="col-lg-2 col-5 timer-cell-right" style={{borderTop: '10px solid', borderBottom: '10px solid', borderRight: '10px solid', borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}}>
                    <p className="timer-cell-number">{seconds ? seconds : '00'}</p>
                    <p className="timer-cell-text">Seconds</p>
                </div>
            </Row>
            {props.children}
        </div>
    )
}
