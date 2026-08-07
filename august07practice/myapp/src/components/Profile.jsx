import Login from "./Login";
import Error from "./Error";

const Profile = () => {
  let username = "bablu";
  let password = 12345;

  if (username === "bablu" && password === 12345) {
    return <Login />;
  }

  return <Error />;
};

export default Profile;