// This file contains all added elements and experimental features


//Buttons
function selectLocationMtn() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Mountain View", context);
}

function selectLocationSun() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Sunnyvale", context);
}

function selectLocationSanJ() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("SanJose", context);
}

function selectHair() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Hair", context);
}

function selectHairSpa() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Hair Spa", context);
}

function selectHairColor() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Hair Color", context);
}

function selectHairCut() {
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest("Hair Cut", context);
}

function handler(e){
    var latestResponse = Api.getResponsePayload();
    var context = latestResponse.context;
    Api.sendRequest(e.target.value, context);
}


