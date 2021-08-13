import "./button.css";
import React from "react";

export default function Button(prop) {
  return (
    <input
      type="button"
      value={prop.label}
      style={{ gridArea: prop.grid, backgroundColor: prop.bg }}
          className="btn"
          onClick={(e) => {
              let btnValue = e.target.value;
              let exceptions = ['C', '<=', '='];
              let ops = ['C', '<=', '=', '===', '!==', '+', '-', '/', '*', '.']
              let dispContent = prop.display + btnValue;
              let display = prop.display;

              //add button labels to display
              if (exceptions.indexOf(btnValue) === -1) {
                prop.setDisplay(dispContent);
              }

              //clear display content
              if (btnValue === 'C') {
                  prop.setDisplay("");
              }

              //backspace
              if (btnValue === "<=") {
                  let disp = prop.display;
                  disp = disp.substring(0, disp.length - 1)
                  prop.setDisplay(disp);
              }


              //display result
              if (btnValue === '=') {
                  let result = "= " + eval(prop.display);
                  prop.setDisplay(result)
              }

              if (display.startsWith('=') && !ops.includes(btnValue)) {
                  prop.setDisplay(btnValue);
              }

              if (display === "" && btnValue === '=') {
                  prop.setDisplay("");
              }

          }}
    />
  );
}
