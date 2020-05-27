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

function createEmployeeRecord(array){
    const object = {
        firstName: array[0], 
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: []
    }

    return object
}

function createEmployeeRecords(array){
    const newArray = []
    for(const record of array){
        let newRecord = createEmployeeRecord(record)
        newArray.push(newRecord)
    }

    return newArray
}

function createTimeInEvent(dateStamp){
    // debugger
    const newObject = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    this.timeInEvents.push(newObject)
    return this
}

function createTimeOutEvent(dateStamp){
    const newObject = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    }
    this.timeOutEvents.push(newObject)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(element => element.date === date).hour
    const timeOut = this.timeOutEvents.find(element => element.date ===date).hour
    return (timeOut-timeIn)/100
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    let payRate = this.payPerHour
    return payRate * hours
}


function calculatePayroll(array){
    const all = array.map(employee => {return allWagesFor.call(employee)})
    return all.reduce((acc, cv)=> acc+cv)
}


function findEmployeeByFirstName(srcArray, firstName){
    let result = srcArray.find(element => {return element.firstName == firstName})
    return result
}