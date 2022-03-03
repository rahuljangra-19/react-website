import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import img1 from "./images/contact3.png";
import img2 from "./images/contact6.png";
import img3 from "./images/contact4.png";
import img4 from "./images/contact2.png";
import img5 from "./images/contact5.png";

const initalState = {
  name: "",
  gmail: "",
  mobile: "",
  address: "",
  message: "",
};

const Form = () => {
  const [state, setState] = useState(initalState);

  const { name, gmail, mobile, address, message } = state;
  const history = useHistory();
  console.log(history);

  const handleForm = (e) => {
    e.preventDefault();
    if (!name || !gmail || !mobile || !address || !message) {
      toast.error(<b>Please provide Data 😠</b>);
    } else {
      axios
        .post("http://localhost:3001/api/post/data", {
          name,
          gmail,
          mobile,
          address,
          message,
        })
        .then(() => {
          setState({
            name: "",
            gmail: "",
            mobile: "",
            address: "",
            message: "",
          });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("WE contact you soon.. 😍");
      setTimeout(() => history.push("/about"), 5000);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div>
        <div>
          <ToastContainer position="top-center" />
        </div>
        <div className=" text-center">
          <h2>Contact Us...</h2>
          <hr className=" w-50 text-center mx-auto" />
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col-md-5  mt-3">
              <form onSubmit={handleForm}>
                <div className="form-group">
                  <span className=" ml-3">
                    <PersonIcon />
                  </span>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control mt-1"
                    value={name}
                    onChange={handleInput}
                    placeholder="Enter Name Please"
                  />
                </div>
                <div className=" form-group ">
                  <span className=" ml-3">
                    <EmailIcon />
                  </span>
                  <label>Gmail:</label>
                  <input
                    type="text"
                    name="gmail"
                    className="form-control"
                    value={gmail}
                    onChange={handleInput}
                    placeholder="Enter your Gmail Please"
                  />
                </div>
                <div className=" form-group">
                  <span className=" ml-3">
                    <PhoneIphoneIcon />
                  </span>
                  <label>Mobile:</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    value={mobile}
                    onChange={handleInput}
                    placeholder="Enter Mobile Number Please"
                  />
                </div>
                <div className=" form-group">
                  <span className=" ml-3">
                    <HomeIcon />{" "}
                  </span>{" "}
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={handleInput}
                    placeholder="Enter your Address Please"
                  />
                </div>
                <div className=" form-group">
                  <span className=" ml-3">
                    <MessageIcon />
                  </span>
                  <label>Message:</label>
                  <textarea
                    type="textarea"
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={handleInput}
                    placeholder="Enter Your Message Here..... "
                  />
                </div>
                <br />
                <div className=" text-center">
                  <input
                    type="submit"
                    value="Send Now"
                    className="btn btn-outline-success subBtn"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-7">
              <div
              id="carouselExampleControls"
                className="carousel slide mt-5 "
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 h-100"
                      src={img1}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 h-100"
                    src={img2}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 h-100"
                      src={img3}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 h-100"
                      src={img4}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 h-100"
                      src={img5}
                      alt="Third slide"
                    />
                  </div>
                </div>
                 <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a> 
                 <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 className=" mx-auto text-center mt-1">
            ©2020<strong> Web Code Services. </strong> All Right Reserved{" "}
            <strong> Term & Condition</strong>
          </h6>
        </div>
      </div>
    </>
  );
};
export default Form;
