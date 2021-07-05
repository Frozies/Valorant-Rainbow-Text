import {rainbowify, christmasify, RWBify, northernify, honeybeeify} from './TextIterator'

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

    test('RWB Color Conversion Test', ()=> {
        let inputColor = "Testing!"
        let outputColor = RWBify(inputColor)
        let expectedColor = "<enemy>T</>e<team>s</><enemy>t</>i<team>n</><enemy>g</>!"

        expect(outputColor).toBe(expectedColor);
    })

    test('Northern Light Test', () => {
        let inputText = "Northern Light"
        let outputText = northernify(inputText)
        let expectedText = "<team>N</><warning>o</><notification>r</><team>t</><warning>h</><notification>e</><team>r</><warning>n</> <notification>L</><team>i</><warning>g</><notification>h</><team>t</>"

        expect(outputText).toBe(expectedText);
    })

    test('Honey Bee Test', () => {
        let inputText = "Honey Bee"
        let outputText = honeybeeify(inputText)
        let expectedText = "<system>H</><self>o</><system>n</><self>e</><system>y</> <self>B</><system>e</><self>e</>"

        expect(outputText).toBe(expectedText);
    })
})

//Fixes a bug
export {}