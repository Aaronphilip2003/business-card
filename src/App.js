import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import aaron from './aaron.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const github=()=>{
  // window.location.href="https://www.google.com"
  window.open('https://github.com/Aaronphilip2003')
}

const LinkedIn=()=>{
  // window.location.href="https://www.google.com"
  window.open('https://www.linkedin.com/in/aaron-philip-a04869229/')
}

function ImageCard(){
  return(
    <header>
      <nav>
        <div className='imageCard'>
        <img src={aaron} width="150px"></img>
        </div>
      </nav>
    </header>
  )     
  }

function MainBody(){
  return(
    <div className='mainBody'>
      <h2 id='name'>Aaron Philip</h2>
      <h3 id='job'>Frontend Developer</h3>
      <button onClick={github} className="github-button"><i class="fa fa-github"></i></button>
      <button onClick={LinkedIn} className="LinkedIn-button" ><i class="fa fa-linkedin"></i></button>
      <h1 id="about">About</h1>
      <p id="pgraph">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h1 id="interests">Interests</h1>
      <p id="pgraph2">I am currently doing my First Year of Engineering in Computer Science. I enjoy Competitive Coding. I also have a keen interest in Music and have completed 5 of the 8 certifications in the Trinity College of Music course for the Piano.</p>
    </div>
  )
}

function Page() {
  return (
    <div>
      <script src="https://kit.fontawesome.com/186e2d2a80.js" crossorigin="anonymous"></script>
      <ImageCard/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ></link> 
      <a href="https://www.facebook.com/aaron.philip.507679" class="fa fa-facebook" target={"_blank"}></a>
      <a href="https://twitter.com/AaronPhilip11" class="fa fa-twitter" target={"_blank"}></a>
      <a href="https://www.instagram.com/aaronnn__00/" class="fa fa-instagram" target={"_blank"}></a>   <MainBody/>
      <svg data-testid="DeleteIcon"></svg>
    </div>
  );
}



ReactDOM.render(<Page/>,document.getElementById("root"));
export default Page; 