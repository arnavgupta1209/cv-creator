export default function Right({getinfo}) {


  return (<div className="right">
    <h2 className="card">CV</h2>
    <div className="card">
      <h3>Personal Information</h3>
      <p>{getinfo.personalInfo.fullName}</p>
      <p>{getinfo.personalInfo.email}</p>
      <p>{getinfo.personalInfo.phone}</p>
      <p>{getinfo.personalInfo.address}</p>
    </div>
    <div className="card">
      <h3>Education</h3>
      <p>{getinfo.educationInfo.school}</p>
      <p>{getinfo.educationInfo.degree}</p>
      <p>{getinfo.educationInfo.date}</p>
      <p>{getinfo.educationInfo.grade}</p>
    </div>
    <div className="card">
      <h3>Experience</h3>
      <p>{getinfo.experienceInfo.companyName}</p>
      <p>{getinfo.experienceInfo.positionTitle}</p>
      <p>{getinfo.experienceInfo.date}</p>
      <p>{getinfo.experienceInfo.description}</p>
    </div>
  </div>);
}