import React, { useState } from "react";
import MainPageWrapper from "/components/Wrapper/MainPageWrapper";
import "draft-js/dist/Draft.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// icons
import { useGlobalAuthContext } from "/context/AuthContext";
import ViewDoc from "/components/Create/ViewDoc";
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
        // <div className="flex flex-col items-start justify-start w-full h-full gap-2 rounded-standard felx-col">
        //   <div className="flex items-center justify-between w-full px-3">
        //     <p className="text-lg font-medium">Model Information</p>
        //     <button className="p-2 text-lg rounded-full bg-bgBlack">
        //       <AiOutlineCaretDown />
        //     </button>
        //   </div>
        //   <div className="flex flex-col items-start justify-start w-full h-full gap-4 p-6 rounded-standard bg-bgBlack felx-col">
        //     {/* //*  Text editors for three types of inputs as mentioned in the given docs */}

        //     <div className="flex flex-col items-start justify-start gap-4">
        //       <div>
        //         <p className="capitalize ">
        //           Enter Standard Publicly Available Information
        //         </p>
        //         <p className="text-sm opacity-80 text-White">
        //           For example: Description of what scikit-learn is, or how
        //           Linear Regression works. This information is mostly textual
        //           andsometimes images.
        //         </p>
        //       </div>
        //       {typeof window !== undefined && <RichTextEditor1 />}
        //     </div>
        //     <div className="flex flex-col items-start justify-start gap-4">
        //       <div>
        //         <p className="capitalize ">Model Specific Information</p>
        //         <p className="text-sm opacity-80 text-White">
        //           For example: The modeller needs to explicitly mention the
        //           reason why a particular technique was used or the reason to
        //           use data from a specific source.
        //         </p>
        //       </div>

        //       {typeof window !== undefined && <RichTextEditor2 />}
        //     </div>
        //     <div className="flex flex-col items-start justify-start gap-4">
        //       <div>
        //         <p className="capitalize ">Data Driven Charts</p>
        //         <p className="text-sm opacity-80 text-White">
        //           For example: A pie chart that shows how many missing values
        //           are there in a variable. Or a bar chart showing the histogram
        //           of a variable. The modeller can easily procure data which
        //           powers this chart.
        //         </p>
        //       </div>

        //     </div>
        //   </div>
        // </div>
      )}
    </MainPageWrapper>
  );
};

export default CreatePage;
