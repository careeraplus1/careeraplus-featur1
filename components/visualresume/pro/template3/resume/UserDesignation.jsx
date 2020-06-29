const UserDesignation = (props) =>{
  let height = (props.fac * props.props.height).toString() + "px";
  let width = (props.fac * 105).toString() + "px";
  
  let name = props.props.name;
  let bg = props.bg;
  let font = props.font;
  let id = props.id;
  let line = (props.fac * props.props.height).toString() + "px";
  let size = (props.fac * 6).toString() + "pt";
  let left = (props.fac * 6).toString() + "px";
  let top = (props.fac * props.props.top).toString() + "px";
  
  return (
    <div id = {id} style = {{height: `${height}`, width: `${width}`, lineHeight: `${line}`, position: `absolute`, top: `${top}`, left: `${left}`, fontFamily: `calibri`, fontSize: `${size}`, textAlign: `left`, color: `${bg}`}}>
       {name}
    </div>
  )
}

 export default UserDesignation;