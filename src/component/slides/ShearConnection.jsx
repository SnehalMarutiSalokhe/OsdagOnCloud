 import "./ShearConnection.css";
import Fineplate from "./images/Fineplate.png";
import CleatAngle from "./images/cleatAngle.png";
import Endplate from "./images/endplate.png";
import SeatedAngle from "./images/seatedAngle.png";

export default function ShearConnection() {
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
            Fin Plate
            <div>
            <img src={Fineplate } class="rounded float-start" alt="Fineplate"/>
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
          CleatAngle
            <div>
            <img src={CleatAngle } class="rounded float-end" alt="CleatAngle"/>
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
          Endplate 
            <div>
            <img src={ Endplate  } class="rounded float-start" alt=" Endplate "/>
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
          SeatedAngle
            <div>
            <img src={SeatedAngle } class="rounded float-end" alt="SeatedAngle"/>
            </div>
          </label>
        </div>
        </li>
        </ul>
      </div>
    </>
  );
}
