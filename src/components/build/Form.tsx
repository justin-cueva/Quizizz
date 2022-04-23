type Props = {
  saveBuild: () => Promise<void>;
  nameQuiz: (name: String) => {
    type: string;
    payload: String;
  };
  nameOfMyBuild: string;
};

const Form = (props: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.saveBuild();
      }}
      className="scq-form"
    >
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
