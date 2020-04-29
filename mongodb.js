// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 26
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'dishes'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})

// db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    // db.collection('users').findOne({ _id: new ObjectID('5ea9a7759f290ed15086fb97')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5ea8a85cffc8eec8861941d9')}, (error, user) => {
    //     console.log(user)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ea8a4d8dcadafc7da275871")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany(
    //     { completed: false }, 
    //     { $set: { completed: true }})
    //     .then((result) => {
    //         console.log('Success!')
    //     })
    //     .catch((error) => {
    //         console.log('Error')
    //     })