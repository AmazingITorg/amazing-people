let express = require("express");
let cors = require("cors");
let app = express();
const dotenv = require("dotenv")
dotenv.config()

app.disable("x-powered-by");

const PeopleService = require("./services/people-service.js");

let corsOptions = {
    origin: 'localhost:4200'
};
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', async (req, res) => {
    console.log("Get request on '/'")
    let people = await PeopleService.getPeopleFromRealDb();
    res.send(people);
});

app.delete('/:name', async (req, res) => {
    console.log("Delete request on '/' for user '" + req.params.name + "'")
    await PeopleService.deletePerson(req.params.name);
    res.status(200).send({ message: `successfully deleted amazing person - ${req.params.name}` });
});

app.post('/', async (req, res) => {
    console.log("Post request on '/'")
    console.log(req.body)
    try {
        await PeopleService.createPerson(req.body);
    } catch (err) {
        console.log(err);
        res.status(400).send({
            message: err.message
        });
        return;
    }
    res.status(201).send({ message: `successfully added new amazing person - ${req.body.name}` });
});

app.listen(3001, () => {
    console.log('listening on port 3001');
}); 
