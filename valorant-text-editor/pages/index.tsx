import Head from 'next/head'
// @ts-ignore
import styles from '../styles/Home.module.css';
import React, {useEffect, useState} from "react";
import AdsenseWidget from "../components/AdsenseWidget";
import {Button, Container, Grid, TextField} from "@material-ui/core";

enum colors {
    red = "<enemy>",

}

export default function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInputChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.currentTarget.value);
    };


    function rainbowify(text: any) {
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
            // //ORANGE
            // if (count == 1) {
            //     output = output + "<system>" + text[i] + "</>"
            //     count += 1
            //     continue
            // }
            //GREEN
            if (count == 1) {
                output = output + "<notification>" + text[i] + "</>"
                // count += 1
                count = 0
                continue
            }
            // //BLUE
            // if (count == 3) {
            //     output = output + "<team>" + text[i] + "</>"
            //     count += 1
            //     continue
            // }
            // //PURPLE
            // if (count == 4) {
            //     output = output + "<warning>" + text[i] + "</>"
            //     count = 0
            //     continue
            // }
        }
        console.log(output)
        setOutput(output)
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
        setOutput(output)
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
        }


  return (
    <div className={styles.con}>
      <head>
        <title>Valorant Text Effects</title>
        <meta name="description" content="Add a little spice to the competitive in game chat. Valorant is a modern FPS shooter." />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Valorant Text Effects
        </h1>

          {/*<AdsenseWidget/>*/}

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
                              rainbowify(input)
                          }} >
                      Rainbowify!
                  </Button>
              </Grid>


          </div>

          <Container>
              {output}
          </Container>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
