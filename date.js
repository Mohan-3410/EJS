

// there are two method to export
module.exports.getDate = function getDate(){
    let today = new Date();
    let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    }
    let day = today.toLocaleDateString("en-US", option);
    return day;
}

exports.getDay = function getDay(){
    let today = new Date();
    let option = {
    weekday: "long",
    }
    let day = today.toLocaleDateString("en-US", option);
    return day;
}