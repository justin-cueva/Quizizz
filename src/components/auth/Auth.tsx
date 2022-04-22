import Header from "../reusables/Header";
import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";

const Auth = () => {
  return (
    <div className="page--build">
      <Header
        page={"Sign In"}
        links={[
          { to: "/", name: "home" },
          { to: "/build", name: "build" },
        ]}
      />
    </div>
  );
};

export default Auth;
