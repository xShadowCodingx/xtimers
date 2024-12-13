// Author: Chase Quinn
// Date: 12/13/2024
// 
// Description: This is the xTimers main app component
// 

// Import Modules
import { useState } from 'react';

// import Functions
import xTimerFunctions from './functions';

// Initialize function object
const xtf = new xTimerFunctions();

// Import Timer Setup Form
import TimerSetupForm from './components/timerSetupForm/TimerSetupForm';

import SetPage from './components/SetPage';
import SetHeader from './components/SetHeader';
import CreateTimer from './components/CreateTimer';
import SetText from './components/SetText';
import SetLogo from './components/SetLogo';
import CreateEmblem from './components/CreateEmblem';

// Set base URL
const baseUrl = "https://xtimers.shadowcoding.com";

// Export Component
export default function App() {
  // Get the URL Parameters
  const params = xtf.getParams;

  // Set the default date to tomorrow so there is a date in the field to default to
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Set State Variables
  const [urlLogo, setUrlLogo] = useState("");
  const [timerHeader, setTimerHeader] = useState("");
  const [timerHeaderFont, setTimerHeaderFont] = useState("1");
  const [timerText, setTimerText] = useState("");
  const [timerTextFont, setTimerTextFont] = useState("1");
  const [timerFont, setTimerFont] = useState("1");
  const [timerEmblem, setTimerEmblem] = useState("");
  const [timerStyleOption, setTimerStyleOption] = useState("1");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [timerDate, setTimerDate] = useState(tomorrow.toISOString().split("T")[0]);

  // Setting options constant from the state variables to inject into the new URL link
  const options = xtf.returnOption(params.get('opt'));

  // Handles changing the background color from the swatch picker
  function handleBackgroundColorChange(color: any, event: any) {
    event.preventDefault();
    setBackgroundColor(color.hex);
  };

  // Handles changing the text color from the swatch picker
  function handleTextColorChange(color: any, event: any) {
    event.preventDefault();
    setTextColor(color.hex);
  };

  // Get URL Options Params
  const URLOptions = xtf.returnOptionsURLParameter(timerHeaderFont, timerTextFont, timerFont, timerStyleOption, timerEmblem);

  // Remove hashmarks from hex colors before sending to xtf.returnFullURL
  const bcParam = xtf.removeHashMark(backgroundColor);
  const tcParam = xtf.removeHashMark(textColor);

  // Format Date before sending to xtf.returnFullURL
  const tdParam = xtf.formatTimerDate(timerDate);
  const URLString = xtf.returnFullURL(baseUrl, bcParam, tcParam, timerHeader, timerText, urlLogo, tdParam, URLOptions);

  // If there are ANY parameters the application will render a timer
  if (params.size > 0) {
    return (
      <>
        <SetPage backgroundColor={xtf.setParamNotNull(params.get('a'))}>
          <SetLogo logoUrl={xtf.setParamNotNull(params.get('e'))} />
          <SetHeader header={xtf.setParamNotNull(params.get('c'))} headerColor={xtf.setParamNotNull(params.get('b'))} headerFont={xtf.returnFont(options[0])} />
          <CreateTimer date={xtf.setParamNotNull(params.get('date'))} timerFont={xtf.returnFont(options[2])} timerStyle={xtf.setTimerStyle(options[3])}>
            <CreateEmblem emblem={xtf.setEmblem(options[4])} emblem_alt={xtf.setParamNotNull(xtf.setEmblemAlt(options[4]))} />
          </CreateTimer>
          <SetText text={xtf.setParamNotNull(params.get('d'))} textColor={xtf.setParamNotNull(params.get('b'))} textFont={xtf.returnFont(options[1])} />
        </SetPage>
      </>
    );
  }
  // If there are NO parameters, the application will render a setup page
  else {
    return (
      <>
        <TimerSetupForm
          setUrlLogo={setUrlLogo}
          setTimerHeader={setTimerHeader}
          setTimerText={setTimerText}
          setTimerHeaderFont={setTimerHeaderFont}
          setTimerTextFont={setTimerTextFont}
          setTimerFont={setTimerFont}
          setTimerEmblem={setTimerEmblem}
          setTimerStyleOption={setTimerStyleOption}
          setTimerDate={setTimerDate}
          setBackgroundColor={setBackgroundColor}
          backgroundColor={backgroundColor}
          handleBackgroundColorChange={handleBackgroundColorChange}
          handleTextColorChange={handleTextColorChange}
          textColor={textColor}
          timerDate={timerDate}
          URLString={URLString}
        />
      </>
    );
  };
};