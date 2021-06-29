import {getFullYear, getFooterCopy,getLatestNotification } from './utils.js'
/* Run with npx babel-node .\src\utils.test.js */
const expect = (currentValue) => {
    return {
        toBe(expected) {
            if(currentValue !== expected) {
                throw new Error(`expected: ${expected} found: ${currentValue}`)
            }
        }
    }

}
function test(title, callback) {
    try {
    callback()
    console.log(`✓ ${title}`)
    } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error.message)
    }
   }

test("Test_Generated_year", ()=>{
    const actual = getFullYear();
    const expected = 2021;
    expect(actual).toBe(expected)})

test("footerCopyWhenTrue", ()=>{
    const expected = "Holberton School";
    const actual = getFooterCopy(true)
    expect(actual).toBe(expected)
})

test("footerCopyWhenFalse", ()=>{
    const expected = "Holberton School main dashboard";
    const actual = getFooterCopy(false)
    expect(actual).toBe(expected)
})
test("getLatestNotificationTest", ()=>{
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    const actual = getLatestNotification().__html
    expect(actual).toBe(expected)
})




