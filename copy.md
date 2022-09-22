let sequelize =
process.env.NODE_ENV === "production"
? new Sequelize({
database: DB_NAME,
dialect: "postgres",
host: DB_HOST,
port: 5432,
username: DB_USER,
password: DB_PASSWORD,
pool: {
max: 3,
min: 1,
idle: 10000,
},
dialectOptions: {
ssl: {
require: true,
// Ref.: https://github.com/brianc/node-postgres/issues/2009
rejectUnauthorized: false,
},
keepAlive: true,
},
ssl: true,
})
: new Sequelize(
`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pos`,
{ logging: false, native: false }
);

    import axios from "axios";

import dotenv from "dotenv";
dotenv.config();
//para vercel
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
