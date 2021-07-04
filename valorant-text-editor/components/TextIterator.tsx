import React, {useState} from "react";
import {Button, Container, Grid, TextField} from "@material-ui/core";

export function rainbowify(text: String) {
    let min = 0
    let max = 4
    let count = 0
    let output = "";

    for (let i in text) {
        //Skip Spaces
        if (text[i] == " ") {
            output = output + text[i]
            continue
        }

        //RED
        if (count == 0) {
            output = output + "<enemy>" + text[i] + "</>"
            count += 1
            continue
        }
        //ORANGE
        if (count == 1) {
            output = output + "<system>" + text[i] + "</>"
            count += 1
            continue
        }
        //GREEN
        if (count == 2) {
            output = output + "<notification>" + text[i] + "</>"
            count += 1
            continue
        }
        //BLUE
        if (count == 3) {
            output = output + "<team>" + text[i] + "</>"
            count += 1
            continue
        }
        //PURPLE
        if (count == 4) {
            output = output + "<warning>" + text[i] + "</>"
            count = 0
            continue
        }
    }
    return output
}

export function christmasify(text: String) {
    let min = 0
    let max = 1
    let count = 0
    let output = "";

    for (let i in text) {
        if (text[i] == " ") {
            output = output + text[i]
            continue
        }

        //RED
        if (count == 0) {
            output = output + "<enemy>" + text[i] + "</>"
            count += 1
            continue
        }

        //GREEN
        if (count == 1) {
            output = output + "<notification>" + text[i] + "</>"
            count = 0
            continue
        }
    }
    return output
}

export function RWBify(text: String) {
    let min = 0
    let max = 2
    let count = 0
    let output = "";

    for (let i in text) {
        if (text[i] == " ") {
            output = output + text[i]
            continue
        }

        //RED
        if (count == 0) {
            output = output + "<enemy>" + text[i] + "</>"
            count += 1
            continue
        }

        //White
        if (count == 1) {
            output = output + text[i]
            count += 1
            continue
        }

        //BLUE
        if (count == 2) {
            output = output + "<team>" + text[i] + "</>"
            count = 0
            continue
        }
    }
    return output
}

export function northernify(text: String) {
    let min = 0
    let max = 2
    let count = 0
    let output = "";

    for (let i in text) {
        if (text[i] == " ") {
            output = output + text[i]
            continue
        }

        //blue
        if (count == 0) {
            output = output + "<team>" + text[i] + "</>"
            count += 1
            continue
        }

        //purple
        if (count == 1) {
            output = output + "<warning>" + text[i] + "</>"
            count += 1
            continue
        }

        //green
        if (count == 2) {
            output = output + "<notification>" + text[i] + "</>"
            count = 0
            continue
        }
    }
    return output
}

function colorText(inputText: { [x: string]: string; }, [colors]: [string]) {
    let min = 0
    let max = colors.length //-1?
    let count = Math.floor(Math.random() * (max - min) + min)
    let output = "";

    for (let i in inputText) {

        //if there is a space in the input, just skip it. (dont add color to it)
        if (inputText[i] == " ") {
            output = output + inputText[i]
            continue
        }

        //use array of color to switch between each letter based on
        //for each color in the color array, iterate through them (one at a time) or (word by word) and add the color to the text
    }

    return output
}

export function TextIterator(inputColor: string) {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInputChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.currentTarget.value);
    };

    return (
        <div>
            <div>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <TextField id={"userInput"} onChange={handleInputChange} value={input} variant={"filled"}
                               style={{
                                   padding: '0.5rem',
                               }}/>

                    <Button variant={"contained"} color={"primary"}
                            onClick={() => {

                            }} >
                        Rainbowify!
                    </Button>
                </Grid>


            </div>

            <Container>
                {output}
            </Container>
        </div>
    )
}

module.exports.default = [TextIterator, rainbowify(new String), christmasify(new String), RWBify(new String), northernify(new String)]