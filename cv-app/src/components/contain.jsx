import Left from './left'
import Right from './right'


// const dummyPersonalInfo = {fullName: 'John Doe', email: 'bonanza@gmail.com', phone: '+1130284593', address: 'Wall St. 221b'}
// const dummyEducationInfo = [{school: 'Dummy University', degree: 'Master in CS', startDate: '12/2022', endDate: '11/2023', location: 'London, UK'}];
// const dummyExperienceInfo = [{companyName: 'Scientific Lab at Texas', positionTitle: 'C++ Game Developer', startDate: '12/2023', endDate: '08/2024', location: 'Whales, UK', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada nulla ac rhoncus laoreet. Morbi feugiat neque metus, quis ornare mauris molestie sit amet. Curabitur velit risus, euismod eu leo et, volutpat sodales massa. Sed aliquam luctus neque. Integer congue finibus varius. In at lacus sem.'}];



export default function Contain() {
  return (<div className="container">
    <Left />
    <Right />
  </div>);
}