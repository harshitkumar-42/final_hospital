import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Visit HeathCare"}
        imageUrl={"/schedule.jfif"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;