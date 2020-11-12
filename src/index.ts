import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from './views/App';
/**
 * To save some time, below you can find two arrays with the labels,
 * and suggested IDs to use in your code. Feel free to modify them,
 * make them an array of objects, an hashmap, or anything more suitable:
 *
 * ['Examination', 'Clinical History', 'Technique', 'Findings', 'Impressions']
 * ['examination', 'clinicalHistory', 'technique', 'findings', 'impressions']
 */

ReactDOM.render(<App/>, document.getElementById("app"));
