import {Publish,} from "@material-ui/icons";
  import Brightness1Icon from '@material-ui/icons/Brightness1';
  import { Link } from "react-router-dom";
  import "./user.css";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://i.insider.com/5deef03779d75732b4354fb2?width=1300&format=jpeg&auto=webp"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Will Bettleheim</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Details</span>
              <div className="userShowInfo">
                <Brightness1Icon className="userShowIcon" />
                <span className="userShowInfoTitle">32 years</span>
              </div>
              <div className="userShowInfo">
                <Brightness1Icon className="userShowIcon" />
                <span className="userShowInfoTitle">177.00 cm</span>
              </div>
      
              <div className="userShowInfo">
                <Brightness1Icon className="userShowIcon" />
                <span className="userShowInfoTitle">156 Lbs</span>
              </div>
              <div className="userShowInfo">
                <Brightness1Icon className="userShowIcon" />
                <span className="userShowInfoTitle">77 bpm</span>
              </div>
              <div className="userShowInfo">
                <Brightness1Icon className="userShowIcon" />
                <span className="userShowInfoTitle">123 | 80</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="John Deaux"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Age</label>
                  <input
                    type="text"
                    placeholder="yrs"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Height</label>
                  <input
                    type="text"
                    placeholder="cm"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Weight</label>
                  <input
                    type="text"
                    placeholder="Lbs"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Pulse</label>
                  <input
                    type="text"
                    placeholder="bpm"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                <label>Blood Pressure</label>
                  <input
                    type="text"
                    placeholder="mmHg"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }