import Pracard from "./Pracard";
import Educard from "./Educard";
import Gencard from "./Gencard";

export default function Left(props) {

  infor = props.getinfo;
  const changeperinfo = (name, email, phone, address) => {
    props.updateinfo({...infor, personalInfo: {fullName: name, email: email, phone: phone, address: address}});
  };
  const changeeduinfo = (school, degree, startDate, endDate, location) => {
    props.updateinfo({...infor, educationInfo: {school: school, degree: degree, startDate: startDate, endDate: endDate, location: location}});
  };
  const changeexpinfo = (companyName, positionTitle, startDate, endDate, location, description) => {
    props.updateinfo({...infor, experienceInfo: {companyName: companyName, positionTitle: positionTitle, startDate: startDate, endDate: endDate, location: location, description: description}});
  };


  return (<div className="left">
    <h2 className="card">CV Builder</h2>
    <Gencard updateinfo={changeperinfo}/>
    <Educard updateinfo={changeeduinfo}/>
    <Pracard updateinfo={changeexpinfo}/>
  </div>);
}