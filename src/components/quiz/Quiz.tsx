import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";
import { getQuestions, getMyQuizQuestions, setUrl } from "../../actions";
import { fetchUsersQuizizz, setLoggedIn } from "../../actions/accountActions";
import { setQuestionsAreLoaded } from "../../actions/quizTimerActions";

const Quiz = ({
  isLoggedIn,
  usersQuizizz,
  getQuestions,
  setUrl,
  getMyQuizQuestions,
  setLoggedIn,
  fetchUsersQuizizz,
  setQuestionsAreLoaded,
}: PropsFromRedux) => {
  const navigate = useNavigate();
  const params = useParams();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initQuiz = async (quiz: string) => {
    await getQuestions(quiz);
    setIsLoading(false);
    setUrl(`/quiz/${quiz}`);
  };

  const initMyQuiz = async (myQuizId: string) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/auth");
      return;
    } else {
      setLoggedIn();
    }
    if (usersQuizizz.length === 0) {
      console.log("PLEASE WORK");
      // await action creator that just fetches data from firebase and puts it into account.quizizz
      await fetchUsersQuizizz();
      // action creator that recieves the quizId and puts that quizizz queestions into questions state
      console.log("third");
      console.log(userId);
      if (typeof params.myQuizId === "string")
        getMyQuizQuestions(params.myQuizId);
    } else {
      // if we already have the quiz questions
      // action creator that recieves the quizId and puts that quizizz queestions into questions state
      if (typeof params.myQuizId === "string")
        getMyQuizQuestions(params.myQuizId);
    }
    setQuestionsAreLoaded(true);
    setIsLoading(false);
    setUrl(`/myQuizizz/${myQuizId}`);
  };

  useEffect(() => {
    if (typeof params.quiz === "string") {
      console.log("something");
      initQuiz(params.quiz);
    } else if (typeof params.myQuizId === "string") {
      console.log("entered block");
      initMyQuiz(params.myQuizId);
    } else {
      console.log(params);
      console.log(typeof params.quiz);
      console.error("invalid path (error wrote by justin)");
    }
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "scroll",
      }}
    >
      <Stats
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
      <CurrentQuestion
        isLoading={isLoading}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

type RootState = {
  account: { isLoggedIn: boolean; userId: string; usersQuizizz: [] };
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.account.isLoggedIn,
    usersQuizizz: state.account.usersQuizizz,
  };
};

const connector = connect(mapStateToProps, {
  getQuestions,
  setUrl,
  getMyQuizQuestions,
  setLoggedIn,
  fetchUsersQuizizz,
  setQuestionsAreLoaded,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Quiz);
