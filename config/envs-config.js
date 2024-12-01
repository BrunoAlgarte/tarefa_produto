'use strict';

const dotenv = require('dotenv').config();


const all = {
    basePath: '/cms/v1',

    env: process.env.ENVIRONMENT,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 5000,


    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
}

module.exports = all;