// This is the main function file, it contains all of the functions that are used within a class

// Import singular functions
import returnOption from "./returnOptions";
import returnFont from "./returnFont";
import setTimerStyle from "./setTimerStyle";
import setEmblem from "./setEmblem";
import setEmblemAlt from "./setEmblemAlt";
import setParamNotNull from "./setParamNotNull";
import removeHashMark from "./removeHashMark";
import formatTimerDate from "./formatTimerDate";
import returnOptionsURLParameter from "./returnURLOptionsParameter";
import returnFullURL from "./returnFullURL";

// Combine all functions into a class
class xTimerFunctions {
    getParams = new URLSearchParams(window.location.search);
    returnOption = returnOption;
    returnFont = returnFont;
    setTimerStyle = setTimerStyle;
    setEmblem = setEmblem;
    setEmblemAlt = setEmblemAlt;
    setParamNotNull = setParamNotNull;
    removeHashMark = removeHashMark;
    formatTimerDate = formatTimerDate;
    returnOptionsURLParameter = returnOptionsURLParameter;
    returnFullURL = returnFullURL;
};

export default xTimerFunctions;