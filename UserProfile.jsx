import React from "react";
import "./user.css";

const UserProfile = ({ name, email,src1 }) => {
  return (
    <div className="account-container">
      <h3>Account Settings</h3>
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-wrapper">
            <img src={src1} alt="Userimg" className="avatar" />
            <span className="badge">📸</span>
          </div>
          <div>
            <h4>{name}</h4>
            <p className="email">{email}</p>
          </div>
        </div>
        <p className="bio">"Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",</p>
      </div>
    </div>

  );
};

export default UserProfile;
