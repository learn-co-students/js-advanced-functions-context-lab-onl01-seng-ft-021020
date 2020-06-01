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

let createEmployeeRecord = function(employee) {
    let timeInEvents = []
    let timeOutEvents = []

    const record = {
        firstName: employee[0], 
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: timeInEvents,
        timeOutEvents: timeOutEvents
    }
   return record
 }

 let createEmployeeRecords = function(employees) {
    return employees.map(function(employee){
        return createEmployeeRecord(employee)
    })
 }

 let createTimeInEvent = function(timeStamp) {
    let [date, hour] = timeStamp.split(' ')
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(hour, 10), 
        date: date
    } 
    this.timeInEvents.push(timeIn)
    return this
}

let createTimeOutEvent = function(timeStamp) {
    let [date, hour] = timeStamp.split(' ')
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(hour,10), 
        date: date
    } 
    this.timeOutEvents.push(timeOut)
    return this
}

let hoursWorkedOnDate = function(date) {
    const timeInDate = this.timeInEvents.find(obj => obj.date === date)
    const timeOutDate = this.timeOutEvents.find(obj => obj.date === date)

    let hoursWorked = (timeOutDate.hour - timeInDate.hour) / 100 

    return hoursWorked 
}

let wagesEarnedOnDate = function(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}

let findEmployeeByFirstName = function(employeesArray, firstName) {
    return employeesArray.find(employee => employee.firstName === firstName)
}

let calculatePayroll = function(employeesArray) {
    return employeesArray.reduce(function(accumulator, employee){
        return accumulator + allWagesFor.call(employee)
    }, 0)
}