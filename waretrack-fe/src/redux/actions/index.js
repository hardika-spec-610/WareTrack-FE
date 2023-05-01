export const GET_ALL_LOGIN = "GET_ALL_LOGIN";

export const fetchLoginData = ({ email, password }) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("logindata", data);
        dispatch({
          type: GET_ALL_LOGIN,
          payload: data,
        });
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
