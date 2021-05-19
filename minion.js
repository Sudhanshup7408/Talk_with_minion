var btnTranslate = document.querySelector("#btn-translate");
var inputtxt = document.querySelector("#input-txt");
var outputtext = document.querySelector("#output-msg");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function gettranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went worng! Please again try after sometime")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    var inputText = inputtxt.value;
    fetch(gettranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var Translatedtext = json.contents.translated;
            outputtext.innerText = Translatedtext;
        })
        .catch(errorHandler)
});