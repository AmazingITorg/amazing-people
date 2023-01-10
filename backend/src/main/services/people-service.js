const axios = require('axios');

const peopleDao = require('../dao/people-dao.js')
const amazingnessService = require('./amazingness-service.js')
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

    static async getByName(name) {
        return peopleDao.getByName(name);
    }
    static async deletePerson(name) {
        return peopleDao.deletePerson(name)
    }
    static async createPerson(person) {
        console.log('Create amazing person')
        console.log(person)
        let isPersonAmazing = await amazingnessService.isPersonAmazing(person)

        if (!isPersonAmazing) {
            console.log("Person is not amazing!")
            throw new Error(`The person ${person.name} is not amazing!`)
        }

        return peopleDao.createPerson(person);
    }
}

module.exports = PeopleService;