// This function returns the full URL

function returnFullURL(baseUrl: string, backgroundColor: string, textColor: string, timerHeader: string, timerText: string, urlLogo: string, timerDate: string, URLOptions: string) {
  return `${baseUrl}?a=${backgroundColor}&b=${textColor}${timerHeader != "" ? "&c=" + timerHeader.replace(/[^a-zA-Z0-9\s!.]/g, '') : ""}${timerText != "" ? "&d=" + timerText.replace(/[^a-zA-Z0-9\s!.]/g, '') : ""}${urlLogo != "" ? "&e=" + urlLogo : ""}${timerDate != "" ? "&date=" + timerDate : ""}${URLOptions}`;
};

export default returnFullURL;