import Head from 'next/head'
// @ts-ignore
import styles from '../styles/Home.module.css';
import React, {useEffect, useState} from "react";
import AdsenseWidget from "../components/AdsenseWidget";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import TextIterator from "../components/TextIterator";

enum colors {
    red = "<enemy>",

}

export default function Home() {



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
          <TextIterator/>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
