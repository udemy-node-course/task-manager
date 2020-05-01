const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error("Password should not include 'password'.")
//             }
//         }
//     }
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true,

//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'Lunch   ',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

// const me = new User({
//     name: '   Simon   ',
//     email: ' MYEMAIL@AOL.COM   ',
//     password: 'Password123'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })