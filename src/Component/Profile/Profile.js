import React from "react";

const Profile = ({FullName,bio,profession,children}) => {
  const handleName = (e) => {
    e.preventDefault();
    alert("Full Name: "+ FullName + " bio: "+ bio +" Job: "+ profession);
  };
  console.log('propos :', children);
  return (
    <>
      <img alt ="" src = {children}/>
      <a href="/" onClick={handleName}>
        Click
      </a>
    </>
  );
};

export default Profile;
