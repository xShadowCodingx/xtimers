// This function returns the font from the option

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
    };
};

export default returnFont;