import Header from "../reusables/Header";
import Form from "./Form";
import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";

const Auth = () => {
  return (
    <div className="page--build">
      <Header
        page={"Auth"}
        links={[
          { to: "/", name: "home" },
          { to: "/build", name: "build" },
        ]}
      />
      <div style={{ alignItems: "center" }} className="container--build-body">
        <Form />
      </div>
    </div>
  );
};

export default Auth;
