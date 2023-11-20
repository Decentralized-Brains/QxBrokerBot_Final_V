import React, { useState,  useEffect  } from "react";
import Nav from "../global/Nav";
import { Collapse } from "antd";


function Faq() {
  const [open, setOpen] = useState(true);  
  const [collapseWidth, setCollapseWidth] = useState('600px'); 

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 767) { 
        setCollapseWidth('400px'); 
      } else {
        setCollapseWidth('600px');
      }
    }

    window.addEventListener('resize', handleResize); 


    if (window.innerWidth <= 767) {
      setCollapseWidth('400px'); 
    }

    return () => {
      window.removeEventListener('resize', handleResize); 
    };

  }, []);
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
      <div className="hero relative pt-28 flex justify-center" id="faq">
        <div className="leftd"></div>
        <div className="rightt">
        <div className="top-[2%] mx-auto w-[100%] h-fit bg-[#FFFFFF] shadow-slate-800 shadow-lg rounded-lg p-4">
        <h1 className="text-center font-jost font-bold tex-2xl text-paragraph-color ">
          Frequently Asked Questions{" "}
          <span className="text-primary-color">(FAQ)</span>
        </h1>
        <div className="p-2 rounded-md border-b-1 border-l-2 border-primary-color ">
            <Collapse
              accordion
              style={{ width: collapseWidth, fontFamily:'jost', fontSize:'18px', fontWeight:'normal' }}  
              className="bg-[#ffffff] border-none mobile-width" 
              colorBorder="#ffffff"
              items={items}
              
              defaultActiveKey={['1']}
              onClick={onChange}
            />
          </div> 
      </div>
        </div>
      </div>

      
    </>
  );
}

export default Faq;
