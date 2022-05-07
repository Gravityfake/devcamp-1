const ProfileFuncComp = (props) => {
  return (
    <>
      <p>Firstname : {props.firstname}</p>
      <p>Lastname : {props.lastname}</p>
      <div>{props.children}</div>
    </>
  );
};

export default ProfileFuncComp;
