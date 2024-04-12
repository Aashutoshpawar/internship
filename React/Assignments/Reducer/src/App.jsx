import React from "react";
import {useState} from 'react';
import './App.css'
export default function App(){



  return(
    <div className="MainContainer">
        <div className="View">
            <input type="text" />
        </div>
        <div className="Numbers_opeatior">
            <div className="row1">
              <button value={ 7 }>7</button>
              <button value={ 8 }>8</button>
              <button value={ 9 }>9</button>
              <button value={'*'}>*</button>
            </div>
            <div className="row2">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
              
            </div>
            <div className="row3">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>/</button>
            </div>
            <div className="row4">
              <button>%</button>
              <button>0</button>
              <button>=</button>
              <button>C</button>
            </div>
           
        </div>
    </div>
  );
}