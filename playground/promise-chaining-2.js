require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eaaf1009431adedf3410608')
//     .then((task) => {
//         console.log(task)
//         return Task.countDocuments({ completed: false })
//     })
//     .then((count) => {
//         console.log(count)
//     })
//     .catch((e) => {
//         console.log(error)
//     })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    console.log(task)
    const count = Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5eaaff5435054df2979aac6e')
    .then((count) => {
        console.log(count)
    })
    .catch((error) => {
        console.log(error)
    })