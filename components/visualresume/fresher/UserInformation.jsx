import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { getVisualResume, updateVisualResume } from '../../../actions/visualresume';
import { getCookie, isAuth } from '../../../actions/auth';
import { getProfile, update } from '../../../actions/user';
import { API } from '../../../config';

const UserInformation = (props) => {
    const [values, setValues] = useState({
        message: '',
        success: false,
        error: false,
      name: "",
      email:"",
			photo:"/images/profile.png",
      visualresume: "",
       personalInformationshow: false,
      personalInformation: false,
      educationalInformationshow: false,
      projectInformationshow: false,
      trainingInformationshow: false,
      skillsshow: false,
      hobbiesshow: false,
      areaOfIntrestshow:false,
      extraCurricularshow: false
        
    });
	
		const hobbies = [
			{value: "Running", name: "Running"},
			{value: "Tennis", name: "Tennis"},
			{value: "Table Tennis", name: "Table Tennis"},
			{value: "Cricket", name: "Cricket"},
			{value: "Football", name: "Football"},
			{value: "Chess", name: "Chess"},
			{value: "Swimming", name: "Swimming"},
			{value: "Listening Music", name: "Listening Music"},
			{value: "Playing Guitar", name: "Playing Guitar"},
			{value: "Playing Keyboard", name: "Playing Keyboard"},
			{value: "Playing Violin", name: "Playing Violin"},
			{value: "Playing Flute", name: "Playing Flute"},
			{value: "Singing", name: "Singing"},
			{value: "Dancing", name: "Dancing"},
			{value: "Travelling", name: "Travelling"},
			{value: "Social Work", name: "Social Work"},
			{value: "Drama", name: "Drama"},
			{value: "Acting", name: "Acting"},
			{value: "Painting", name: "Painting"},
			{value: "Reading", name: "Reading"},
			{value: "Writing", name: "Writing"},
			{value: "Gaming", name: "Gaming"},
			{value: "Browsing", name: "Browsing"},
			{value: "Movies", name: "Movies"},
			{value: "Gardening", name: "Gardening"},
			{value: "Animal Care", name: "Animal Care"}
		]
		
		const areaOfIntrest = {
			subject: [
				{value:"ME", name: "Mechanical Engineering"},
				{value:"CE", name: "Civil Engineering"},
				{value:"ECE", name: "Electronics & Communication Engineering"},
				{value:"CSE", name: "Computer Science Engineering"},
				{value:"EE", name: "Electrical Engineering"},
				{value:"CHE", name: "Chemical Engineering"},
				{value:"IE", name: "Instrumentation Engineering"}
			],
			topics: {
				"ME": [
					{value: "Engineering Mechanics", name: "Engineering Mechanics"},
					{value: "Strength of Materials", name: "Strength of Materials"},
					{value: "Theory Of machines", name: "Theory Of machines"},
					{value: "Machine Design", name: "Machine Design"},
					{value: "Fluid Mechanics", name: "Fluid Mechanics"},
					{value: "Heat Tranfer", name: "Heat Tranfer"},
					{value: "Thermodynamics", name: "Thermodynamics"},
					{value: "Refrigeration & Air Cond", name: "Refrigeration & Air Cond"},
					{value: "Manufacturing Eng", name: "Manufacturing Eng"},
					{value: "Industrial Eng", name: "Industrial Eng"}
				],
				
				"CE": [
				{name: "Solid Mechanics", value: "Solid Mechanics" },
				{name: "Structural Analysis", value: "Structural Analysis"},
				{name: "RCC Structures", value: "RCC Structures"},
				{name: "Design of Steel Structures", value: "Design of Steel Structures"},
				{name: "Geotechnical Engineering", value: "Geotechnical Engineering"},
				{name: "Fluid Mechanics & Machines", value: "Fluid Mechanics & Machines"},
				{name: "Environmental Engineering", value: "Environmental Engineering"},
				{name: "Irrigation Engineering", value: "Irrigation Engineering"},
				{name: "Engineering Hydrology", value: "Engineering Hydrology"},
				{name: "Transportation Engineering", value: "Transportation Engineering"},
				{name: "Geometics Engineering", value: "Geometics Engineering"},
				{name: "CMM and Eng Mech", value: "CMM and Eng Mech"}],
				
				"ECE": [
					{value: "Network Theory", name: "Network Theory"},
					{value: "Electromagnetics", name: "Electromagnetics"},
					{value: "Control Systems", name: "Control Systems"},
					{value: "Electronic Device & Circuits", name: "Electronic Device & Circuits"},
					{value: "Analog Circuits", name: "Analog Circuits"},
					{value: "Digital Circuits", name: "Digital Circuits"},
					{value: "Microprocessors", name: "Microprocessors"},
					{value: "Signals & Systems", name: "Signals & Systems"},
					{value: "Communication Systems", name: "Communication Systems"}
					
				],
				
				"CSE": [
					{value:"Theory of Comput", name:"Theory of Comput"},
					{value:"Digital Logic", name:"Digital Logic"},
					{value:"Comp Org & Architecture", name:"Comp Org & Architecture"},
					{value:"Prog & Data Structures", name:"Prog & Data Structures"},
					{value:"Algorithms", name:"Algorithms"},
					{value:"Compiler Design", name:"Compiler Design"},
					{value:"Operating Systems", name:"Operating Systems"},
					{value:"Databases", name:"Databases"},
					{value:"Computer Networks", name:"Computer Networks"}
					
				],
				
				"EE": [
					{value:"Electric Circuits", name: "Electric Circuits"},
					{value:"Signal & Systems", name: "Signal & Systems"},
					{value:"Electrical Machines", name: "Electrical Machines"},
					{value:"Power Systems", name: "Power Systems"},
					{value:"Control Systems", name: "Control Systems"},
					{value:"Measurement", name: "Measurement"},
					{value:"Analog Circuits", name: "Analog Circuits"},
					{value:"Digital Electronics", name: "Digital Electronics"},
					{value:"Power Electronics", name: "Power Electronics"},
					{value:"Electromagnetic Theory", name: "Electromagnetic Theory"}
				],
				
				"CHE": [
					{name:"Process Calculations", value:"Process Calculations"},
					{name:"Thermodynamics", value:"Thermodynamics"},
					{name:"Fluid Mechanics", value:"Fluid Mechanics"},
					{name:"Mechanical Operations", value:"Mechanical Operations"},
					{name:"Heat Transfer", value:"Heat Transfer"},
					{name:"Mass Transfer", value:"Mass Transfer"},
					{name:"Chemical Reaction Eng", value:"Chemical Reaction Eng"},
					{name:"Instrumentation", value:"Instrumentation"},
					{name:"Process Control", value:"Process Control"},
					{name:"Plant Design & Economics", value:"Plant Design & Economics"},
					{name:"Chemical Technology", value:"Chemical Technology"}
					
				],
				
				"IE": [
					{name:"Network Theory", value:"Network Theory"},
					{name:"Instrumentation", value:"Instrumentation"},
					{name:"Ananalog Electronics", value:"Ananalog Electronics"},
					{name:"Signal & System", value:"Signal & System"},
					{name:"Communication Sys", value:"Communication Sys"},
					{name:"Contorl System", value:"Contorl System"},
					{name:"Process Control", value:"Process Control"},
					{name:"Digital Electronics", value:"Digital Electronics"},
					{name:"Measurement", value:"Measurement"},
					{name:"Optical Instrumentation", value:"Optical Instrumentation"}
				]
			}
			
		}
    const { message, success, error, name, email, photo, visualresume, personalInformationshow,personalInformation, educationalInformationshow, projectInformationshow, trainingInformationshow,
          skillsshow, hobbiesshow, areaOfIntrestshow, extraCurricularshow} = values;
    const token = getCookie('token');

    const init = () => {
//     getVisualResume(token).then(data => {
//         if (data.error) {
//             setValues({ ...values, error: data.error });
//         } else {
//             setValues({ ...values, success: true, message: "visual resume aa" });
//             console.log(data.personalInformation);
//         }
//     });
      getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
					props.vr(data.visualresume);
					
					if(data.photo){
						props.pr({
							name: data.name,
							email: data.email,
							photo: `${API}/user/photo/${data.username}`,
							visualresume: data.visualresume
										 });
						setValues({
                ...values,
                name: data.name,
                email: data.email,
                visualresume: data.visualresume,
								photo: `${API}/user/photo/${data.username}`,
              	personalInformationshow: true
            });
					}else{
						props.pr({
							name: data.name,
							email: data.email,
							photo: "/images/profile.png",
							visualresume: data.visualresume
										 });
						setValues({
                ...values,
                name: data.name,
                email: data.email,
                visualresume: data.visualresume,
              personalInformationshow: true
            });
					}
            
          
        }
    });
};
  
  useEffect(() => {
      init();
			
  }, []);

    

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({ name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    
    const showSuccessMessage = () => success && <div className="alert alert-info">{message}</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
  
  const saveInfo = () => {
		let visualresumeCopy = visualresume;
      	visualresumeCopy.typeOfResume = `/visualresume/${props.type}/${props.template}`;
		 		setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    updateVisualResume(token, visualresume).then(data1 => {
          if (data1.error) {
              setValues({ ...values, error: data1.error, success: false, loading: false });
          } else {
						
                  setValues({
                      ...values,
										visualresume: visualresumeCopy,
										message: "Resume Information Saved Successfully",
                      success: true,
                      loading: false
                  });
          }
      });
  }
  
  const handleChangePersonalInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.pesrsonalInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };

  
  const personalInformationNext = () => {
    setValues({...values, personalInformationshow: false, personalInformation: true});
		props.vr(visualresume);
    //console.log(visualresume)
  }
  
  
  
  const personalInformationNext1 = () => {
    setValues({...values, personalInformation: false, educationalInformationshow: true});
    //console.log(visualresume)
  }
  
  const personalInformationBack1 = () => {
    setValues({...values, personalInformationshow: true, personalInformation: false});
    //console.log(visualresume)
  }
  
  const handleChangeEducationalInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.educationalInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const educationalInformationBack = () => {
    setValues({...values, educationalInformationshow: false, personalInformation: true});
    //console.log(visualresume)
  }
  
  const educationalInformationNext = () => {
    setValues({...values, educationalInformationshow: false, projectInformationshow: true});
    //console.log(visualresume)
  }
  
  const handleChangeProjectInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.projectInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const projectInformationBack = () => {
    setValues({...values, projectInformationshow: false, educationalInformationshow: true});
    //console.log(visualresume)
  }
  
  const projectInformationNext = () => {
    setValues({...values, projectInformationshow: false, trainingInformationshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeTrainingInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.trainingInformation[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const trainingInformationBack = () => {
    setValues({...values, trainingInformationshow: false, projectInformationshow: true});
    //console.log(visualresume)
  }
  
  const trainingInformationNext = () => {
    setValues({...values, trainingInformationshow: false, hobbiesshow: true});
    //console.log(visualresume)
  }
  
	const handleChangeHobbies = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.hobbies[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const hobbiesInformationBack = () => {
    setValues({...values, hobbiesshow: false, trainingInformationshow: true});
    //console.log(visualresume)
  }
  
  const hobbiesInformationNext = () => {
    setValues({...values, hobbiesshow: false, areaOfIntrestshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeArea = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.areaOfIntrest[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const areaInformationBack = () => {
    setValues({...values, areaOfIntrestshow: false, hobbiesshow: true});
    //console.log(visualresume)
  }
  
  const areaInformationNext = () => {
    setValues({...values, areaOfIntrestshow: false, skillsshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeSkillsInformation = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.skills[n] = e.target.value;
       props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const skillsInformationBack = () => {
    setValues({...values, areaOfIntrestshow: true, skillsshow: false});
    //console.log(visualresume)
  }
  
  const skillsInformationNext = () => {
    setValues({...values, skillsshow: false,extraCurricularshow: true});
    //console.log(visualresume)
  }
	
	const handleChangeExtraCurricular = n => e => {
      let visualresumeCopy = visualresume;
      visualresumeCopy.extraCurricular[n] = e.target.value;
        props.vr(visualresumeCopy);
        setValues({ ...values, visualresume: visualresumeCopy, error: false, success: false });
    };
  
  const extraInformationBack = () => {
    setValues({...values, extraCurricularshow: false, skillsshow: true});
    //console.log(visualresume)
  }
  
  const extraInformationNext = () => {
    setValues({...values, extraCurricularshow: true});
    //console.log(visualresume)
  }
  

    const personalInformationForm = () => {
        return (
          <div className= "container">
						<div style= {{width: `200px`}}>
							<img
                            src={photo}
                            className="img img-fluid img-thumbnail mb-3"
                            style={{ maxHeight: 'auto', maxWidth: '100%' }}
                            alt="user profile"
                        />
						</div>
            <div className="form-group">
              <label className="lead">Name</label>
              <input 
                disabled
                type = "text"
                className="form-control"
                value={name}>
              </input>
              <label className="lead">Email</label>
              <input 
                disabled
                type = "text"
                className="form-control"
                value={email}>
              </input>
             </div>
            <div className="form-group">
              
              
            <Button className = "btn alert mr-4">Back</Button>
            <Button className = "btn alert mr-4" onClick = {personalInformationNext}>Next</Button>
            <NavLink href="/user/update/account-information" className = "btn btn-danger">Update User Information</NavLink>
          </div>
            </div>
            
        );
    };
  
  const personalInformationForm1 = () => {
        return (
          <div className= "container">
           
            <div className="form-group">
              <label className="lead">Designation</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.pesrsonalInformation.designation}
                onChange= {handleChangePersonalInformation("designation")}>
              </input>
              <label className="lead">Phone Number</label>
              <input 
                type = "text"
                className="form-control"
                value={visualresume.pesrsonalInformation.phone}
                onChange= {handleChangePersonalInformation("phone")}>
              </input>
              <label className="lead">Address</label>
              <input 
                type = "text"
                className="form-control"
                value={visualresume.pesrsonalInformation.address}
                onChange= {handleChangePersonalInformation("address")}>
              </input>
              <label className="lead">About Me</label>
              <textarea
                className="form-control"
                value={visualresume.pesrsonalInformation.aboutMe}
                onChange= {handleChangePersonalInformation("aboutMe")}>
              </textarea>
             </div>
            <Button className = "btn alert mr-4"onClick = {personalInformationBack1}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {personalInformationNext1}>Next</Button>
            
          </div>
            
        );
    };
  
  const educationalInformationForm = () => {
        return (
          <div className= "container">
						<div className="form-group">
						<Row>
							<Col xs = "12">
								<label className="lead">Latest Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.latestDegree}
									onChange= {handleChangeEducationalInformation("latestDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.latestCollege}
									onChange= {handleChangeEducationalInformation("latestCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.latestCgpa}
									onChange= {handleChangeEducationalInformation("latestCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.latestMonth}
										onChange= {handleChangeEducationalInformation("latestMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.latestYear}
										onChange= {handleChangeEducationalInformation("latestYear")}>
									</input>
							</Col>
						</Row>
            <Row>
							<Col xs = "12">
								<label className="lead">Next Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.nextDegree}
									onChange= {handleChangeEducationalInformation("nextDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.nextCollege}
									onChange= {handleChangeEducationalInformation("nextCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.nextCgpa}
									onChange= {handleChangeEducationalInformation("nextCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.nextMonth}
										onChange= {handleChangeEducationalInformation("nextMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.nextYear}
										onChange= {handleChangeEducationalInformation("nextYear")}>
									</input>
							</Col>
						</Row>
            <Row>
							<Col xs = "12">
								<label className="lead">Last Degree/Certificate</label>
								<input 
									type = "text"
									className="form-control"
									defaultValue={visualresume.educationalInformation.lastDegree}
									onChange= {handleChangeEducationalInformation("lastDegree")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">College/University Name</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.lastCollege}
									onChange= {handleChangeEducationalInformation("lastCollege")}>
								</input>
							</Col>
							<Col xs = "6">
								<label className="lead">CGPA/Percentage</label>
								<input 
									type = "text"
									className="form-control"
									value={visualresume.educationalInformation.lastCgpa}
									onChange= {handleChangeEducationalInformation("lastCgpa")}>
								</input>
							</Col>
							<Col xs = "6">
									<label className="lead">Month</label>
									<input 
										type = "text"
										className="form-control"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.lastMonth}
										onChange= {handleChangeEducationalInformation("lastMonth")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Year</label>
									<input 
										type = "text"
										className="form-control w-4"
										style = {{width: `40%`}}
										value={visualresume.educationalInformation.lastYear}
										onChange= {handleChangeEducationalInformation("lastYear")}>
									</input>
							</Col>
						</Row>
						</div>
            <Button className = "btn alert mr-4"onClick = {educationalInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {educationalInformationNext}>Next</Button>
            
          </div>
            
        );
    };
  
  const projectInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
              <label className="lead">Major Project Titile</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.projectInformation.majTitle}
                onChange= {handleChangeProjectInformation("majTitle")}>
              </input>
              <label className="lead">Description</label>
              <textarea
                className="form-control"
                defaultValue={visualresume.projectInformation.majDes}
                onChange= {handleChangeProjectInformation("majDes")}>
              </textarea>
             </div>
            <div className="form-group">
              <label className="lead">Minor Project Titile</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.projectInformation.minTitle}
                onChange= {handleChangeProjectInformation("minTitle")}>
              </input>
              <label className="lead">Description</label>
              <textarea
                className="form-control"
                defaultValue={visualresume.projectInformation.minDes}
                onChange= {handleChangeProjectInformation("minDes")}>
              </textarea>
             </div>
            <Button className = "btn alert mr-4"onClick = {projectInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {projectInformationNext}>Next</Button>
            
          </div>
    
    
    )
  }

	 const trainingInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
							<Row>
								<Col xs = "6">
									<label className="lead">Training 1</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.training1}
										onChange= {handleChangeTrainingInformation("training1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Organization</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.org1}
										onChange= {handleChangeTrainingInformation("org1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Start Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.startDate1}
										onChange= {handleChangeTrainingInformation("startDate1")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">End Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.endDate1}
										onChange= {handleChangeTrainingInformation("endDate1")}>
									</input>
								</Col>
								<Col xs ="12">
									<label className="lead">Description</label>
									<textarea
										className="form-control"
										defaultValue={visualresume.trainingInformation.des1}
										onChange= {handleChangeTrainingInformation("des1")}>
									</textarea>
								</Col>
								<Col xs = "6">
									<label className="lead">Training 2</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.training2}
										onChange= {handleChangeTrainingInformation("training2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Organization</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.org2}
										onChange= {handleChangeTrainingInformation("org2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">Start Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.startDate2}
										onChange= {handleChangeTrainingInformation("startDate2")}>
									</input>
								</Col>
								<Col xs = "6">
									<label className="lead">End Date</label>
									<input 
										type = "text"
										className="form-control"
										defaultValue={visualresume.trainingInformation.endDate2}
										onChange= {handleChangeTrainingInformation("endDate2")}>
									</input>
								</Col>
								<Col xs ="12">
									<label className="lead">Description</label>
									<textarea
										className="form-control"
										defaultValue={visualresume.trainingInformation.des2}
										onChange= {handleChangeTrainingInformation("des2")}>
									</textarea>
								</Col>
								</Row>
							</div>
            <Button className = "btn alert mr-4"onClick = {trainingInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {trainingInformationNext}>Next</Button>
            
          </div>
    
    
    )
  }
	 
	 const hobbiesInformationForm = () =>{
		 return(
		 	<div className= "container">
           
         <div className="form-group">
					 <label className="lead">Hobby 1</label>
					 <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby1")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby1)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <label className="lead">Hobby 2</label>
					 <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby2")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby2)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					<label className="lead">Hobby 3</label>
					 <select className = "form-control" 
                onChange= {handleChangeHobbies("hobby3")}>
							{hobbies.map((e, key) => {
							 
							 		if(e.value == visualresume.hobbies.hobby3)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <Button className = "btn alert mr-4"onClick = {hobbiesInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {hobbiesInformationNext}>Next</Button>
			 </div>
		 )
	 }
	 
	 const areaInformationForm = () =>{
		 return(
		 	<div className= "container">
           
         <div className="form-group">
					 <label className="lead">Area Of Intrest 1</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area1Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area1].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area1Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 2</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area2Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area2].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area2Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <div className="form-group">
					 <label className="lead">Area Of Intrest 3</label>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3")}>
							{areaOfIntrest.subject.map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
					 <select className = "form-control" 
                onChange= {handleChangeArea("area3Topic")}>
							{areaOfIntrest.topics[visualresume.areaOfIntrest.area3].map((e, key) => {
							 
							 		if(e.value == visualresume.areaOfIntrest.area3Topic)
									{return <option key={key} value={e.value} selected>{e.name}</option>;}
							 	else
									{return <option key={key} value={e.value}>{e.name}</option>;}
							})}
					</select>
				 </div>
				 <Button className = "btn alert mr-4"onClick = {areaInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {areaInformationNext}>Next</Button>
			 </div>
		 )
	 }
	 
	 const skillsInformationForm = () =>{
		 return(
		 	<div className= "container">
           
         <div className="form-group">
					 <label className="lead">Skill 1</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill1}
                onChange= {handleChangeSkillsInformation("skill1")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating1}
                onChange= {handleChangeSkillsInformation("rating1")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 2</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill2}
                onChange= {handleChangeSkillsInformation("skill2")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating2}
                onChange= {handleChangeSkillsInformation("rating2")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 3</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill3}
                onChange= {handleChangeSkillsInformation("skill3")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating3}
                onChange= {handleChangeSkillsInformation("rating3")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 4</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill4}
                onChange= {handleChangeSkillsInformation("skill4")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating4}
                onChange= {handleChangeSkillsInformation("rating4")}>
              </input>
				 </div>
				 <div className="form-group">
					 <label className="lead">Skill 5</label>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.skill5}
                onChange= {handleChangeSkillsInformation("skill5")}>
              </input>
					 <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.skills.rating5}
                onChange= {handleChangeSkillsInformation("rating5")}>
              </input>
				 </div>
				
				 <Button className = "btn alert mr-4"onClick = {skillsInformationBack}>Back</Button>
         <Button className = "btn alert mr-4" onClick = {skillsInformationNext}>Next</Button>
			 </div>
		 )
	 }
	 
	 const extraInformationForm = () => {
    return (
        <div className= "container">
           
            <div className="form-group">
              <label className="lead">Extra Curricular 1</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra1}
                onChange= {handleChangeExtraCurricular("extra1")}>
              </input>
              <label className="lead">Extra Curricular 2</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra2}
                onChange= {handleChangeExtraCurricular("extra2")}>
              </input>
							<label className="lead">Extra Curricular 3</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra3}
                onChange= {handleChangeExtraCurricular("extra3")}>
              </input>
							<label className="lead">Extra Curricular 4</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra4}
                onChange= {handleChangeExtraCurricular("extra4")}>
              </input>
							<label className="lead">Extra Curricular 5</label>
              <input 
                type = "text"
                className="form-control"
                defaultValue={visualresume.extraCurricular.extra5}
                onChange= {handleChangeExtraCurricular("extra5")}>
              </input>
             </div>
            
            <Button className = "btn alert mr-4"onClick = {extraInformationBack}>Back</Button>
            <Button className = "btn alert mr-4" onClick = {extraInformationNext}>Next</Button>
            
          </div>
    
    
    )
  }

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
            {personalInformationshow && personalInformationForm()}
            {personalInformation && personalInformationForm1()}
            {educationalInformationshow && educationalInformationForm()}
            {projectInformationshow && projectInformationForm()}
						{trainingInformationshow && trainingInformationForm()}
						{hobbiesshow && hobbiesInformationForm()}
						{areaOfIntrestshow && areaInformationForm()}
						{skillsshow && skillsInformationForm()}
						{extraCurricularshow && extraInformationForm()}
            <Button color = "primary" className = "btn mr-4 ml-3"onClick = {saveInfo}>Save</Button>
        </React.Fragment>
    );
};

export default UserInformation;