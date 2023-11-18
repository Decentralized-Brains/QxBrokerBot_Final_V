import React, { useState } from "react";
import Nav from "../global/Nav";
import { Collapse } from "antd";


function Faq() {
  const [open, setOpen] = useState(true);  
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const onChange = (key) => {
  console.log(key);
}
  return (
    
    <>
      <div className="hero relative" id="faq">
        <div className="leftd"></div>
        <div className="rightt">
        <div className="top-[2%] w-2/4 translate-x-[40%] translate-y-[30%] h-96 bg-[#FFFFFF] shadow-slate-800 shadow-lg rounded-lg p-4">
        <h1 className="text-center font-jost font-bold text-2xl text-paragraph-color ">
          Frequently Asked Questions{" "}
          <span className="text-primary-color">(FAQ)</span>
        </h1>
        <div className="p-2 rounded-md border-b-1 border-l-2 border-primary-color ">
          <Collapse accordion className="bg-[#ffffff] border-none" colorBorder="#ffffff" size="large" items={items} defaultActiveKey={['1']} onClick={onChange} />
        </div>  
      </div>
        </div>
      </div>

      
    </>
  );
}

export default Faq;
