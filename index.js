const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")


dotenv.config();

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.listen(process.env.APP_PORT || 4000, () => {
    console.log('-------------------------START----------------------------');
    console.log(`Process ${process.pid} is listening to all incoming requests on ${process.env.APP_PORT}`);
    console.log('----------------------------------------------------------');
});