import React from "react";
import Card from "./Components/Card.jsx";
import User from "./Components/User.jsx";

const App = () => {

 const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "1 day ago",
    location: "Bangalore, India",
    pay: "₹18 LPA",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "JavaScript"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    location: "Hyderabad, India",
    pay: "₹22 LPA",
    post: "Software Engineer",
    tag1: "Node.js",
    tag2: "Azure"
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564",
    companyName: "Amazon",
    datePosted: "3 days ago",
    location: "Chennai, India",
    pay: "₹20 LPA",
    post: "Full Stack Developer",
    tag1: "React",
    tag2: "MongoDB"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "4 days ago",
    location: "Remote",
    pay: "₹17 LPA",
    post: "Frontend Engineer",
    tag1: "TypeScript",
    tag2: "React"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture.png",
    companyName: "Adobe",
    datePosted: "5 days ago",
    location: "Noida, India",
    pay: "₹16 LPA",
    post: "UI Developer",
    tag1: "Tailwind CSS",
    tag2: "React"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "6 days ago",
    location: "Remote",
    pay: "$140K",
    post: "React Developer",
    tag1: "React",
    tag2: "GraphQL"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/spotify",
    companyName: "Spotify",
    datePosted: "1 week ago",
    location: "Stockholm, Sweden",
    pay: "$95K",
    post: "Frontend Engineer",
    tag1: "JavaScript",
    tag2: "Redux"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    datePosted: "1 week ago",
    location: "Remote",
    pay: "$110K",
    post: "Web Developer",
    tag1: "React",
    tag2: "Node.js"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    datePosted: "2 weeks ago",
    location: "Pune, India",
    pay: "₹19 LPA",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "TypeScript"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png",
    companyName: "LinkedIn",
    datePosted: "2 weeks ago",
    location: "Bangalore, India",
    pay: "₹24 LPA",
    post: "Software Development Engineer",
    tag1: "JavaScript",
    tag2: "React"
  }
];

  return (
    <div className="parent">
      {jobs.map(function(ele,idx){
        return <div key={idx}>
          <Card Logo = {ele.brandLogo} Company = {ele.companyName} DatePosted = {ele.datePosted} Location = {ele.location} Pay= {ele.pay} Post={ele.post} Tag1 = {ele.tag1} Tag2 = {ele.tag2}/>
        </div>
      })}

    </div>
  );
};

export default App;
