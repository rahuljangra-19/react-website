import React from "react";
import { Link } from "react-router-dom";

const File = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className=" row ">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  <strong className="brand_name">Web Code Services</strong>
                </h1>
                <h2 className=" mt-3">
                  {props.message}
                </h2>
                <div className=" mt-3">
                  <Link to={props.visit} className="btnGet">
                   {props.btn}
                  </Link>
                </div>
              </div>

              <div className=" col-lg-6 order-1 order-lg-2 mt-2 mb-1 header_img">
                <img src={props.imgsrc} className="img_fluid animated" alt="pic" />
              </div>
              </div>
            </div>
          </div>
          <div>
           <h6 className=" mx-auto text-center mt-1">
                ©2020<strong> Web Code Services. </strong> All Right Reserved <strong> Term & Condition</strong>
           </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default File;
