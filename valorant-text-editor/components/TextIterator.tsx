import React, {useState} from "react";
import {Button, Container, Grid, TextField} from "@material-ui/core";

export function rainbowify(text: any) {
    let min = 0
    let max = 4
    let count = Math.floor(Math.random() * (max - min) + min)
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
        //ORANGE
        if (count == 1) {
            output = output + "<system>" + text[i] + "</>"
            count += 1
            continue
        }
        //GREEN
        if (count == 1) {
            output = output + "<notification>" + text[i] + "</>"
            // count += 1
            count = 0
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
    console.log(output)
    return output
}

function christmas(text: { [x: string]: string; }) {
    let min = 0
    let max = 4
    let count = Math.floor(Math.random() * (max - min) + min)
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
            // count += 1
            count = 0
            continue
        }
    }
    console.log(output)
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
