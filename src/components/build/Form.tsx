import { useNavigate } from "react-router-dom";

type Props = {
  saveBuild: () => Promise<void>;
  nameQuiz: (name: String) => {
    type: string;
    payload: String;
  };
  nameOfMyBuild: string;
};

const Form = (props: Props) => {
  const navigate = useNavigate();

  const formSubmitHandler = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await props.saveBuild();
    navigate("/myQuizizz");
  };

  return (
    <form onSubmit={(e) => formSubmitHandler(e)} className="scq-form">
      <input
        value={props.nameOfMyBuild}
        onChange={(e) => {
          props.nameQuiz(e.target.value);
        }}
        placeholder="name of quiz"
      />
      <button>Save Quiz</button>
    </form>
  );
};

export default Form;
