const sum = require('./sum')

describe('Testing sum', () => {
    it('Should be 5 when summing 2 and 3', () => {
        expect(sum(2, 3)).toEqual(5)
    })
})