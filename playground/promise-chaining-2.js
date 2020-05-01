require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5eaaf1009431adedf3410608')
    .then((task) => {
        console.log(task)
        return Task.countDocuments({ completed: false })
    })
    .then((count) => {
        console.log(count)
    })
    .catch((e) => {
        console.log(error)
    })