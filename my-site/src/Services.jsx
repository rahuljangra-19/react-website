import React from "react";
import Data from "./Card_data";
import Card from "./Card";
import Modal from "./Modal";

const Service = () => {
  return (
    <>
      <div className=" my-3">
        <h1 className=" text-center"> Our Services</h1>
        <hr className=" text-center w-25 mx-auto" />
      </div>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((value, index) => {
                return (
                  <Card
                  key ={index}
                    imgSrc={value.imgsrc}
                    Title={value.title}
                    Text={value.text}
                    Btn={value.btn}
                  />
                );
              })}
            </div>
            <Modal />
          </div>
        </div>
        <div>
           <h6 className=" mx-auto text-center mt-5">
                ©2020<strong> Web Code Services. </strong> All Right Reserved <strong> Term & Condition</strong>
           </h6>
          </div>
      </div>
    </>
  );
};

export default Service;
