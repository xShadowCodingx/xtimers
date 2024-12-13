// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This file is the main component for the timer setup form
// 

// Import Modules
import { Row } from "react-bootstrap";

// Import Components
import TimerSetupFormHeader from "./TimerSetupFormHeader";
import TimerSetupFormHeaderSettings from "./TimerSetupFormHeaderSettings";
import TimerSetupFormLogoSettings from "./TimerSetupFormLogoSettings";
import TimerSetupFormTextSettings from "./TimerSetupFormTextSettings";
import TimerSetupFormTimerSettings from "./TimerSetupFormTimerSettings";
import TimerSetupFormColorSettings from "./TimerSetupFormColorSettings";
import TimerSetupFormTimerDate from "./TimerSetupFormTimerDate";
import TimerSetupFormTimerStyle from "./TimerSetupFormTimerStyle";
import TimerSetupFormTimerLink from "./TimerSetupFormTimerLink";

// Set Interface for Props
interface Props {
    setUrlLogo: any;
    setTimerHeader: any;
    setTimerHeaderFont: any;
    setTimerText: any;
    setTimerTextFont: any;
    setTimerFont: any;
    setTimerEmblem: any;
    setTimerStyleOption: any;
    setTimerDate: any;
    setBackgroundColor: any;
    backgroundColor: any;
    handleBackgroundColorChange: any;
    handleTextColorChange: any;
    textColor: any;
    timerDate: any;
    URLString: any;
};

// Export Component
export default function TimerSetupForm(props: Props) {
    return (
        <>
            <TimerSetupFormHeader />
            <Row className='g-0 justify-content-center' style={{ marginTop: '3rem' }}>
                <div className='col-lg-6 col-md-8 col-sm-10 col-12'>
                    <form>
                        <TimerSetupFormLogoSettings
                            setUrlLogo={props.setUrlLogo}
                        />
                        <TimerSetupFormHeaderSettings
                            setTimerHeader={props.setTimerHeader}
                            setTimerHeaderFont={props.setTimerHeaderFont}
                        />
                        <TimerSetupFormTextSettings
                            setTimerText={props.setTimerText}
                            setTimerTextFont={props.setTimerTextFont}
                        />

                        <TimerSetupFormTimerSettings
                            setTimerFont={props.setTimerFont}
                            setTimerEmblem={props.setTimerEmblem}
                        />

                        <TimerSetupFormColorSettings
                            backgroundColor={props.backgroundColor}
                            handleBackgroundColorChange={props.handleBackgroundColorChange}
                            textColor={props.textColor}
                            handleTextColorChange={props.handleTextColorChange}
                        />

                        <Row className='justify-content-between g-0'>

                            <TimerSetupFormTimerDate
                                timerDate={props.timerDate}
                                setTimerDate={props.setTimerDate}
                            />

                            <TimerSetupFormTimerStyle
                                setTimerStyleOption={props.setTimerStyleOption}
                            />

                        </Row>
                    </form>
                    
                    <TimerSetupFormTimerLink 
                        URLString={props.URLString}
                    />

                </div>
            </Row >
        </>
    );
};
