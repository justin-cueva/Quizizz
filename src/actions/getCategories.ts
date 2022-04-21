export default () => async (dispatch: any) => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");

    const data = await response.json();

    console.log(data);

    dispatch({ type: "GOT_CATEGORIES", payload: data });
  } catch (err) {}
};
