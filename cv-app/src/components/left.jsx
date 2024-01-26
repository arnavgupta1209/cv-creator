import Pracard from "./Pracard";
import Educard from "./Educard";
import Gencard from "./Gencard";

export default function Left() {
  return (<div className="left">
    <h2 className="card">CV Builder</h2>
    <Gencard />
    <Educard />
    <Pracard />
  </div>);
}