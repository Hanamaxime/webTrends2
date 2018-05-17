//enums
enum months{
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

enum days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}


console.log("Months enum");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);

//html elements
let pTodayDate = document.getElementById("p--today--date");
let buttonBirthday = document.getElementById("button--birthday");
let inputDatePicker = document.getElementById ("input--date-picker");
let = pBirthdayMessage = document.getElementById ("p--birthday-message");


//todays date
let today : Date = new Date();
console.log(today);

//todays month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//todays day of week
console.log(today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

//todays day of month
console.log(today.getDate());

//todays year
console.log(today.getFullYear());

//display todays date to page
pTodayDate.innerHTML = 'Today is ${todayDayOfWeek}, ${todayMonth} ${today.getDate()}, ${today.getFullYear}' ;



//PART 2
let userBirthday : string;

//button functionality
buttonBirthday.onclick = function (){

//assign userBirthday valuee to input value
userBirthday = inputDatePicker.value;

console.log(userBirthday);

let userBirthdayDate : Date = new Date(userBirthday + " GMT -0400");
console.log(userBirthdayDate);
}

pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);

funtion constructDateString(inputDate : Date) : string {
  // return 'Happy Birthday' if the users birthday is todays
  if((inputDate.getMonth() === today.getMonth()) && (inoutDate.getDate() === today.getDate()) ){
  return 'Happy Birthdat!';
}

//return the date of the birthday of the current getFullYear
let currentYearBirthday : Date = new Date ('${today.getFullYear}-${inputDate.getMonth()}-${inputDate.getDate}');

return 'Your birthday is on ${currentYearBirthday.getDay()} ${months[currentYearBirthday.getMonth()]} ${currentYearBirthday.getDate()} ${currentYearBirthday.getMonth()}'
}
