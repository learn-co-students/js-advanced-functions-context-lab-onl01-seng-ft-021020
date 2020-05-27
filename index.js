/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(infoArray) {
    const employeeObj = {
        firstName: infoArray[0],
        familyName: infoArray[1],
        title: infoArray[2],
        payPerHour: infoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };

    return employeeObj;
}

function createEmployeeRecords(employeeArray) {
    return employeeArray.map(employee => {
        return createEmployeeRecord(employee);
    });
}

function createTimeInEvent(dateStamp) {
    const timeObject = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }

    this.timeInEvents.push(timeObject);
    return this
}

function createTimeOutEvent(dateStamp) {
    const timeObject = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }

    this.timeOutEvents.push(timeObject);
    return this
}

function hoursWorkedOnDate(dateString) {
    const timeOut = this.timeOutEvents.find(event => event.date === dateString).hour
    const timeIn = this.timeInEvents.find(event => event.date === dateString).hour

    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(dateString) {
    return hoursWorkedOnDate.call(this, dateString) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeArray) {
    const allPay = employeeArray.map(employee => {
        return allWagesFor.call(employee)
    })
    return allPay.reduce((total, num) => total + num)
}