import React from "react";
import user from "../data/user";
import Links from "./Links";





function About(props) {


  function bio(){
    return <p><div>
      bio= {user.bio}
    </div>
    </p>
  }
  
  function githiub () {
    return(
      <div>
        github={user.links.github}
       
      </div>
    )
    
  }
  
  function linkedin(){
    return(
      <div>
         linkedin={user.links.linkedin}
      </div>
    )
  }
  
  return (

    <div id="about">
      <h2>Links</h2>
      {props.bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      
      {
      <Links
      github={props.githiub}
      linkedin={props.linkedin} 
      />
}
    
    
         
      
    </div>
  );
}

export default About;
