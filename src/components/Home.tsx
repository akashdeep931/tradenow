import { useContext, useEffect, useState } from "react";
import { fetchAuth } from "../api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { GridLoader } from "react-spinners";

const Home = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAuth()
      .then((res) => {
        setUser(res.data.user);
        setIsLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return (
    <main className="bg-[#03001C] w-full h-screen">
      <section className="w-full h-full flex justify-center items-center">
        {isLoading ? (
          <GridLoader color="rgba(187, 191, 200, 1)" />
        ) : (
          <h1 className="text-[32px] text-[#bbbfc8]">Coming Soon...</h1>
        )}
      </section>
    </main>
  );
};

export default Home;
