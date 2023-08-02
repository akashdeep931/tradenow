import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchAuth } from "../api";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [load, isLoad] = useState(true);

  useEffect(() => {
    fetchAuth().then((res) => {
      isLoad(false);
      setUser(res.data.user);
    });
  }, []);

  return <>{load ? <p>Loading...</p> : <h1>{user!.name}!</h1>}</>;
};

export default Home;
