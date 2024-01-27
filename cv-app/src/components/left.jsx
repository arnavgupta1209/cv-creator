import Pracard from "./Pracard";
import Educard from "./Educard";
import Gencard from "./Gencard";

export default function Left(props) {

  const infor = props.getinfo;
  const changeperinfo = (name, email, phone, address) => {
    props.updateinfo({...infor, personalInfo: {fullName: name, email: email, phone: phone, address: address}});
  };
  const changeeduinfo = (school, degree, date, grade) => {
    props.updateinfo({...infor, educationInfo: {school: school, degree: degree, date: date, grade: grade}});
  };
  const changeexpinfo = (companyName, positionTitle, date, description) => {
    props.updateinfo({...infor, experienceInfo: {companyName: companyName, positionTitle: positionTitle, date: date, description: description}});
  };


  return (<div className="left">
    <h2 className="card">CV Builder</h2>
    <Gencard updateinfo={changeperinfo}/>
    <Educard updateinfo={changeeduinfo}/>
    <Pracard updateinfo={changeexpinfo}/>
  </div>);
}