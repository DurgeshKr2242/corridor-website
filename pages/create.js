import React, { useState } from "react";
import MainPageWrapper from "/components/Wrapper/MainPageWrapper";
import ViewDoc from "/components/Create/ViewDoc";
// icons
import CreateHeader from "/components/Create/CreateHeader";
import ModelInfo from "/components/Create/ModelInfo";
const CreatePage = () => {
  const [isDocVisible, setIsDocVisible] = useState(false);
  return (
    <MainPageWrapper header="create">
      <CreateHeader
        isDocVisible={isDocVisible}
        setIsDocVisible={setIsDocVisible}
      />
      {isDocVisible ? (
        <ViewDoc />
      ) : (
        <div className="flex flex-col items-start justify-start w-full">
          <ModelInfo />
        </div>
      )}
    </MainPageWrapper>
  );
};

export default CreatePage;
