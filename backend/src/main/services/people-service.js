const axios = require('axios');

const peopleDao = require('../dao/people-dao.js')
const dotenv = require("dotenv")
dotenv.config()

class PeopleService {

    static DB = [
        { name: 'Zeko' },
        { name: 'Gecko' }
    ];

    static getPeople() {
        return this.DB;
    }

    static setPeople(people) {
        this.DB = people;
    }

    static async getPeopleFromRealDb() {
        return peopleDao.getAllPeople();
    }

    static async getPersonById(id) {
        return peopleDao.getById(id);
    }
    static async deletePerson(name) {
        return peopleDao.deletePerson(name)
    }
    static async createPerson(person) {
        let isPersonAmazing = true;
        try {
            let res = await axios.get(`${process.env.AMAZING_ALG_URL}?name=${person.name}`)
            console.log('result : ' + JSON.stringify(res.data)); // no data received
            console.log('is the person amazing? - ' + res.data.personAmazing)
            isPersonAmazing = res.data.personAmazing;
        }
        catch (err) {
            console.log("An error occured when checking the amazingnes of the person '" + person.name + "'")
            console.log(err);
            return;
        }

        if (!isPersonAmazing) {
            console.log("Person is not amazing!")
            throw new Error(`The person ${person.name} is not amazing!`)
        }

        return peopleDao.createPerson(person);
    }
}

module.exports = PeopleService;