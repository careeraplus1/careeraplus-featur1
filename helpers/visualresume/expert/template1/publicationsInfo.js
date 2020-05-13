import VL from "../../../../components/visualresume/expert/template1/resume/VL"
import RightBlockHeading from "../../../../components/visualresume/expert/template1/resume/RightBlockHeading"
import RightBlockLogo from "../../../../components/visualresume/expert/template1/resume/RightBlockLogo"
import RightBlockPub from "../../../../components/visualresume/expert/template1/resume/RightBlockPub"
import BlockPub from "../../../../components/visualresume/expert/template1/resume/BlockPub"

const publicationsInfo = (obj, data, marginSec, marginBullet, marginPage) => {
  let countL = obj.countL;
  let countR = obj.countR;
  let leftH = obj.leftH;
  let rightH = obj.rightH;
  let tH = 0;
  
  if(rightH > countR * 297){
    countR++;
    rightH = 297 * (countR - 1) + marginPage;
    if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
  }
  if(countR > countL){
    obj.block.components.push(RightBlockLogo);
    obj.block.ids.push("pub-logo");
    obj.block.props.push({top: rightH + marginSec, name: "book"});
    
    obj.block.components.push(RightBlockHeading);
    obj.block.ids.push("pub");
    obj.block.props.push({top: rightH + marginSec, name: data.title , height: 13});
    
    
  }else{
    obj.right.components.push(RightBlockLogo);
    obj.right.ids.push("pub-logo");
    obj.right.props.push({top: rightH + marginSec, name: "book"});
    
    obj.right.components.push(RightBlockHeading);
    obj.right.ids.push("pub");
    obj.right.props.push({top: rightH + marginSec, name: data.title , height: 13});
  }
  
  
  rightH = rightH + marginSec + 13;
  
  
 
  data.value.map((v, i)=>{
    
    let str = "project-heading-" + i.toString();
    let height = (Math.floor(v.journal.length/45) + 2) * 5 + (Math.floor(v.title.length/60) + 2) * 5;
    if(countR > countL){
      height = (Math.floor(v.journal.length/80) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
      obj.block.components.push(BlockPub);
      obj.block.ids.push(str);
      obj.block.props.push({top: rightH + marginSec, height: height, data: v});
      rightH = rightH + marginSec + height;
      
      
    }else{
      obj.right.components.push(RightBlockPub);
      obj.right.ids.push(str);
      obj.right.props.push({top: rightH + marginSec, height: height, data: v});
      rightH = rightH + marginSec + height;
      
      
    }
    
    
    
    if(rightH > countR * 297){
      countR++;
      
      rightH = 297 * (countR -1) + marginPage;
        if(countR > countL) {
          if(countR - 1 == countL){
            obj.right.components.pop();
            obj.right.ids.pop();
            obj.right.props.pop();
            height = (Math.floor(v.journal.length/80) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
            obj.block.components.push(BlockPub);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
            rightH = rightH + marginSec + height;
            
          }else{
            obj.block.components.pop();
            obj.block.ids.pop();
            obj.block.props.pop();
            height = (Math.floor(v.journal.length/80) + 2) * 5 + (Math.floor(v.title.length/100) + 2) * 5;
            obj.block.components.push(BlockPub);
            obj.block.ids.push(str);
            obj.block.props.push({top: rightH + marginSec, height: height, data: v});
            rightH = rightH + marginSec + height;
            
          }
        }else{
          obj.right.components.pop();
          obj.right.ids.pop();
          obj.right.props.pop();
          
          if(countR == 2){
        obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
      }
          
          height = (Math.floor(v.journal.length/45) + 2) * 5 + (Math.floor(v.title.length/60) + 2) * 5;

          obj.right.components.push(RightBlockPub);
          obj.right.ids.push(str);
          obj.right.props.push({top: rightH + marginSec, height: height, data: v});
         rightH = rightH + marginSec + height;
        }
    }
    
  })
  
  
  if(countR > countL){
    obj.block.components.push(VL);
    obj.block.props.push({top: (297 * (countR-1))  + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
  }else{
    if(countR == 1){
      obj.right.components.push(VL);
      obj.right.props.push({top: 60, height: 230});
      obj.page1.right.components = obj.right.components;
        obj.page1.right.ids = obj.right.ids;
        obj.page1.right.props = obj.right.props;
    }else{
      obj.right.components.push(VL);
      obj.right.props.push({top: (297 * (countR-1)) + marginPage + marginSec, height: 297 - ((297 * countR) - rightH)});
    }
    
  }
  obj.countL = countL;
  obj.countR = countR;
  obj.leftH = leftH;
  obj.rightH = rightH;
  
  return obj;
}

               

export default publicationsInfo;