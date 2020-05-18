/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord([firstName,familyName,title,payPerHour]) {
    return {
        firstName:firstName,
        familyName:familyName,
        title:title,
        payPerHour:payPerHour,
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {
    let timeInObject = {
        type: 'TimeIn',
        hour: Number(dateTime.split(' ')[1]),
        date: dateTime.split(' ')[0]
    }
    this.timeInEvents.push(timeInObject)
    return this
}

function createTimeOutEvent(dateTime) {
  let timeOutObject = {
    type: "TimeOut",
    hour: Number(dateTime.split(" ")[1]),
    date: dateTime.split(" ")[0],
  };
  this.timeOutEvents.push(timeOutObject);
  return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date == date).hour
    let timeOut = this.timeOutEvents.find((e) => e.date == date).hour;

    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    let workedHours = hoursWorkedOnDate.call(this, date)
    return workedHours * this.payPerHour
}

function findEmployeeByFirstName(employeesArray, recordToFind){

    return employeesArray.find(record => record.firstName == recordToFind)
}

function calculatePayroll(employeesArray) {
    
    return employeesArray.reduce((total, record)=> total + allWagesFor.call(record),0)
}