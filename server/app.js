const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const root = require('./app.controller')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.URL_CLIENT || 'http://localhost:3000'
}))

app.use('/api/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch(e) {
        console.log(`Произошла ошибка: ${e}`)
        process.exit(1)
    }
}


start()