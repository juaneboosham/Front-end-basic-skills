const sum = require('./sum')

test('测试sum',()=>{
    expect(sum(1,2)).toBe(3);
});