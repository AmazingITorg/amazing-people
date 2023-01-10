const PeopleService = require('../main/services/people-service.js')

describe("People Service Tests", () => {
    test('Should get all people', () => {
        let people = PeopleService.getPeople();
        expect(people.length).toBe(2);
        expect(people[0].name).toBe('Zeko');
        expect(people[1].name).toBe('Gecko');
    })

    test('Should get 0 people if there are none', () => {
        PeopleService.setPeople([]);
        let people = PeopleService.getPeople();
        expect(people.length).toBe(0);
    })
});