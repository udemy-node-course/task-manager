const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Sorry, temporarily under maintenance.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5eb31c898028a019a52676ee')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    try {
        const user = await User.findById('5eb31c50f042e3196a19db90')
        await user.populate('tasks').execPopulate()
        console.log(user.tasks)
    } catch (e) {
        console.log('Something went wrong')
    }
    
}

main()