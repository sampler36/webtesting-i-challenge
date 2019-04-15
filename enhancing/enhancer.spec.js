const enhancer = require('./enhancer.js');
// test away!


// test('run tests', () => {
//     expect(true).toBe(true);
// })

describe('repair()', () => {
    let item = {name:"new", durability:12, enhancement:0};
    it("returns a new item with the durability restored to 100", () => {
       const actual =  enhancer.repair(item)
       const expected = {name:"new", durability:100, enhancement:0};
       expect(actual).toBe(expected);
    })
})
// describe('succeed()', () => {
//     it("Should return succeed", () => {
//         expect(succeed())
//     })
// })

// describe('fail()', () => {
//     it("Should return failed", () => {
//         expect(fail())
//     })
// })

// describe('get()', () => {
//     it("Should return fetched", () => {
//         expect(get())
//     })
// })