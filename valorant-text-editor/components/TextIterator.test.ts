import {rainbowify, christmasify} from './TextIterator'

describe('Test the color iterator functions', () => {

    test('Rainbow Color Conversion Test', () => {
        let inputColor = "Testing!"
        // let outputColor = rainbowify(inputColor)
        let outputColor = rainbowify(inputColor)
        let expectedColor = "<enemy>T</><system>e</><notification>s</><team>t</><warning>i</><enemy>n</><system>g</><notification>!</>"

        expect(outputColor).toBe(expectedColor);
    })

    test('Christmas Color Conversion Test', ()=> {
        let inputColor = "Testing!"
        let outputColor = christmasify(inputColor)
        let expectedColor = "<enemy>T</><notification>e</><enemy>s</><notification>t</><enemy>i</><notification>n</><enemy>g</><notification>!</>"

        expect(outputColor).toBe(expectedColor);
    })
})

//Fixes a bug
export {}