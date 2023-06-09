import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { getVisualResume, updateVisualResumeExp } from '../../../actions/visualresume';
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, update, updateresume } from '../../../actions/user';
import { API } from '../../../config';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import {hobbies, areaOfIntrest} from "../../../helpers/visualresume/fresher"
import {version1} from "../../../helpers/visualresume/expert/version"
import {visualresumedata} from "../../../helpers/visualresume/expert"
import imageCompression from 'browser-image-compression';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'
import UserInfo from "./UserInfo"
import PersonalInfo from "./PersonalInfo"
import LayoutInfo from "./LayoutInfo"
import LayoutLRInfo from "./LayoutLRInfo"
import ProfileSummaryInfo from "./ProfileSummaryInfo"
import WorkexpInfo from "./WorkexpInfo"
import CompetenciesInfo from "./CompetenciesInfo"
import TechSkillsInfo from "./TechSkillsInfo"
import ToolSkillsInfo from "./ToolSkillsInfo"
import SoftSkillsInfo from "./SoftSkillsInfo"
import ProgSkillsInfo from "./ProgSkillsInfo"
import ProjectsInfo from "./ProjectsInfo"
import EducationInfo from "./EducationInfo"
import CertificationInfo from "./CertificationInfo"
import AchievmentsInfo from "./AchievmentsInfo"
import PublicationInfo from "./PublicationInfo"
import AreaOfIntrestInfo from "./AreaOfIntrestInfo"
import HobbiesInfo from "./HobbiesInfo"

const UserInformationexpert = forwardRef((props, ref) => {
    const [values, setValues] = useState({
			message: '',
			success: false,
			error: false,
      name: "",
      email:"",
			photo:"/images/profile.png",
      visualresumeexp: visualresumedata,
			image: "",
			layoutInfoDisplay: false,
			userInfoDisplay: false,
			personalInfoDisplay: false,
			profileSummaryInfoDisplay: false,
			workexpInfoDisplay: false,
			competenciesInfoDisplay: false,
			techSkillsInfoDisplay: false,
			toolSkillsInfoDisplay: false,
			progSkillsInfoDisplay: false,
			softSkillsInfoDisplay: false,
			projectsInfoDisplay: false,
			educationInfoDisplay: false,
			certificationDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false
  
        
    });

    const { message, success, error, name, email, photo, visualresumeexp, image, layoutInfoDisplay,
					userInfoDisplay,
					 personalInfoDisplay,
					profileSummaryInfoDisplay,
					competenciesInfoDisplay,
					workexpInfoDisplay,
					techSkillsInfoDisplay,
					toolSkillsInfoDisplay,
					progSkillsInfoDisplay,
					softSkillsInfoDisplay,
					projectsInfoDisplay,
					educationInfoDisplay,
					certificationInfoDisplay,
					achievmentsInfoDisplay,
					publicationInfoDisplay,
					areaOfIntrestInfoDisplay,
					hobbiesInfoDisplay
					} = values;
    const token = getCookie('token');

    const init = () => {
      getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
					let vdata = {}
					if(data.visualresumeexp.typeOfResume !== ""){
						vdata = data.visualresumeexp.data
						if(!vdata.payment){
							vdata = version1(vdata)
						}
						vdata.colors = {bg: props.bg, font: props.font}
						props.vr(vdata, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: `${API}/user/photo/${data.username}`,
								visualresumeexp: data.visualresumeexp.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
								
									visualresumeexp: data.visualresumeexp.data,
									photo: `${API}/user/photo/${data.username}`,
									
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: "/images/profile.png",
								visualresumeexp: data.visualresumeexp.data
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: data.visualresumeexp.data,
								layoutInfoDisplay: true
							});
						}
					}else{
						vdata = visualresumedata
						vdata.colors = {bg: props.bg, font: props.font}
						props.vr(vdata, layoutInfoDisplay, userInfoDisplay);
						if(data.photo){
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: `${API}/user/photo/${data.username}`,
								visualresumeexp: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: visualresumedata,
									photo: `${API}/user/photo/${data.username}`,
									layoutInfoDisplay: true
							});
						}else{
							props.pr({
								name: data.name,
								email: data.email,
								username: data.username,
								photo: "/images/profile.png",
								visualresumeexp: visualresumedata
											 });
							setValues({
									...values,
									name: data.name,
									email: data.email,
									visualresumeexp: visualresumedata,
								layoutInfoDisplay: true
							});
						}
					}
					
        }
    });
};
  
  useEffect(() => {
      init();
			
			
  }, []);

	const quill = useRef(null);
    
  const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

  const showErrorMessage = () => (
			<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
					{error}
			</div>
    );
	
	
	const Popup2 = (data1) =>{
    let userFormData = new FormData();
    var mywindow = window.open('', 'new div', 'height=1485,width=1050');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "print"/>');
      mywindow.document.write('<link rel="stylesheet" href="/stylesheets/visualresume/fresher/stylesheet.css" type="text/css" media = "screen"/>');
      mywindow.document.write('</head><body>');
      mywindow.document.write('<div id = "resume" style = "width: 1050px; height: 1485px; position: absolute">');
      mywindow.document.write(data1);
      mywindow.document.write('</div>');
      mywindow.document.write('</body></html>');
      mywindow.document.close();
			let phone = mywindow.document.getElementById("contact-phone-dummy");
			let email = mywindow.document.getElementById("contact-email-dummy");
		
			email.children[1].innerHTML = "dummyemail@abc.com"
			phone.children[1].innerHTML = "+91-1234567890"
			var svgElements = mywindow.document.body.querySelectorAll('svg');
			svgElements.forEach(function(item) {
					item.setAttribute("width", item.getBoundingClientRect().width);
					item.style.width = null;
			});
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
        console.log(myNewCroppedFile)
				imageCompression(myNewCroppedFile, options)
					.then(function (compressedFile) {
						userFormData.set('photosrc', myNewCroppedFile);
						updateresume(token, userFormData).then(data => {
									if (data.error) {
											setValues({ ...values, error: data.error, success: false, loading: false });
										mywindow.focus();


										mywindow.close();
									} else {

											console.log(true);
											mywindow.focus();
										//mywindow.print();

										mywindow.close();
									}
							});
					})
					.catch(function (error) {
						console.log(error.message);
					});
    
      
      });
    
   
      
      return true;
  }
	
const handleShare = () => {
    let data = document.getElementById("resume").innerHTML;
    Popup2(data);
  }
  
  const saveInfo = () => {
		
		
		let visualresumeCopy = {
			typeOfResume: "",
			data: "",
			photo: {
				contentType:"image/png",
				data: null
			}
				
		}
      	visualresumeCopy.typeOfResume = `/visualresume/${props.type}/${props.template}`;
				visualresumeCopy.data = visualresumeexp
			
			
		 		setValues({ ...values, error: false, success: false });
    updateVisualResumeExp(token, visualresumeCopy).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
						
                  setValues({
                      ...values,
										visualresumeexp: data1.visualresumeexp.data,
										message: "Resume Information Saved Successfully",
                      success: true,
                      loading: false
                  });
						
						handleShare();
          }
      });
  }
	
	const vr = (data) => {
		props.vr(data, layoutInfoDisplay, userInfoDisplay);
    setValues({ ...values, visualresumeexp: data, error: false, success: false });
	}
	
	const next = (c, n) => {
		setValues({ ...values, [c]: false, [n]: true });
		if(n == "layoutInfoDisplay"){
			props.vr(visualresumeexp, true, false);
		}else if(n == "userInfoDisplay"){
			props.vr(visualresumeexp, false, true);
		}else{
			props.vr(visualresumeexp, false, false);
		}
		
	}
	
	const back = (c, b) => {
		props.vr(visualresumeexp, layoutInfoDisplay, userInfoDisplay);
		setValues({ ...values, [c]: false, [b]: true });
	}
	
	const handleLayout = () =>{
		setValues({...values, layoutInfoDisplay: true,
			userInfoDisplay: false,
			personalInfoDisplay: false,
			profileSummaryInfoDisplay: false,
			workexpInfoDisplay: false,
			competenciesInfoDisplay: false,
			techSkillsInfoDisplay: false,
			toolSkillsInfoDisplay: false,
			progSkillsInfoDisplay: false,
			softSkillsInfoDisplay: false,
			projectsInfoDisplay: false,
			educationInfoDisplay: false,
			certificationInfoDisplay: false,
			achievmentsInfoDisplay: false,
			publicationInfoDisplay: false,
			areaOfIntrestInfoDisplay: false,
			hobbiesInfoDisplay: false,
			dummyInfoDisplay: false});
		
		props.vr(visualresumeexp, true, false);
	}
	
	useImperativeHandle(ref, () => {

   return (
		 {
			 editClickChild: editClickChild,
			 editClickNext: editClickNext,
			 saveInfo: saveInfo
		 }
	 )

  });
	
	 const editClickChild = (c) =>{
		
		setValues({...values, [c]: true, layoutInfoDisplay: false});
	}
	 
	 const editClickNext = (c, n)=>{
		 setValues({...values, [c]: false, [n]: true});
	 }

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
						{!layoutInfoDisplay && <button className = "btn btn-md btn-primary ml-4" onClick = {handleLayout}>Layout</button>}
						
            {userInfoDisplay && <UserInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp} photo = {photo} name = {name} email = {email}/>}
            {personalInfoDisplay && <PersonalInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{profileSummaryInfoDisplay && <ProfileSummaryInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{workexpInfoDisplay && <WorkexpInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{competenciesInfoDisplay && <CompetenciesInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{techSkillsInfoDisplay && <TechSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{toolSkillsInfoDisplay && <ToolSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{progSkillsInfoDisplay && <ProgSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{softSkillsInfoDisplay && <SoftSkillsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{projectsInfoDisplay && <ProjectsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{educationInfoDisplay && <EducationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{certificationInfoDisplay && <CertificationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{achievmentsInfoDisplay && <AchievmentsInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{publicationInfoDisplay && <PublicationInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{areaOfIntrestInfoDisplay && <AreaOfIntrestInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
						{hobbiesInfoDisplay && <HobbiesInfo vr = {vr} next = {next} back = {back} visualresumeexp = {visualresumeexp}/>}
            {!layoutInfoDisplay && <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>}
        </React.Fragment>
    );
});

export default UserInformationexpert;