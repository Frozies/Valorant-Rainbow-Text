import rainbowify from './TextIterator'

test('Rainbow Color Conversion Test', () => {

    let inputColor = "Testing!"
    // let outputColor = rainbowify(inputColor)
    let outputColor = rainbowify(inputColor)
    const expectedColor = "<enemy>T</><notification>e</><enemy>s</><notification>t</><enemy>i</><notification>n</><enemy>g</><notification>!</>"

    expect(outputColor).toBe(expectedColor);
})

//Fixes a bug
export {}