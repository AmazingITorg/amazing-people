const PeopleService = require('../main/services/people-service.js')
const AmazingnessService = require('../main/services/amazingness-service.js')
const DB = require('../main/dao/db-pool.js');

describe("Integration Tests", () => {
    beforeAll(async () => {
        await initDb();
    });

    afterAll(() => {
        clearDb();
    });

    test('Should get all people from DB', async () => {
        let people = await PeopleService.getPeopleFromRealDb();
        expect(people.length).toBe(1);
        expect(people[0].name).toBe('TestName');
    })

    test('Should insert a person into the DB', async () => {
        const mockAmazingnessCheck = jest.fn().mockReturnValue(true)
        AmazingnessService.isPersonAmazing = mockAmazingnessCheck;

        await PeopleService.createPerson({ name: 'TestPerson' });

        let person = await PeopleService.getByName('TestPerson');

        expect(person[0].name).toBe('TestPerson');
    })

    async function initDb() {
        const query = 'INSERT INTO person(id, name) VALUES($1, $2)'
        const values = [1000, 'TestName']
        await DB.query(query, values)
    }

    function clearDb() {
        DB.query("DELETE FROM person WHERE name like 'Test%'");
    }
});
