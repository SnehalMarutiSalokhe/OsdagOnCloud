import React from 'react';
import ModuleNotAvailable from "./ModuleNotAvailable.png";
import beam  from "./images/beam beam.png";


export default function MomentConnection() {
  return (
    <>
      <div className="slidecontent">
        <ul className ="slidecontentLeft">
        <li>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
          beam beam
            <div>
            <img src={beam  } class="rounded float-start" alt="beam "/>
            </div>
          </label>
        </div>
        
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
          Beam-column
            <div>
            <img src={ModuleNotAvailable } class="rounded float-end" alt="ModuleNotAvailable"/>
            </div>
          </label>
        </div>
        </li>

        <li>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
          column-column
            <div>
            <img src={ ModuleNotAvailable  } class="rounded float-start" alt=" ModuleNotAvailable "/>
            </div>
          </label>
        </div>
        
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
          peb
            <div>
            <img src={ModuleNotAvailable } class="rounded float-end" alt="ModuleNotAvailable"/>
            </div>
          </label>
        </div>
        </li>
        </ul>
      </div>
    </>
  )
}


