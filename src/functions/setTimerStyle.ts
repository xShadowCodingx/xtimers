// This function sets the timer style from the option

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
    };
};

export default setTimerStyle;