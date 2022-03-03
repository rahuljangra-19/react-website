import React from "react";
import { Link } from "react-router-dom";
// import web from "./images/software.jpg";

const Card = (props) => {
  return (
    <>
      <div className=" col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgSrc}
            alt="Card_cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
            {/* <p className="card-text">{props.Text}</p> */}
            <Link to={"/"} className="btn btn-primary getBtn mt-3" data-toggle="modal" data-target="#exampleModal">
              {props.Btn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
