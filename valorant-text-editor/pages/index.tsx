import styles from '../styles/Home.module.css';
import React, {useEffect, useState} from "react";
import AdsenseWidget from "../components/AdsenseWidget";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {christmasify, honeybeeify, northernify, rainbowify, RWBify } from '../components/TextIterator';


export default function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    //When the input changes in the div, set the inputstate
    const handleInputChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.currentTarget.value);
    };



  return (
    <div className={styles.container}>
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
                              onClick={()=>{
                                  let rainbowOutput = rainbowify(input)
                                  setOutput(rainbowOutput)

                                  navigator.clipboard.writeText(rainbowOutput);
                                  console.log(rainbowOutput);
                              }} >
                          Rainbowify!
                      </Button>
                      <Button variant={"contained"} color={"primary"}
                              onClick={()=>{
                                  let christmasOutput = christmasify(input);
                                  setOutput(christmasOutput)

                                  navigator.clipboard.writeText(christmasOutput);
                                  console.log(christmasOutput);
                              }} >
                          Christmasify!
                      </Button>
                      <Button variant={"contained"} color={"primary"}
                              onClick={()=>{
                                  let RWBOutput = RWBify(input);
                                  setOutput(RWBOutput)

                                  navigator.clipboard.writeText(RWBOutput);
                                  console.log(RWBOutput);
                              }} >
                          Red, White, & Blue
                      </Button>

                      <Button variant={"contained"} color={"primary"}
                              onClick={()=>{
                                  let northernOutput = northernify(input);
                                  setOutput(northernOutput)

                                  navigator.clipboard.writeText(northernOutput);
                                  console.log(northernOutput);
                              }} >
                          Aurora
                      </Button>

                      <Button variant={"contained"} color={"primary"}
                              onClick={()=>{
                                  let honeybeeOutput = honeybeeify(input);
                                  setOutput(honeybeeOutput)

                                  navigator.clipboard.writeText(honeybeeOutput);
                                  console.log(honeybeeOutput);
                              }} >
                          Honey Bee
                      </Button>
                  </Grid>




              </div>

              <Container>
                  {output}
              </Container>
          </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
