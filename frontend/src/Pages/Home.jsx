import React, { useContext } from "react";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Healthcare"
        }
        imageUrl={"/hero.png"}
      />
      
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;