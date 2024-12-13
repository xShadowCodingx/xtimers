// This function returns the options for the timer in an array

function returnOption(options: string | null) {
    if (options) {
        var splitOptions = options.split("");
        return splitOptions;
    }
    else {
        return ["1", "1", "1"];
    }
};

export default returnOption;