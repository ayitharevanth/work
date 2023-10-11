/* eslint-disable @typescript-eslint/no-unused-vars */
/* SpeedometerComponent.jsx */

import  { useEffect, useState } from 'react';
import './Speedometer.css';


export function SpeedometerComponent({ sentiment_value }) {
  useEffect(() => {
    let rotationAngle = 0;

    if (sentiment_value === 4) {
      rotationAngle = -76;
    } else if (sentiment_value === 3) {
      rotationAngle = -32;
    } else if (sentiment_value === 2) {
      rotationAngle = 28;
    } else if (sentiment_value === 1) {
      rotationAngle = 69;
    }

    document.getElementById('needle').style.transform = `rotate(${rotationAngle}deg)`;
  }, [sentiment_value]);

  return (
    <>
      <div className="speedometer">
        <div className="dial">
          <div className="label label-4">very bullish</div>
          <div className="label label-3">mild bullish</div>
          <div className="label label-1">mild bearish</div>
          <div className="label label-2">very bearish</div>
          <div className="needle" id="needle"></div>
        </div>
        <div className="button-container"></div>
      </div>
    </>
  );
}

