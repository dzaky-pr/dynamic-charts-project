"use client";

import { CustomAreaChartShadcn } from "@/components/shadcn-chart/AreaChart";
import { CustomBarChartShadcn } from "@/components/shadcn-chart/BarChart";
import { CustomLineChartShadcn } from "@/components/shadcn-chart/LineChart";
import { CustomPieChartShadcn } from "@/components/shadcn-chart/PieChart";
import { CustomRadarChartShadcn } from "@/components/shadcn-chart/RadarChart";
import { CustomRadialChartShadcn } from "@/components/shadcn-chart/RadialChart";
import { useEffect, useState } from "react";

function MainChart() {
  const [data, setData] = useState<{ x: string; y: number }[]>([]);
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [chartType, setChartType] = useState("area-shadcn");
  const [chartTitle, setChartTitle] = useState("");
  const [chartDesc, setChartDesc] = useState("");
  const [savedCharts, setSavedCharts] = useState<
    {
      type: string;
      data: { x: string; y: number }[];
      title: string;
      desc: string;
    }[]
  >([]);

  useEffect(() => {
    const storedCharts = JSON.parse(
      localStorage.getItem("charts-shadcn") || "[]",
    );
    // console.log("Loaded charts from localStorage:", storedCharts);
    setSavedCharts(storedCharts);
  }, []);

  const handleAddData = () => {
    const parsedYValue = parseFloat(yValue);
    if (xValue && !isNaN(parsedYValue)) {
      setData((prev) => [...prev, { x: xValue, y: parsedYValue }]);
      setXValue("");
      setYValue("");
      // console.log("Data added:", { x: xValue, y: parsedYValue });
    } else {
      alert("Please provide valid X and Y values.");
    }
  };

  const handleSaveChart = () => {
    if (!chartTitle || !chartDesc) {
      alert("Please provide a title and description for the chart.");
      return;
    }
    if (data.length === 0) {
      alert("No data to save. Please add data first.");
      return;
    }

    const newChart = {
      type: chartType,
      data,
      title: chartTitle,
      desc: chartDesc,
    };
    const updatedCharts = [...savedCharts, newChart];
    setSavedCharts(updatedCharts);
    localStorage.setItem("charts-shadcn", JSON.stringify(updatedCharts));
    // console.log("Chart saved:", newChart);

    setData([]);
    setChartTitle("");
    setChartDesc("");
  };

  const handleDeleteChart = (index: number) => {
    const updatedCharts = savedCharts.filter((_, i) => i !== index);
    setSavedCharts(updatedCharts);
    localStorage.setItem("charts-shadcn", JSON.stringify(updatedCharts));
  };

  const renderChart = (
    chart: {
      type: string;
      data: { x: string; y: number }[];
      title: string;
      desc: string;
    },
    index: number,
  ) => {
    switch (chart.type) {
      case "line-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomLineChartShadcn
              chartType="linear"
              data={chart.data}
              chartConfig={{
                y: { label: "Value", color: "hsl(var(--chart-1))" },
              }}
              showLegend={true}
              chartTitle={chart.title}
              chartDesc={chart.desc}
              xAxisKey="x"
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>
            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      case "bar-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomBarChartShadcn
              data={chart.data}
              chartConfig={{
                y: { label: "Value", color: "hsl(var(--chart-1))" },
              }}
              layout="horizontal"
              showLegend={true}
              axisKey="x"
              chartTitle={chart.title}
              chartDesc={chart.desc}
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>
            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      case "pie-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomPieChartShadcn
              chartData={chart.data.map(({ x, y }) => ({
                browser: x,
                visitors: y,
                fill: "hsl(var(--chart-1))",
              }))}
              chartConfig={{
                visitors: { label: "Visitors" },
                x: { label: "X Value" },
              }}
              chartType="pie"
              showLegend={true}
              showLabel={true}
              dataKey="y"
              nameKey="x"
              chartTitle={chart.title}
              chartDesc={chart.desc}
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>
            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      case "area-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomAreaChartShadcn
              type="natural"
              data={chart.data}
              chartConfig={{
                y: { label: "Value", color: "hsl(var(--chart-1))" },
              }}
              showLegend={true}
              xAxisKey="x"
              chartTitle={chart.title}
              chartDesc={chart.desc}
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>
            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      case "radar-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomRadarChartShadcn
              chartData={chart.data}
              chartConfig={{
                y: { label: "Value", color: "hsl(var(--chart-1))" },
              }}
              showLegend={true}
              showDots={true}
              dataKey="x"
              chartTitle={chart.title}
              chartDesc={chart.desc}
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>
            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      case "radial-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomRadialChartShadcn
              chartData={chart.data.map(({ x, y }, i) => ({
                name: x,
                value: y,
                fill: `hsl(var(--chart-${i + 1}))`, // Penerapan warna dinamis berdasarkan indeks
              }))}
              chartConfig={{
                value: {
                  label: "Value",
                  color: `hsl(var(--chart-${index + 1}))`,
                }, // Sesuaikan warna berdasarkan index
              }}
              dataKey="value"
              nameKey="name"
              chartTitle={chart.title}
              chartDesc={chart.desc}
              showLabels
            />
            <button
              onClick={() => handleDeleteChart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Chart
            </button>

            <button
              onClick={() => handleEditChart(index)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Chart
            </button>
            <button
              onClick={() => handleUpdateChart(index)} // Add this
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Update Chart
            </button>
          </div>
        );
      default:
        return <p key={index}>Unsupported chart type: {chart.type}</p>;
    }
  };

  const handleEditChart = (index: number) => {
    const chartToEdit = savedCharts[index];
    setData(chartToEdit.data);
    setChartTitle(chartToEdit.title);
    setChartDesc(chartToEdit.desc);
    setChartType(chartToEdit.type);
  };

  const handleUpdateChart = (index: number) => {
    if (!chartTitle || !chartDesc) {
      alert("Please provide a title and description for the chart.");
      return;
    }
    if (data.length === 0) {
      alert("No data to update. Please add data first.");
      return;
    }

    const updatedChart = {
      type: chartType,
      data,
      title: chartTitle,
      desc: chartDesc,
    };

    const updatedCharts = [...savedCharts];
    updatedCharts[index] = updatedChart;

    setSavedCharts(updatedCharts);
    localStorage.setItem("charts-shadcn", JSON.stringify(updatedCharts));

    // Clear form after update
    setData([]);
    setChartTitle("");
    setChartDesc("");
    setChartType("area-shadcn");
  };

  return (
    <div className="grid grid-cols-1 bg-white lg:grid-cols-1 gap-6 p-4">
      <h1 className="text-2xl font-bold">Main Chart</h1>
      <div className="mt-4">
        <h2 className="font-semibold">Add Data</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="X Value"
            value={xValue}
            onChange={(e) => setXValue(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Y Value"
            value={yValue}
            onChange={(e) => setYValue(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleAddData}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Current Data</h2>
        {data.length > 0 ? (
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">X Value</th>
                <th className="border border-gray-300 p-2">Y Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{d.x}</td>
                  <td className="border border-gray-300 p-2">{d.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data added yet.</p>
        )}
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Chart Details</h2>
        <input
          type="text"
          placeholder="Chart Title"
          value={chartTitle}
          onChange={(e) => setChartTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Chart Description"
          value={chartDesc}
          onChange={(e) => setChartDesc(e.target.value)}
          className="border p-2 rounded w-full mt-2"
        />
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="border p-2 rounded mt-2"
        >
          <option value="area-shadcn">Area Chart</option>
          <option value="bar-shadcn">Bar Chart</option>
          <option value="line-shadcn">Line Chart</option>
          <option value="pie-shadcn">Pie Chart</option>
          <option value="radar-shadcn">Radar Chart</option>
          <option value="radial-shadcn">Radial Chart</option>
        </select>
        <button
          onClick={handleSaveChart}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Create Chart
        </button>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Saved Charts</h2>
        {savedCharts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {savedCharts.map(renderChart)}
          </div>
        ) : (
          <p>No charts saved yet.</p>
        )}
      </div>
    </div>
  );
}

export default MainChart;
