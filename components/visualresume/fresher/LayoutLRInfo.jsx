import { Container, Row, Col, Button, NavLink } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';


const LayoutLRInfo = (props) => {
  
  const selected = "btn btn-sm btn-success w-75 mt-2";
  const unselected = "btn btn-sm btn-outline-primary w-75 mt-2";
  
  const vr = props.vr;
  const visualresume = props.visualresume;
  const next = props.next;
  const editClick = props.editClick;

  
  const [values, setValues] = useState(visualresume.layout.display);
  
  const [classes, setClasses] = useState(visualresume.layout.classes);
  
  const name = {
    userInfo: "User Information",
      personalInfo: "Personal Information",
      profileSummaryInfo: "Profile Summary",
      techSkillsInfo: "Technical Skills",
      educationInfo: "Education",
      projectsInfo: "Projects",
      workexpInfo: "Industrial Exposure",
      areaOfIntrestInfo: "Area of Intrests",
      achievmentsInfo: "Extra Curricular",
      hobbiesInfo: "Hobbies"
  }
  
  const [sequence, setSeuence] = useState(visualresume.layout.sequence)
  
  
  
  const [sequencelr, setSequencelr] = useState(visualresume.layout.sequencelr)
  
  const [list, setList] = useState(visualresume.layout.list);
  const [listLR, setListLR] = useState(visualresume.layout.listLR);
  
  const handleClick = (name) => {
    let dis = name + "Display";
    let classN = name + "Class";
    let arr = [];
    let arrLR = {left:[],right:[]};
    let obj = values
    let objClass = classes;
    if(values[name]){
      obj[name] = false;
      objClass[classN]= unselected
      
    }else{
      obj[name] = true;
      objClass[classN]= selected
      
    }
    
    sequence.map((q, i)=> {
      if(obj[q]){
        arr.push(q+"Display");
      }
    });
    sequencelr.left.map((q, i)=>{
      if(obj[q]){
        arrLR.left.push(q+"Display");
      }
    });
    sequencelr.right.map((q, i)=>{
      if(obj[q]){
        arrLR.right.push(q+"Display");
      }
    })
    setList(arr);
    setListLR(arrLR);
    setValues(obj);
    setClasses(objClass)
    let visualresumeCopy = visualresume;
    visualresumeCopy.layout.list = arr;
    visualresumeCopy.layout.listLR = arrLR;
    visualresumeCopy.layout.display = obj;
    visualresumeCopy.layout.classes = objClass;
    vr(visualresumeCopy, true, false);
  }
  
  const handleleft = (name, arrow) => {
    let dis = name + "Display";
    let classN = name + "Class";
    let arr = [];
    let arrLR = {left:[],right:[]};
    let seq = sequence;
    let seqlr = sequencelr;
    let obj = values
    let objClass = classes;
    
    let indexlr = sequencelr.left.findIndex(k => k== name);
    let index = sequence.findIndex(k => k== name);
    
    let dummynamelr = sequencelr.left[indexlr];
    let dummyname = sequence[index];
    if(arrow == "up"){
      seqlr.left[indexlr] = seqlr.left[indexlr - 1];
      seqlr.left[indexlr - 1] = dummynamelr;

      seq[index] = seq[index -1];
      seq[index -1] = dummyname;
    }else{
      seqlr.left[indexlr] = seqlr.left[indexlr + 1];
      seqlr.left[indexlr + 1] = dummynamelr;

      seq[index] = seq[index +1];
      seq[index +1] = dummyname;
    }
    
    
    setSequencelr(seqlr);
    setSeuence(seq);
    
    seq.map((q, i)=> {
      if(obj[q]){
        arr.push(q+"Display");
      }
    });
    seqlr.left.map((q, i)=>{
      if(obj[q]){
        arrLR.left.push(q+"Display");
      }
    });
    sequencelr.right.map((q, i)=>{
      if(obj[q]){
        arrLR.right.push(q+"Display");
      }
    })
    setList(arr);
    setListLR(arrLR);
    setValues(obj);
    setClasses(objClass)
    let visualresumeCopy = visualresume;
    visualresumeCopy.layout.sequence = seq;
    visualresumeCopy.layout.sequencelr = seqlr;
    visualresumeCopy.layout.list = arr;
    visualresumeCopy.layout.listLR = arrLR;
    visualresumeCopy.layout.display = obj;
    visualresumeCopy.layout.classes = objClass;
    vr(visualresumeCopy, true, false);
  }
  
  const handleright = (name, arrow) => {
    let dis = name + "Display";
    let classN = name + "Class";
    let arr = [];
    let arrLR = {left:[],right:[]};
    let seq = sequence;
    let seqlr = sequencelr;
    let obj = values
    let objClass = classes;
    
    let indexlr = sequencelr.right.findIndex(k => k== name);
    let index = sequence.findIndex(k => k== name);
    
    let dummynamelr = sequencelr.right[indexlr];
    let dummyname = sequence[index];
    if(arrow == "up"){
      seqlr.right[indexlr] = seqlr.right[indexlr - 1];
      seqlr.right[indexlr - 1] = dummynamelr;

      seq[index] = seq[index -1];
      seq[index -1] = dummyname;
    }else{
      seqlr.right[indexlr] = seqlr.right[indexlr + 1];
      seqlr.right[indexlr + 1] = dummynamelr;

      seq[index] = seq[index +1];
      seq[index +1] = dummyname;
    }
    
    
    setSequencelr(seqlr);
    setSeuence(seq);
    
    seq.map((q, i)=> {
      if(obj[q]){
        arr.push(q+"Display");
      }
    });
    seqlr.left.map((q, i)=>{
      if(obj[q]){
        arrLR.left.push(q+"Display");
      }
    });
    sequencelr.right.map((q, i)=>{
      if(obj[q]){
        arrLR.right.push(q+"Display");
      }
    })
    setList(arr);
    setListLR(arrLR);
    setValues(obj);
    setClasses(objClass)
    let visualresumeCopy = visualresume;
    visualresumeCopy.layout.sequence = seq;
    visualresumeCopy.layout.sequencelr = seqlr;
    visualresumeCopy.layout.list = arr;
    visualresumeCopy.layout.listLR = arrLR;
    visualresumeCopy.layout.display = obj;
    visualresumeCopy.layout.classes = objClass;
    vr(visualresumeCopy, true, false);
  }
  
 
  
  const showLeftButtons = () => {
    return (
      sequencelr.left.map((l, i)=> {
        let str = l + "Class"
        if(l == "hobbiesInfo"){
          if(classes[str] == selected){
            return (
              <div>
                <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
                <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
              </div>
              )
          }else{
            return (
              <div>
                <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
              </div>
              )
          }
          
            
          }else{
            return (<div>
                  <button className = {classes[str]} >{name[l]}</button>
                  <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
                </div>)
          }
          
        
      })
    )
  }
  
  const showRightButtons = () => {
    return (
      sequencelr.right.map((l, i)=> {
        let str = l + "Class"
        
          if(l == "educationInfo"){
          return (
              <div>
                <button className = {classes[str]} >{name[l]}</button>
                <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
              </div>
          )
        }else{
          if(classes[str] == selected){
            if(i == 1){
              return (
              <div>
                  <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
                  <button className = "btn btn-sm" onClick = {()=> handleright(l, "down")}><i class="fas fa-arrow-down"></i></button>
                  <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
                </div>
            )
            }else if(i== sequencelr.right.length-1){
              return (
              <div>
                  <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
                  <button className = "btn btn-sm" onClick = {()=> handleright(l, "up")}><i class="fas fa-arrow-up"></i></button>
                  <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
                </div>
            )
            }else{
            return (
              <div>
                  <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
                  <button className = "btn btn-sm" onClick = {()=> handleright(l, "up")}><i class="fas fa-arrow-up"></i></button>
                  <button className = "btn btn-sm" onClick = {()=> handleright(l, "down")}><i class="fas fa-arrow-down"></i></button>
                  <button className = "btn btn-sm" onClick = {() => editClick(l)}><i class="fas fa-edit"></i></button>
                </div>
            )
            }
          }else{
            return (
              <div>
                  <button className = {classes[str]} onClick = {()=> handleClick(l)}>{name[l]}</button>
              </div>
              )
          }
        }
        
      })
    )
  }
  
  return (
    
    <div className = "container mt-4">
      <Row>
        <Col xs = "6">
          {showLeftButtons()}
        </Col>
        <Col xs = "6">
          {showRightButtons()}
        </Col>
        
        
        <Button className = "btn alert ml-2 mr-4 mt-2">Back</Button>
        <Button className = "btn alert mr-4 mt-2" onClick = {()=> next("layoutInfoDisplay", "userInfoDisplay")}>Next</Button>
      </Row>
    </div>
  
  
  )
  
}

export default LayoutLRInfo;