const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.send('<h1>Hello from FSU so FsU</h1>')
} )

app.get('/students', (request, response) => {
    let pageData = {
        students: ['Ujwala', 'Upasana', 'Tatiana', 'Patrick Ohhhh', 'Patrick Emm', 'The Talker'],
        teacherOfTheNight: 'Rice',
        topic: 'order book and pug'
    }
    response.render('students', pageData)
} )

app.listen(1337, () => {
    console.log('Lezzzzzzz goooooo!!!!')
})