import React,{useState} from 'react'

export default function Tree(props) {
    const {data} = props; //destructuring
    const [opened,setOpened] = useState(false)
    // console.log(data);

    function toggleHandler(){
      // console.log("clicked!");
      setOpened(!opened)
    }


  return (
    <div className='node-container' >
      <div className="node">
        <h3>node 1</h3>
        <button onClick={toggleHandler}>{opened== true ? "-" : "+"}</button>
      </div>

    {opened?<Tree/>:""}

    <div className="node-container child">

      <div className="node ">
          <div className="hConnector"></div>
          <h3>node 1</h3>
          <button onClick={toggleHandler}>{opened== true ? "-" : "+"}</button>

      </div>
      <div className="vConnector"></div>
    </div>
      
    </div>
  )
}
