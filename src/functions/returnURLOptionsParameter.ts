// This function returns the options parameter in the URL

function returnOptionsURLParameter(headerFont: string, textFont: string, timerFont: string, timerStyleOption: string, timerEmblem: string) {
    return `&opt=${headerFont}${textFont}${timerFont}${timerStyleOption}${timerEmblem}`;
};

export default returnOptionsURLParameter