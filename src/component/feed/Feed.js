import "./feed.css";
import InputDocs from "./InputDocs";
import EditorDocs from "./EditorDocs";
import OutputDocs from "./OutputDocs";
export default function feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        osdag
      </div>
        <div className="feedEditor">
          <InputDocs/>
          <EditorDocs/>
          <OutputDocs/>

        </div>
    </div>
  )
}

