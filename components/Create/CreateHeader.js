import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useGlobalAuthContext } from "/context/AuthContext";
const CreateHeader = ({ isDocVisible = false, setIsDocVisible }) => {
  const doc = new jsPDF();
  const { componentRef } = useGlobalAuthContext();
  const handleDownloadPDF = () => {
    const input = componentRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("my-component.pdf");
    });
  };
  const generatePDF = async () => {
    try {
      const input = document.getElementById("pdfdiv");
      await html2canvas(input).then((canvas) => {
        pdf.save("download.pdf");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between w-full mb-4">
      <div>
        <p className="text-xl font-medium ">Create Doc.</p>
        <p className="text-sm text-White/40">
          Create your MRM Document quickly and efficiently
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleDownloadPDF}
          className="px-3 py-1 text-white bg-green-600 rounded-standard/4"
        >
          Generate PDF
        </button>
        <button
          onClick={() => setIsDocVisible(!isDocVisible)}
          className="flex items-center justify-center gap-1 px-5 py-1 font-medium text-white group bg-Blue rounded-standard/4"
        >
          {isDocVisible ? "Go back to editor" : "View doc"}

          <HiOutlineArrowNarrowRight className="text-lg transition-all duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default CreateHeader;
