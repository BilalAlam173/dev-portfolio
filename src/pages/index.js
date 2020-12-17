import { white } from "chalk"
import * as React from "react"

// styles
const pageStyles = {
  height:'100%'
}
const navBar = {
  height: '100px',
  backgroundColor: '#009688',
  boxShadow: '0px 9px 18px 1px rgba(0,0,0,0.35)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const logoContainer = {
  padding: '20px',
}

const menu = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const menuItem = {
  display: 'inline',
  color: 'white',
  fontSize: '15px',
  fontWeight: '700',
  paddingRight: '20px'
}


const greeting = {
  fontSize: '70px',
  fontWeight: '200',
  color: 'rgb(51,51,51)',
  lineHeight: '70px',
  outlineColor: 'rgb(51,51,51)',
  display: 'block'
}

const hiImage = {
  height: '100px',
  width: '100px'
}
const name = {
  fontWeight: '400',
  color: '#009688'
}

const description = {
  fontSize: '30px',
  fontWeight: '200',
  lineHeight: '50px',
  textAlign: 'left',
}

const teal = {
  color: '#009688',
  fontWeight: '500'
}

const highlight = {
  // color: '#009688',
  fontWeight: '600',
  backgroundColor: '#009688',
  color: 'white',
  textAlign: 'center',
  padding: '5px 0px 5px 0px',
  fontStyle: 'italic',
  transform: 'rotate(-3.0deg)'
}

const readMoreBtn = {
  outline: 'none',
  background: '#009688',
  color: 'white',
  fontSize: '1.1rem',
  fontFamily: 'inherit',
  border: '1px transparent',
  borderRadius: '10rem',
  height: '50px',
  width: '180px',
  boxShadow: '0px 8px 15px rgba(0,0,0,0.15)',
  display: 'inline'
}
const banner = {
  width: '40%',
  position: 'absolute',
  zIndex: '-1',
  transform: 'rotate(-30deg)',
  // marginTop: '-5%',
  marginLeft: '40%'
}

const descriptionSection = {
  display:'flex',
  flexDirection: 'column',
  maxWidth: '600px',
}

const homeSection = {
  // height: '88vh',
  padding: '200px 15% 18% 15%',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  textAlign:'left',
  display:'flex',
  flexDirection:'column'
}
const whiteLink = {
  color: 'white',
  textDecoration: 'None'
}

const aboutSection = {
  lineHeight: '1px',
  padding: '50px 15% 50px 15%',
  textAlign: 'center',
  background: '#fafafa',
  display:'flex',
  flexDirection: 'column',
  heading: {
    color: 'black',
    fontFamily: 'inherit',
    fontWeight: '700'
  },
  text: {
    fontSize: '22px',
    fontWeight: '200',
    lineHeight: '50px',
    textAlign: 'center',
  }

}

const footerSection = {
  padding:'5%',
  textAlign: 'center',
  fontWeight: '400',
  display: 'flex',
  flexDirection: 'column'
}
const socialBox = {
  display: 'flex',
  flexDirection:'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}
const last = {
  fontWeight: '400',
}



// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Bilal Alam</title>
      <div style={navBar}>
        <div style={logoContainer}>
          <img src="/logo.png"></img>
        </div>
        <ul style={menu}>
          <li style={menuItem}>ABOUT ME</li>
          <li style={menuItem}>CONTACT</li>
        </ul>
      </div>
      <div class="container-fluid">
      <div style={homeSection} class="row">
        <div class="row">
        <img style={banner} src="/logo.png"></img>
        <h1 style={greeting}>Hello<img style={hiImage} src="/hi.png"></img>, <br></br>
          <span>I'm <span style={name}>Bilal Alam</span></span>
        </h1>
        </div>
        <div class="row" style={descriptionSection}>
        <h2 style={description}>A full-stack developer <span style={teal}>|</span> Computer Science graduate
        <span style={teal}> |</span>  loves javascript <span style={teal}>|</span>  good at turning caffeine into code.</h2>
        <button style={readMoreBtn}>ABOUT ME</button>
        </div>
      </div>
      <div style={aboutSection} class="row" id="about">
        <h1 style={aboutSection.heading}>Education</h1>

        <h2 style={aboutSection.text}>
          <div>My Computer Science Journey started when I enrolled in <span style={highlight}>BS Computer Science</span> programme
          at <span style={highlight}>University of Karachi</span> in <code>January, 2015</code>, from where I graduated
          in <code>December 2018.</code></div>
          <div>During my time there, I studied core academic subjects in Computer Science/STEM and a few electives</div>
          <div>including <code>OOP, Data Structures, DBMS, Networking, Operating Systems, Parallel Computing, Computer Graphics with openGL, Text mining with python.</code></div>
          <div>I built several <span style={highlight}>interesting projects</span></div>
          <div>including an Inventory Management System <code>(java, JDBC, Mysql)</code></div>
          <span style={teal}> | </span>Blogging site <code>(angularjs, php, mysql)</code>
          <span style={teal}> | </span>MS Paint clone <code>(OpenGL, C++)</code><span style={teal}> | </span>
          Pocket Accountant; Mobile App <code>(MEAN stack, ionic, speech recognition)</code>
        </h2>
        <h1 style={aboutSection.heading}>Career</h1>

        <h2 style={aboutSection.text}>
          <div> I have <span style={highlight}>4 years</span> of professional experience. I started while still undergrad, as a part-time <span style={highlight}>front-end developer</span>
            , where I worked on enterprise web applications for 2 years, involving technologies like <code>
              angularjs, angular 2+, jquery, javascript, serverless architecture, sql, no-sql, python, mongodb
          </code>
            <br></br>
          Meanwhile I did <span style={highlight}>freelancing</span> too, I completed three web and one mobile apps for multiple clients
          involving technologies like <code>MEAN stack</code></div>
          <div>After graduation, I joined a renowned product based company as a full-time software engineer, where I worked on multiple
            products and technologies like <code>Angular, StencilJs, Chrome extensions, MS word Add-ins, Apache Spark, Java Servlets</code>
          </div>
          <div> Currently, I am working as a <span style={highlight}>Full-stack developer</span> at <a target="_blank" href="https://www.venturedive.com"> VentureDive</a></div>
        </h2>
        <h1>&nbsp;</h1>
        <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>RESUME</button></a>
      </div>
      <div style={footerSection} class="row" id="contact">
        <h3 style={last}>Want me to solve a problem for you or just want to say hi? feel free to contact me ^_^ </h3>
        <br />
        <div style={socialBox}>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Linkedin</button></a>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Stackoverflow</button></a>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Github</button></a>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Twitter</button></a>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Medium</button></a>
          <a style={whiteLink} target="_blank" href="https://drive.google.com/file/d/1VB8Z195w5z8jn1MhjzNB6-KNI98O1-bb/view?usp=sharing"><button style={readMoreBtn}>Email</button></a>
        </div>

      </div>
      </div>
    
    </main >
  )
}

export default IndexPage
