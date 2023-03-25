import React, { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import { useGlobalAuthContext } from "/context/AuthContext";
import Papa from "papaparse";
import Chart from "chart.js/auto";
import { Line, Pie, Doughnut } from "react-chartjs-2";
const ViewDoc = () => {
  const {
    editorState1,
    editorState2,
    editorState3,
    data,
    setData,
    value,
    setValue,
    componentRef,
  } = useGlobalAuthContext();
  useEffect(() => {
    const ctx = document.getElementById("barChartforShowDoc").getContext("2d");
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
      const chart = new Chart(ctx, cfg);
      setValue(1);
      localStorage.setItem("Value", value);
      return () => chart.destroy();
    }
  }, [data]);

  // CHARTJS 2
  const [val, setVal] = useState(0);
  useEffect(() => {
    const valll = localStorage.getItem("Value");
    console.log(valll);
    setVal(valll);
  }, []);

  const lineData = {
    labels: ["10000", "20000", "30000", "40000", "50000", "60000", "70000+"],
    datasets: [
      {
        label: "Sales",
        data: [50, 60, 70, 80, 90, 100, 110],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieData = {
    labels: ["Above 10%", "Above 20%", "Above 30%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutData = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 50],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div
        ref={componentRef}
        className="w-full p-6 bg-bgBlack rounded-standard"
      >
        <p className="text-lg font-bold underline">
          Standard Publicly Available Information
        </p>
        <br />
        {editorState1 && (
          <div
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(editorState1?.getCurrentContent())
              ),
            }}
            // dangerouslySetInnerHTML={}
          />
        )}
        {editorState2 && (
          <div
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(editorState2?.getCurrentContent())
              ),
            }}
            // dangerouslySetInnerHTML={}
          />
        )}

        {/* CHART COMES HERE */}
        <p className="text-xl font-medium">GENERATED CHARTS</p>
        <div className="flex items-center justify-center w-full">
          <div className="h-[30rem] w-[30rem] py-10">
            <canvas id="barChartforShowDoc" width="10" height="10"></canvas>
          </div>
          <div className="h-[30rem] w-[30rem] py-10">
            <Line data={lineData} options={options} />
          </div>
          <div className="h-[30rem] w-[30rem] py-10">
            <Pie data={pieData} />
          </div>
          <div className="h-[30rem] w-[30rem] py-10">
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDoc;
