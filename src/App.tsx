// Import Modules
import { Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { SwatchesPicker } from 'react-color';

// Import CSS
import './App.css';

// import Functions
import SetPage from './functions/SetPage';
import SetHeader from './functions/SetHeader';
import CreateTimer from './functions/CreateTimer';
import SetText from './functions/SetText';
import SetLogo from './functions/SetLogo';
import CreateEmblem from './functions/CreateEmblem';

// Import Emblems
import HollyLeaf from './assets/holly_leaf.png';
import BirthdayCake from './assets/birthday_cake.png';
import Firework from './assets/firework.png';
import Exclamation from './assets/exclamation_mark.png';
import Heart from './assets/heart.png';
import Balloons from './assets/balloons.png';

// Set base URL
const baseUrl = "xtimers.shadowcoding.com";

// URL PARAMETERS
/*
  a: BackgroundColor
  b: TextColor (Header and Text)
  c: Header to Display
  d: Text to Display
  e: Logo URL
  date: Date
  opt: Options (5 options as numbers: Header Font, Text Font, Timer Font, Timer Style, Emblem)
    Fonts: 1-Arial 2-Cambria 3-Verdana 4-Times New Roman 5-Trebuchet
    Timer Style: 1-std 2-xmas 3-blue 4-new year
    Emblems: 1-Holly Leaf 2-Birthday Cake 3-Firework 4-Exclamation 5-Heart 6-Balloons
*/

function App() {
  const params = new URLSearchParams(window.location.search);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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

  function returnOption(options: string | null) {
    if (options) {
      var splitOptions = options.split("");
      return splitOptions
    }
    else {
      return ["1", "1", "1"]
    }
  }

  function returnFont(option: any) {
    switch (option) {
      case "1":
        return "arial-font";
      case "2":
        return "cambria-font";
      case "3":
        return "verdana-font";
      case "4":
        return "times-new-roman-font";
      case "5":
        return "trebuchet-font";
      default:
        return "arial-font";
    }
  }

  function setTimerStyle(option: any) {
    switch (option) {
      case "1":
        return "timer1";
      case "2":
        return "timer2";
      case "3":
        return "timer3";
      case "4":
        return "timer4";
      default:
        return "timer1";
    }
  }

  function setEmblem(option: any) {
    switch (option) {
      case "1":
        return HollyLeaf;
      case "2":
        return BirthdayCake;
      case "3":
        return Firework;
      case "4":
        return Exclamation;
      case "5":
        return Heart;
      case "6":
        return Balloons;
      default:
        return null;
    }
  }

  function setEmblemAlt(option: any) {
    switch (option) {
      case "1":
        return "Holly Leaf";
      case "2":
        return "Birthday Cake";
      case "3":
        return "Firework";
      case "4":
        return "Exclamation";
      case "5":
        return "Heart";
      case "6":
        return "Balloons";
      default:
        return null;
    }
  }

  // If the parameter is null, return an empty string
  function setParamNotNull(p: any) {
    if (p) {
      return p
    }
    else {
      return ""
    }
  }

  // Setting options
  const options = returnOption(params.get('opt'))

  function handleBackgroundColorChange(color: any, event: any) {
    event.preventDefault();
    setBackgroundColor(color.hex);
  }

  function handleTextColorChange(color: any, event: any) {
    event.preventDefault();
    setTextColor(color.hex);
  }

  function removeHashMark(string: string) {
    if (string.startsWith("#")) {
      return string.slice(1);
    }
    else {
      return string;
    }
  }

  function formatTimerDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`
  }

  function returnOptionsURLParameter() {
    return `&opt=${timerHeaderFont}${timerTextFont}${timerFont}${timerStyleOption}${timerEmblem}`
  }

  function returnFullURL() {
    return `${baseUrl}?a=${removeHashMark(backgroundColor)}&b=${removeHashMark(textColor)}${timerHeader != "" ? "&c=" + timerHeader.replace(/[^a-zA-Z0-9\s!.]/g, '') : ""}${timerText != "" ? "&d=" + timerText.replace(/[^a-zA-Z0-9\s!.]/g, '') : ""}${urlLogo != "" ? "&e=" + urlLogo : ""}${timerDate != "" ? "&date=" + formatTimerDate(timerDate) : ""}${returnOptionsURLParameter()}`
  }

  const URLString = returnFullURL();


  // If there are ANY parameters the application will render a timer
  if (params.size > 0) {
    return (
      <>
        <SetPage backgroundColor={setParamNotNull(params.get('a'))}>
          <SetLogo logoUrl={setParamNotNull(params.get('e'))} />
          <SetHeader header={setParamNotNull(params.get('c'))} headerColor={setParamNotNull(params.get('b'))} headerFont={returnFont(options[0])} />
          <CreateTimer date={setParamNotNull(params.get('date'))} timerFont={returnFont(options[2])} timerStyle={setTimerStyle(options[3])}>
            <CreateEmblem emblem={setEmblem(options[4])} emblem_alt={setParamNotNull(setEmblemAlt(options[4]))} />
          </CreateTimer>
          <SetText text={setParamNotNull(params.get('d'))} textColor={setParamNotNull(params.get('b'))} textFont={returnFont(options[1])} />
        </SetPage>
      </>
    )
  }
  // If there are NO parameters, the application will render a setup page
  else {
    return (
      <>
        <Row className='justify-content-center text-center g-0'>
          <div className='text-center mb-4'>
            <div style={{height: "100%", padding: "2rem"}}>
              <img src="/xtimers_logo.png" alt="xTimers Logo" className='xtimers-logo' />
            </div>
          </div>
          <h1 className='verdana-font'>xTimers by ShadowCoding</h1>
          <p className='times-new-roman-font'>Easily create and display a timer anywhere you can use a browser! The link automatically generates at the bottom of the page. Just copy and paste it into your URL bar!</p>
        </Row>
        <Row className='g-0 justify-content-center' style={{ marginTop: '3rem' }}>
          <div className='col-lg-6 col-md-8 col-sm-10 col-12'>
            <form>
              <Form.Group className="mb-3" controlId="LogoURL">
                <Form.Label><b>URL to Your Logo</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                <Form.Control type="text" className='col-lg-12 col-11' placeholder="Enter logo URL" onChange={(e) => setUrlLogo(e.target.value)} />
              </Form.Group>
              <Row className='justify-content-between g-0'>
                <Form.Group className="mb-3 col-md-6 col-11" controlId="Header">
                  <Form.Label><b>What Header Would You Like Shown?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                  <Form.Control type="text" placeholder="Enter Header Text" onChange={(e) => setTimerHeader(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-5 col-11" controlId="HeaderFont">
                  <Form.Label><b>What Font For the Header?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                  <Form.Select aria-label="Header Font" onChange={(e) => setTimerHeaderFont(e.target.value)}>
                    <option>Choose a Font</option>
                    <option value="1" className='arial-font'>Arial</option>
                    <option value="2" className='cambria-font'>Cambria</option>
                    <option value="3" className='verdana-font'>Verdana</option>
                    <option value="4" className='times-new-roman-font'>Times New Roman</option>
                    <option value="5" className='trebuchet-font'>Trebuchet</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className='justify-content-between g-0'>
                <Form.Group className="mb-3 col-md-6 col-11" controlId="SubHeader">
                  <Form.Label><b>What Text Would You Like Shown Below the Timer?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                  <Form.Control type="text" placeholder="Enter Text" onChange={(e) => setTimerText(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-5 col-11" controlId="SubHeaderFont">
                  <Form.Label><b>What Font For the Text?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                  <Form.Select aria-label="Text Font" onChange={(e) => setTimerTextFont(e.target.value)}>
                    <option value="0">Choose a Font</option>
                    <option value="1" className='arial-font'>Arial</option>
                    <option value="2" className='cambria-font'>Cambria</option>
                    <option value="3" className='verdana-font'>Verdana</option>
                    <option value="4" className='times-new-roman-font'>Times New Roman</option>
                    <option value="5" className='trebuchet-font'>Trebuchet</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className='justify-content-between g-0'>
                <Form.Group className="mb-3 col-md-5 col-11" controlId="TimerFont">
                  <Form.Label><b>What Font For the Timer?</b> <i style={{ color: "grey" }}>*optional</i></Form.Label>
                  <Form.Select aria-label="Timer Font" onChange={(e) => setTimerFont(e.target.value)}>
                    <option value="0">Choose a Font</option>
                    <option value="1" className='arial-font'>Arial</option>
                    <option value="2" className='cambria-font'>Cambria</option>
                    <option value="3" className='verdana-font'>Verdana</option>
                    <option value="4" className='times-new-roman-font'>Times New Roman</option>
                    <option value="5" className='trebuchet-font'>Trebuchet</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6 col-11" controlId="Emblem">
                  <Form.Label><b>Would you like to show an emblem on the timer?</b></Form.Label>
                  <Form.Select aria-label="Timer Emblem" onChange={(e) => setTimerEmblem(e.target.value)}>
                    <option value="0">No</option>
                    <option value="1">Holly Leaf</option>
                    <option value="2">Birthday Cake</option>
                    <option value="3">Firework</option>
                    <option value="4">Exclamation</option>
                    <option value="5">Heart</option>
                    <option value="6">Balloons</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className='justify-content-center g-0'>
                <Form.Group className="mb-3 col-xxl-5 col-11" controlId="BackgroundColor">
                  <Form.Label><b>Choose your Background Color:</b></Form.Label>
                  <div style={{ height: "30px", width: "100px", border: "1px solid black", backgroundColor: backgroundColor, marginBottom: "10px" }}></div>
                  <SwatchesPicker color={backgroundColor} onChangeComplete={handleBackgroundColorChange} />
                </Form.Group>
                <Form.Group className="mb-3 col-xxl-5 col-11" controlId="TextColor">
                  <Form.Label><b>Choose your Text Color:</b></Form.Label>
                  <div style={{ height: "30px", width: "100px", border: "1px solid black", backgroundColor: textColor, marginBottom: "10px" }}></div>
                  <SwatchesPicker color={textColor} onChangeComplete={handleTextColorChange} />
                </Form.Group>
              </Row>

              <Row className='justify-content-between g-0'>
                <Form.Group className="mb-3 col-md-6 col-11" controlId="DatePicker">
                  <Form.Label><b>What Date are we counting down to?</b></Form.Label>
                  <Form.Control type="date" value={timerDate} onChange={(e) => setTimerDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-5 col-11" controlId="Emblem">
                  <Form.Label><b>What Timer Style?</b></Form.Label>
                  <Form.Select aria-label="Timer Style" onChange={(e) => setTimerStyleOption(e.target.value)}>
                    <option value="1">Standard</option>
                    <option value="2">Festive</option>
                    <option value="3">Blues</option>
                    <option value="4">New Year</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </form>
            <Row className='text-center g-0 mt-5 mb-5'>
              <h3>Use the URL below to see your timer!</h3>
              <p>You can copy the entire URL or click the Copy button</p>
              <Row className='justify-content-evenly g-0'>
                <button style={{ width: '200px' }} onClick={() => navigator.clipboard.writeText(URLString)}>Copy</button>
              </Row>
              <p className='mt-3'>{URLString}</p>
            </Row>
          </div>
        </Row >
      </>
    )
  }
}

export default App
