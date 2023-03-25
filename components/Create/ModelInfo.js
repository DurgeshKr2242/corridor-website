import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import RichTextEditor1 from "./RichTextEditor1";
import RichTextEditor2 from "./RichTextEditor2";
import Papa from "papaparse";
import Chart from "chart.js/auto";
import { useGlobalAuthContext } from "/context/AuthContext";
// import Data from "../data.csv"
const ModelInfo = () => {
  const { data, setData, value, setValue, keys, setKeys } =
    useGlobalAuthContext();
  const [dropdownActive, setDropdownActive] = useState(false);

  // const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setData(null);
    setKeys([]);

    try {
      Papa.parse(file, {
        download: true,
        header: true,
        complete: (result) => {
          const keys = [];
          Object.keys(result.data[0]).forEach((key) => {
            keys.push(key);
          });
          setKeys(keys);
          setData(result.data);
        },
      });
    } catch (err) {}
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
            {keys?.length == 0 ? (
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
            ) : (
              <>
                <p className="opacity-80">Your file has been selected.</p>
                <p>Select the fields for which you want to generate graphs</p>
                <button
                  id="dropdownCheckboxButton"
                  // data-dropdown-toggle="dropdownDefaultCheckbox"
                  onClick={() => setDropdownActive(!dropdownActive)}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown checkbox{" "}
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {dropdownActive && (
                  <ul
                    class="p-3 space-y-3 text-sm text-gray-800 bg-bgBlackSec"
                    aria-labelledby="dropdownCheckboxButton"
                  >
                    {keys.map((item, i) => {
                      return (
                        <li key={i}>
                          <div class="flex items-center">
                            <input
                              id="checkbox-item-1"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600   rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                            />
                            <label
                              for="checkbox-item-1"
                              class="ml-2 text-sm font-medium text-gray-300"
                            >
                              {item}
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )}

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
