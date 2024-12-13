// This function ensures any parameter brought in will not be null, instead be returned as a string when necessary

function setParamNotNull(p: any) {
    if (p) {
        return p;
    }
    else {
        return "";
    };
};

export default setParamNotNull;