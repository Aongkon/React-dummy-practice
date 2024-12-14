import propTypes from "prop-types"
// import Users from "./Users";

// console.log(propType)

const User = (props) => {
  return (
    <div>
      {/* <h1>{props.userName}</h1>
      <h2>{props.idName}</h2> */}
      <h1>{props.user.name}</h1>
      <h1>{props.user.id}</h1>
    </div>
  );
}

User.propTypes = {
  user:propTypes.shape({
    id: propTypes.number,
    name: propTypes.string
  })
}

// User.propTypes = {
// //key value
// userName: propTypes.string,
// idName: propTypes.number,

// }

// User.defaultProps = {
//   userName: "default name",
//   idName: 0
// }

export default User;
