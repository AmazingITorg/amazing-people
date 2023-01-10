const dbPool = require('./db-pool.js')

async function getAllPeople() {
    let res = await dbPool.query("select * from person");
    return res.rows;
}

async function getById(id) {
    let res = await dbPool.query("select * from person where id = " + id);
    return res.rows;
}

async function createPerson(person) {
    console.log("Creating person in the database...")
    const query = 'INSERT INTO person(name, is_amazing) VALUES($1, $2)'
    const values = [person.name, person.isAmazing]

    await dbPool.query(query, values)
}

async function deletePerson(name) {
    console.log("Deleting person from the database...")
    const query = 'DELETE FROM person WHERE name=$1'
    const values = [name]

    await dbPool.query(query, values)
}

module.exports = {
    getAllPeople: getAllPeople,
    createPerson: createPerson,
    deletePerson: deletePerson,
    getById: getById
}