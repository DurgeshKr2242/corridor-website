import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import RichTextEditor1 from "./RichTextEditor1";
import RichTextEditor2 from "./RichTextEditor2";
import Papa from "papaparse";
import Chart from "chart.js/auto";
import { useGlobalAuthContext } from "/context/AuthContext";
// import Data from "../data.csv"
const ModelInfo = () => {
  const { data, setData, value, setValue } = useGlobalAuthContext();
  // const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  useEffect(() => {
    const ctx = document.getElementById("barChart").getContext("2d");

    if (data) {
      const labels_1 = ["Monthly Salary", "Card Limit"];
      const values_1 = [data[0].monthly_salary, data[0].card_limit];
      const cfg = {
        type: "bar",
        data: {
          labels: labels_1,
          datasets: [
            {
              label: "Bar Chart",
              data: values_1,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            indexAxis: "y",
          },
        },
      };
      setValue(1);
      const chart = new Chart(ctx, cfg);
      localStorage.setItem("Value", value);
      return () => chart.destroy();
    }
  }, [data]);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-2 rounded-standard felx-col">
      <div className="flex items-center justify-between w-full px-3">
        <p className="text-lg font-medium">Model Information</p>
        <button className="p-2 text-lg rounded-full bg-bgBlack">
          <AiOutlineCaretDown />
        </button>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full gap-4 p-6 rounded-standard bg-bgBlack felx-col">
        {/* //*  Text editors for three types of inputs as mentioned in the given docs */}

        <div className="flex flex-col items-start justify-start w-full gap-4">
          <div>
            <p className="capitalize ">
              Enter Standard Publicly Available Information
            </p>
            <p className="text-sm opacity-80 text-White">
              For example: Description of what scikit-learn is, or how Linear
              Regression works. This information is mostly textual andsometimes
              images.
            </p>
          </div>
          {typeof window !== undefined && <RichTextEditor1 />}
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <div>
            <p className="capitalize ">Model Specific Information</p>
            <p className="text-sm opacity-80 text-White">
              For example: The modeller needs to explicitly mention the reason
              why a particular technique was used or the reason to use data from
              a specific source.
            </p>
          </div>

          {typeof window !== undefined && <RichTextEditor2 />}
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <div>
            <p className="capitalize ">Data Driven Charts</p>
            <p className="text-sm opacity-80 text-White">
              For example: A pie chart that shows how many missing values are
              there in a variable. Or a bar chart showing the histogram of a
              variable. The modeller can easily procure data which powers this
              chart.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div>
              <label
                htmlFor="file"
                className="px-4 py-1 text-white cursor-pointer bg-Blue rounded-standard/4"
              >
                choose your csv file
              </label>
              <input
                id="file"
                className="hidden"
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
              />
            </div>
            <div className="h-[30rem] w-[30rem] py-10   ">
              <canvas id="barChart" width="10" height="10"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelInfo;
