import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private"
import UserInformationpro from "../../../components/visualresume/pro/UserInformationpro"
import LayoutLRInfo from "../../../components/visualresume/pro/LayoutLRInfo"

import {visualresumedata} from "../../../helpers/visualresume/pro"
import {saveAs} from 'file-saver';
import { getCookie, isAuth , updateUser, forgotPassword} from '../../../actions/auth';
import { getProfile, updateprofile } from '../../../actions/user';
import Popup from "reactjs-popup";
import {FacebookShareButton, FacebookIcon} from 'react-share'
import imageCompression from 'browser-image-compression';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import { payButtons} from '../../../actions/payUMoney';
import renderHTML from 'react-render-html';
const Template = (props) => {
  const [values, setValues] = useState({
    name: "",
		username: "",
    email:"",
    photo:"",
    visualresumepro:visualresumedata,
    bg: props.colors[0].bg,
    font: props.colors[0].font,
    list: null,
    showLeftBlock: false,
    layoutInfoDisplay: true,
    userInfoDisplay: false,
		sharePopup: false,
    image : "",
		imageDisplay: false
  });
  
 
 const Resume = props.Resume
 const {name, username, email, photo, visualresumepro, bg, font, list, showLeftBlock, layoutInfoDisplay, userInfoDisplay, sharePopup, image, imageDisplay} = values;
  
 const vr = (data, layoutInfoDisplay, userInfoDisplay) => {
   setValues({...values, visualresumepro: data, list: props.componentSequence(data, name, email, photo), 
							layoutInfoDisplay: layoutInfoDisplay, userInfoDisplay: userInfoDisplay});
 }
  const personalInformation = (data) =>{
    
    setValues({...values, name: data.name, username: data.username, email: data.email, photo: data.photo, visualresumepro:data.visualresumepro, 
               list: props.componentSequence(data.visualresumepro, data.name, data.email, data.photo)
               ,showLeftBlock: true})
  }
  
  const token = getCookie('token');
	
	const [skills, setSkills] = useState({
    fac: 2, fac1: 2
  });
	
	const [pay, setPay] = useState("");
	
	useEffect(() => {
			let fac = 5;
      let fac1 = 1;
			if(window.innerWidth > 1200){
				fac = 5;
				fac1 = 2;
			}else if (window.innerWidth <= 1200 && window.innerWidth > 900){
				fac = 4;
				fac1 = 2;
			}else if (window.innerWidth <= 900 && window.innerWidth > 600){
				fac = 3;
				fac1 = 2;
			}else if (window.innerWidth <= 600 && window.innerWidth > 320){
				fac = 2;
				fac1 = 2;
			}else{
				fac = 1;
				fac1 = 1;
			}
		
			
		setSkills({fac, fac1});
  }, []);
	
  const editSection = useRef();
  
  
  const editClick = (c) =>{
    
    c = c + "Display";
    editSection.current.editClickChild(c);
    setValues({...values, layoutInfoDisplay: false})
  }

  const head = () => {
    return(
      <Head>
        <title>
          Visual Resume Builder
        </title>
        
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet" />
          <link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" />
        
      </Head>
    )
  }
  
  const popup = (data1) =>{
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/expert/stylesheet.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      
      mywindow.document.write(data1);
      
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      mywindow.focus();
      //mywindow.print();
      setTimeout(function(){ mywindow.print(); 
                            //mywindow.close(); 
                           },1000);
      //mywindow.close();
      
      return true;
  }
  
  const leftBlockComponent = (fac) =>{
    //let list = props.componentSequence(visualresumepro, name, email, photo);
    return (
      list.left.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.left.props[i];
        const id = list.left.ids[i];
        if(list.left.props[i].top < 594){
     
          return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
				}
      })
    )
    
    
  }
  
  const leftBlockComponentPage1 = (fac) =>{
    //let list = props.componentSequence(visualresumepro, name, email, photo);
    return (
      list.left.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.left.props[i];
        const id = list.left.ids[i];
        if(list.left.props[i].top < 297){
          return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
        }
        
      })
    )
    
    
  }
  
  const rightBlockComponent = (fac) =>{
   
    return (
      list.right.components.map((q,i)=>{
        let left = (fac * 80).toString() + "px";
        const BlockComponent = q;
        const props = list.right.props[i];
        const id = list.right.ids[i];
        if(list.right.props[i].top < 594){
        return (
          <div style = {{position: `absolute`, left: `${left}`}}>
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          </div>
            
          
               )
				}
      })
    )
    
    
  }
  
  const rightBlockComponentPage1 = (fac) =>{
   
    return (
      list.right.components.map((q,i)=>{
        let left = (fac * 80).toString() + "px";
        const BlockComponent = q;
        const props = list.right.props[i];
        const id = list.right.ids[i];
        if(list.right.props[i].top < 297){
        return (
          <div style = {{position: `absolute`, left: `${left}`}}>
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          </div>
            
          
               )
        }
      })
    )
    
    
  }
  
  const handleColor = (c) => {
    let visualresumeCopy = visualresumepro;
		visualresumeCopy.colors.bg = c.bg;
		visualresumeCopy.colors.font = c.font;
    setValues({...values, bg: c.bg, font: c.font, visualresume: visualresumeCopy});
  }
  
  const colorDropdown = () => {
    return (
      props.colors.map((c, i)=> {
        return (
          <a onClick = {() => handleColor(c)}>
            <Row>
              <Col xs = "8" style = {{paddingLeft: `0px`, paddingRight: `0px`}}>Color Pallete {i+1}</Col>
              <Col xs ="2" style = {{paddingLeft: `0px`}}><div style = {{width: `25px`, height: `25px`, backgroundColor: `${c.bg}`}}></div></Col>
              <Col xs ="2" style = {{paddingLeft: `0px`}}><div style = {{width: `25px`, height: `25px`, backgroundColor: `${c.font}`}}></div></Col>
            </Row>
           </a>
        )
      })
    )
  }
  
  const next = (c, n) => {
    setValues({ ...values, [c]: false, [n]: true });
    editSection.current.editClickNext(c, n);
  }
  
  const blockComponent = (fac) =>{
    //let list = props.componentSequence(visualresumepro, name, email, photo);
    return (
      list.block.components.map((q,i)=>{
        const BlockComponent = q;
        const props = list.block.props[i];
        const id = list.block.ids[i];
				if(list.block.props[i].top < 594){
        return (
          
            <BlockComponent id = {id} bg = {bg} font = {font} fac= {fac} props = {props} />
          
               )
				}
      })
    )
    
    
  }
  
  const handlePrint = () => {
    let data = document.getElementById("resume").innerHTML;
    popup(data);
  }
	
	const closeShare = () => {
    setValues({...values, sharePopup: false});
  }
	
	const handleShare = () => {
    let data = document.getElementById("resume").innerHTML;
    popup2(data);
  }
	
	const popup2 = (data1) =>{
    let userFormData = new FormData();
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      mywindow.document.write('<div id = "resume" style = "width: 1050px; height: 549px">');
      mywindow.document.write(data1);
      mywindow.document.write('</div>');
      mywindow.document.write('</body></html>');
      mywindow.document.close();
			let phone = mywindow.document.getElementById("contact-phone-dummy");
			let email = mywindow.document.getElementById("contact-email-dummy");
		
		email.children[1].innerHTML = "dummyemail@abc.com"
		phone.children[1].innerHTML = "+91-1234567890"
      let html2c = require("html2canvas");
      let myNewCroppedFile = null
			const options = {
				maxSizeMB: 1,
				maxWidthOrHeight: 1920,
				useWebWorker: true
			}
      html2c(mywindow.document.getElementById("resume"), {allowTaint: true, useCORS: true,
        taintTest: false}).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
			let arr = img.split(',');
		if(arr[1]){
			myNewCroppedFile = base64StringtoFile(img, "myFilename.png")
		}
        
				imageCompression(myNewCroppedFile, options)
					.then(function (compressedFile) {
						userFormData.set('photosrc', myNewCroppedFile);
						updateprofile(token, userFormData).then(data => {
									if (data.error) {
											setValues({ ...values, error: data.error, success: false, loading: false });
										mywindow.focus();
										mywindow.close();
									} else {
											
											console.log(true);
											mywindow.focus();
											mywindow.close();
									}
							});
					})
					.catch(function (error) {
						console.log(error.message);
					});
    			editSection.current.saveInfo();
      		setValues({ ...values, sharePopup: true });
      });
    
      
      
      return true;
  }
	
	
  
  
  return (
    <React.Fragment>
            <div>
							<div id = "text" style = {{position: `absolute`, visibility: `hidden`}}>
							aaaaaa
						</div>
							<Popup
								open={sharePopup}
								closeOnDocumentClick
								onClose={closeShare}
							>
								<div>
									<div>
										{DOMAIN}/user/profile/{username}
									</div>
									<a className = "btn btn-sm" onClick = {closeShare}>
										Close
									</a>
								</div>
        			</Popup>
              <Row>
                <Col xs = "4" lg = "6">
                  <div className="dropdown ml-4 mt-2">
                    <button className="dropbtn mb-2">Select Theme</button>
                    <div className="dropdown-content">
                      {colorDropdown()}
                    </div>
                  </div>
                </Col>
                <Col xs = "2" lg = "1">
                  <div style = {{width: `50px`, height: `50px`, backgroundColor: `${bg}`, marginTop: `10px`}}></div>
                </Col>
                <Col xs = "2" lg = "1">
                  <div style = {{width: `50px`, height: `50px`, backgroundColor: `${font}`, marginTop: `10px`}}></div>
                </Col>
								{showLeftBlock && visualresumepro.payment.status && <Col xs = "2" lg = "2">
									<Button onClick = {handlePrint} className = "btn btn-block btn-info mt-2">Print</Button>
								</Col>}
								{showLeftBlock && !visualresumepro.payment.status && <Col xs = "2" lg = "2">
									<Button onClick = {handlePrint} className = "btn btn-block btn-info mt-2 mr-2" disabled>Print</Button>
								</Col>}
								{showLeftBlock && visualresumepro.payment.status && <Col xs = "2" lg = "2">
									<Button onClick = {handleShare} className = "btn btn-block btn-info mt-2">Share</Button>
								</Col>}
								{showLeftBlock && !visualresumepro.payment.status && <Col xs = "2" lg = "2">
									<Button onClick = {handleShare} className = "btn btn-block btn-info mt-2 mr-2" disabled>Share</Button>
								</Col>}
								{showLeftBlock && !visualresumepro.payment.status && <Col xs = "4" lg = "4">
									<div className = "">
										
									</div>
								</Col>}
								{showLeftBlock && !visualresumepro.payment.status && <Col xs = "4" lg = "4">
									<div className = "mt-4 text-center">
										<a href="/user/payment/visualresume/pro" className="button-buy">Buy Now</a>
									</div>
								</Col>}
								{showLeftBlock && !visualresumepro.payment.status && <Col xs = "4" lg = "4">
									<div className = "">
										
									</div>
								</Col>}
                
								<Col xs= "12" lg = "4">
                  <UserInformationpro vr = {vr} pr = {personalInformation} type={props.type} template = {props.template} userInfoDisplay = {userInfoDisplay} ref = {editSection} />
                </Col>
								{layoutInfoDisplay && <Col xs= "12" lg = "8">
                  
                  
                </Col>}
								{layoutInfoDisplay && <Col xs= "12" lg = "8">
                  <div className = "mt-4 h2 center ml-4">Resume Layout</div>
                  <LayoutLRInfo vr = {vr} next = {next} visualresumepro = {visualresumepro} editClick = {editClick} />
                </Col>}
                
               {layoutInfoDisplay && <Col xs= "12" lg = "4" style = {{paddingLeft: `0`}} className= "mt-4">
                  <div className = "h2 center ml-2 mt-4">Resume Preview</div>
                  <div className = "mt-4" id = "resume-preview" style = {{ height: `297px`, position: `absolute`}}>
                    {showLeftBlock && <Resume list = {list} visualresumepro = {visualresumepro} fac = {skills.fac1} bg = {bg} font = {font}/>}
                    
                    {showLeftBlock && leftBlockComponent(skills.fac1)}
                    {showLeftBlock && rightBlockComponent(skills.fac1)}
                    {showLeftBlock && blockComponent(skills.fac1)}
                  </div>
                </Col>}
                 
                <Col style = {{paddingLeft: `0`}} xs="12" lg = "8">
                  {!layoutInfoDisplay && 
                    <div id = "resume1" style = {{position: `absolute`}}>
                      <div id = "resume-rest-pages" style = {{position: `absolute`}}>
                        {showLeftBlock && <Resume list = {list} visualresumepro = {visualresumepro} fac = {skills.fac} bg = {bg} font = {font}/>}
                    
                        {showLeftBlock && leftBlockComponent(skills.fac)}
                        {showLeftBlock && rightBlockComponent(skills.fac)}
                        {showLeftBlock && blockComponent(skills.fac)}
                      </div>
                  </div>
                  }
                </Col>
              </Row>
              <div id = "resume" className = "mt-2" style = {{position: `absolute`, visibility: `hidden`, top: `-20000px`}}>
											{showLeftBlock && <Resume list = {list} visualresumepro = {visualresumepro} fac = {5} bg = {bg} font = {font}/>}
											{showLeftBlock && leftBlockComponent(5)}
											{showLeftBlock && rightBlockComponent(5)}
											{showLeftBlock && blockComponent(5)}
										</div>
            </div>

      
    </React.Fragment>
  
)
}

export default Template;