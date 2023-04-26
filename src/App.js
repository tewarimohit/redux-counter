import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isUserValid = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isUserValid && <UserProfile />}
      {!isUserValid && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
