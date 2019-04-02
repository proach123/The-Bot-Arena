require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/botcontroller'),
    pg = require('pg'),
    pgSession = require('connect-pg-simple')(sessions)


    const app = express(),
        {
            SERVER_PORT,
            CONNECTION_STRING,
            SECRET_SESSION
        } = process.env;
const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
})


app.use(express.json());


app.use(sessions({
    store: new pgSession({
        pool: pgPool,
        pruneSessionInterval: 24 * 60 * 60 * 24
    }),
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 100
    }
}))



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Bot Database Actualized')
    app.listen(SERVER_PORT, () => console.log(`LLLLLLLLEEEEEETTTTTTTTSSSS GEEETTT READY TO RRRRRRRUMMMMMMMBBBBBBLLLLLLLEEEEEEE on ${SERVER_PORT}`))
})