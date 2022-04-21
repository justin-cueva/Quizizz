const Form = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="scq-form">
      <input placeholder="name of quiz" />
      <button>Save Quiz</button>
    </form>
  );
};

export default Form;
