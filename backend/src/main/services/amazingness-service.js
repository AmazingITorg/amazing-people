const axios = require('axios');

const dotenv = require("dotenv")
dotenv.config()

class AmazingnessService {

    static async isPersonAmazing(person) {
        let isPersonAmazing = true;
        try {
            let res = await axios.get(`${process.env.AMAZING_ALG_URL}?name=${person.name}`)
            console.log('Is the person amazing? - ' + res.data.personAmazing)
            isPersonAmazing = res.data.personAmazing;
        }
        catch (err) {
            console.log("An error occured when checking the amazingnes of the person '" + person.name + "'")
            console.log(err);
            throw new Error("An error occured when checking the amazingnes of the person '" + person.name + "'");
        }
        return isPersonAmazing;
    }
}

module.exports = AmazingnessService;