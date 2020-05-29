/* Your Code Here */

let createEmployeeRecord = function(ray) {
    return {
        firstName: ray[0],
        familyName: ray[1],
        title: ray[2],
        payPerHour: ray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(rayRay) {
    let employees = rayRay.map(function(e) {
        return createEmployeeRecord(e)
    });

    return employees
}

let createTimeInEvent = function(dateTime){
    let [date, hour] = dateTime.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })

    return this
} 

let createTimeOutEvent = function(dateTime){
    let [date, hour] = dateTime.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })

    return this
} 

let hoursWorkedOnDate = function(date) {
    let startTime = this.timeInEvents.find(e => e.date === date)
    let endTime = this.timeOutEvents.find(e => e.date === date)

    return (endTime.hour - startTime.hour) / 100

}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let findEmployeeByFirstName = function(empRay, firstName) {
    return empRay.find(e => e.firstName === firstName )
}

let calculatePayroll = function(empRay) {
    return empRay.reduce(function(memo, emp){
        return memo + allWagesFor.call(emp)
    }, 0)

}
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