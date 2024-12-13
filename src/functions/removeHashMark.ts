// This function removes the hash mark from the hex color string

function removeHashMark(string: string) {
    if (string.startsWith("#")) {
        return string.slice(1);
    }
    else {
        return string;
    };
};

export default removeHashMark;