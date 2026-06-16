import React from "react";
import Card from "./Components/Card.jsx";
import User from "./Components/User.jsx";

const App = () => {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2025-06-15",
    location: "Bangalore, India",
    pay: "₹18 LPA",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "JavaScript"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2025-06-14",
    location: "Hyderabad, India",
    pay: "₹22 LPA",
    post: "Software Engineer",
    tag1: "Node.js",
    tag2: "Azure"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2025-06-13",
    location: "Chennai, India",
    pay: "₹20 LPA",
    post: "Full Stack Developer",
    tag1: "React",
    tag2: "MongoDB"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2025-06-12",
    location: "Remote",
    pay: "$120K",
    post: "Frontend Engineer",
    tag1: "TypeScript",
    tag2: "React"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2025-06-11",
    location: "Noida, India",
    pay: "₹16 LPA",
    post: "UI Developer",
    tag1: "Tailwind CSS",
    tag2: "React"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2025-06-10",
    location: "Remote",
    pay: "$140K",
    post: "React Developer",
    tag1: "React",
    tag2: "GraphQL"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "2025-06-09",
    location: "Stockholm, Sweden",
    pay: "$95K",
    post: "Frontend Engineer",
    tag1: "JavaScript",
    tag2: "Redux"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2025-06-08",
    location: "Remote",
    pay: "$110K",
    post: "Web Developer",
    tag1: "React",
    tag2: "Node.js"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2025-06-07",
    location: "Pune, India",
    pay: "₹19 LPA",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "TypeScript"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "2025-06-06",
    location: "Bangalore, India",
    pay: "₹24 LPA",
    post: "Software Development Engineer",
    tag1: "JavaScript",
    tag2: "React"
  }
];

console.log(jobs)

  return (
    <div className="parent">
      {jobs.map(function(ele){
        return <Card Logo = {ele.brandLogo} Company = {ele.companyName} DatePosted = {ele.datePosted} Location = {ele.location} Pay= {ele.pay} Post={ele.post} Tag1 = {ele.tag1} Tag2 = {ele.tag2}/>
      })}

    </div>
  );
};

export default App;
