import renderHTML from 'react-render-html';

const BlockBullet = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 183).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 17).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 3).toString() + "px";
  let height1 = (props.fac * 2).toString() + "px";
  let left1 = (props.fac * -5.5).toString() + "px";
  
  let lineH = (props.fac * (props.props.height - 4)).toString() + "px";
  let lineT = (props.fac * 6).toString() + "px";
  let lineL = (props.fac * -5).toString() + "px";
  let lineOp = props.props.line;
  let lineW = (props.fac * 0.5).toString() + "px";

  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `${font}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}>
      <div style = {{top: `${top1}`, position: `absolute`, height: `${height1}`, width: `${height1}`, borderRadius: `50%`, backgroundColor: `${bg}`, left: `${left1}`}}></div>
      {renderHTML(name)}
      {lineOp && 
        <div style = {{width: `${lineW}`, height: `${lineH}`, backgroundColor: `${bg}`, position: `absolute`, top: `${lineT}`, left: `${lineL}`}}></div>
      }
    </div>
  )
}

 export default BlockBullet;