import React,{useState} from 'react'

export default function Tree(props) {
    const {data} = props; //destructuring
    const [opened,setOpened] = useState(false)
    const fData = data[0]
    console.log(fData.children);

    function toggleHandler(){
      // console.log("clicked!");
      setOpened(!opened)
    }


  return (
    <div className={"node-container "} >
      <div className="node">
     {props.type =="child"? <div className="hConnector"></div>:""}
        <h3>{fData.name}</h3>
        <button onClick={toggleHandler}>{opened== true ? "-" : "+"}</button>
      </div>
      {props.type =="child"? <div className={opened == true ? "vConnector openedVConnector":"vConnector"}></div>:""}

    {opened && fData.children?
   
   <div className='child'>

     { fData.children ? fData.children.map((item)=>{
        console.log(item);
        return(
        
            <Tree data={[item]} type="child"/>

            
            
            )
          }):""}
   
          </div>
    :""}

    {/* <div className="node-container child">

      <div className="node ">
          <div className="hConnector"></div>
          <h3>node 1</h3>
          <button onClick={toggleHandler}>{opened== true ? "-" : "+"}</button>

      </div>
    </div> */}
      
    </div>
  )
}
