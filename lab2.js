//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
console.log("Months enum");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);
//html elements
var pTodayDate = document.getElementById("p--today--date");
var buttonBirthday = document.getElementById("button--birthday");
var inputDatePicker = document.getElementById("input--date-picker");
let = pBirthdayMessage = document.getElementById("p--birthday-message");
//todays date
var today = new Date();
console.log(today);
//todays month
console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//todays day of week
console.log(today.getDay());
var todayDayOfWeek = days[today.getDay()];
//todays day of month
console.log(today.getDate());
//todays year
console.log(today.getFullYear());
//display todays date to page
pTodayDate.innerHTML = 'Today is ${todayDayOfWeek}, ${todayMonth} ${today.getDate()}, ${today.getFullYear}';
//PART 2
var userBirthday;
//button functionality
buttonBirthday.onclick = function () {
    //assign userBirthday valuee to input value
    userBirthday = inputDatePicker.value;
    console.log(userBirthday);
    var userBirthdayDate = new Date(userBirthday + " GMT -0400");
    console.log(userBirthdayDate);
};
pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);
funtion;
constructDateString(inputDate, Date);
string;
{
    // return 'Happy Birthday' if the users birthday is todays
    if ((inputDate.getMonth() === today.getMonth()) && (inoutDate.getDate() === today.getDate())) {
        return 'Happy Birthdat!';
    }
    //return the date of the birthday of the current getFullYear
    var currentYearBirthday = new Date('${today.getFullYear}-${inputDate.getMonth()}-${inputDate.getDate}');
    return 'Your birthday is on ${currentYearBirthday.getDay()} ${months[currentYearBirthday.getMonth()]} ${currentYearBirthday.getDate()} ${currentYearBirthday.getMonth()}';
}
