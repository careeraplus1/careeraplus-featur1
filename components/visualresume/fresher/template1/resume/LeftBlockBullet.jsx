import renderHTML from 'react-render-html';

const LeftBlockBullet = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 78).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 3.2).toString() + "pt";
  let left = (props.fac * 1).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  let top1 = (props.fac * 3).toString() + "px";
  let height1 = (props.fac * 1).toString() + "px";
  let left1 = (props.fac * -2).toString() + "px";


  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, position: `absolute`, top: `${top}`, left: `${left}`, color: `white`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`}}> 
      {name}
    </div>
  )
}

 export default LeftBlockBullet;