// This function sets the emblem from the option

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
    };
};

export default setEmblemAlt;