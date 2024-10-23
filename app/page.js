import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';

export default function Home() {
  return (
    <body>
    <div className="home-container">
      <h1 className="title">MY FUTBALL APP</h1>
      <p className="description">Welcome to the ultimate futball experience!</p>
      <div className="button-container">
        <button className="action-button">Stream Matches</button>
        <button className="action-button">Join Community</button>
      </div>
    </div>
    </body>
  );
}
