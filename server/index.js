import dotenv from 'dotenv';
import mon from 'mongoose'
import hbs from 'hbs'
import express, { urlencoded } from 'express';
import { dirname } from 'path';
import path from 'path'
import { fileURLToPath } from 'url';
import web from './routes/web.js'
const app = express()

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: './config.env' });
const partialpath = path.join(__dirname,"./views/partials")
const viewspath = path.join(__dirname,"./views")

app.use(express.static('public'))

// import conn from './connection.js'

const DB = process.env.DATABASE;

mon.set('strictQuery', false);

app.use(express.urlencoded({ extended: true }))

app.set("view engine",'hbs')
// app.engine('handlebars','hbs.engine')
app.set("views", viewspath)
hbs.registerPartials(partialpath)

mon.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("yeeeeeeeeeeeeee") }).catch(err => { console.log() })

app.use('/', web);

app.listen(process.env.PORT, () => {

    console.log(`server is running ${process.env.PORT}`)
})