import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import BiotechIcon from "@mui/icons-material/Biotech";
import MessageIcon from "@mui/icons-material/Message";

const initial = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  project: "",
  technology: "",
  budget: "",
  duration: "",
  message: "",
};

const FormServices = () => {
  const [state, setState] = useState(initial);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // const handleClose = () => setShow(false);
  // const history = useHistory();

  // const modalClose = (e) => {
  //   e.preventDefault();
  //   setShow(false);
  // };

  const {
    name,
    email,
    phone,
    organization,
    project,
    technology,
    budget,
    duration,
    message,
  } = state;

  const handleForm = (event) => {
    event.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !organization ||
      !project ||
      !technology ||
      !budget ||
      !duration ||
      !message
    ) {
      toast.error(<b>Please Provide Details 😧</b>);
    } else {
      axios
        .post("http://localhost:3001/api/post", {
          name,
          email,
          phone,
          organization,
          project,
          technology,
          budget,
          duration,
          message,
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      toast.success("Thanks for Choosing us 😍");
      setTimeout(() => setState(initial), 4000);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div>
        <ToastContainer position="top-center" />
      </div>

      <h3 className=" text-center mx-auto font-weight-bold mt-3 mb-2 text-warning">
        Welcome to Web code Services...
      </h3>

      <form onSubmit={handleForm}>
        <div className="form-group">
          <span>
            <PersonIcon />
          </span>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            placeholder="Your Name"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <EmailIcon />
          </span>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInput}
            placeholder="@gmail.com"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <PhoneInTalkIcon />
          </span>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInput}
            placeholder="Your contact number"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <MapsHomeWorkIcon />
          </span>
          <label>Organization Name</label>
          <input
            type="text"
            name="organization"
            value={organization}
            onChange={handleInput}
            placeholder="company/organization name"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <AccountTreeIcon />
          </span>
          <label>Project Type</label>
          <input
            type="text"
            name="project"
            value={project}
            onChange={handleInput}
            placeholder="Example web designing "
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <BiotechIcon />
          </span>
          <label>Technology</label>
          <input
            type="text"
            name="technology"
            value={technology}
            onChange={handleInput}
            placeholder="Example React Python"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <PaidIcon />
          </span>
          <label>Budget</label>
          <input
            type="text"
            name="budget"
            value={budget}
            onChange={handleInput}
            placeholder="Exapmle 20k..."
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <AccessTimeIcon />
          </span>
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={handleInput}
            placeholder="Time in weeks"
            className=" form-control pl-5"
          />
        </div>
        <div className="form-group">
          <span>
            <MessageIcon />
          </span>
          <label>Explain About your Project</label>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={handleInput}
            placeholder="what changes you want.."
            className=" form-control "
          />
        </div>

        <div className="buttons mt-5 d-flex">
          <input
            type="submit"
            value="Save Data"
            className="btn btn-primary ml-5 mr-auto modalSubBtn"
          />
          <button
            type="button"
            className="btn btn-secondar modalCloseBtn"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default FormServices;
