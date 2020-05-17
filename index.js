let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
createTimeInEvent.call(cRecord, "44-03-15 0900")
createTimeOutEvent.call(cRecord, "44-03-15 1100")

function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arr) {
  return arr.map(el => createEmployeeRecord(el))
}

function createTimeInEvent(date) {
  let event = {
    type: "TimeIn",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  this.timeInEvents.push(event)
  return this 
}

function createTimeOutEvent(date) {
  let event = {
    type: "TimeOut",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  this.timeOutEvents.push(event)
  return this
}

function hoursWorkedOnDate(date) {
  let start = this.timeInEvents.find(ev => ev.date === date).hour
  let end = this.timeOutEvents.find(ev => ev.date === date).hour
  console.log(start)
  console.log(end)
  return (end - start)/100 
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(arr, name) {
  return arr.find(el => el.firstName === name)
}

function calculatePayroll(arr) {
  return arr.reduce((total, emp) => total += emp.timeOutEvents.reduce((total, ev) => (total += wagesEarnedOnDate.call(emp, ev.date)), 0), 0)
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
