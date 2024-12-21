import React, { useState } from "react";
import MainSection from "./MainSection";
import FormModal from "./FormModal";
import AdvancedForm from "./JoinCollabForm/AdvancedForm";

const JoinUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  const closeForm = () => setIsFormVisible(false);

  return (
    <>
      <MainSection toggleFormVisibility={toggleFormVisibility} />
      <FormModal isVisible={isFormVisible} closeForm={closeForm}>
              <AdvancedForm closeForm={closeForm} />
      </FormModal>
    </>
  );
};

export default JoinUs;
