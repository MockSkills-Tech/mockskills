import React, { useState } from "react";
import MainSection from "./MainSection";
import FormModal from "./FormModal";
import FormSteps from "./FormSteps";

const JoinUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  const closeForm = () => setIsFormVisible(false);

  return (
    <>
      <MainSection toggleFormVisibility={toggleFormVisibility} />
      <FormModal isVisible={isFormVisible} closeForm={closeForm}>
        <FormSteps closeForm={closeForm} />
      </FormModal>
    </>
  );
};

export default JoinUs;
