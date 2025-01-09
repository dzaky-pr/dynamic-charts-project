"use client";

import { CustomAreaChartShadcn } from "@/components/shadcn-chart/AreaChart";
import { CustomBarChartShadcn } from "@/components/shadcn-chart/BarChart";
import { CustomLineChartShadcn } from "@/components/shadcn-chart/LineChart";
import { CustomPieChartShadcn } from "@/components/shadcn-chart/PieChart";
import { CustomRadarChartShadcn } from "@/components/shadcn-chart/RadarChart";
import { CustomRadialChartShadcn } from "@/components/shadcn-chart/RadialChart";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Table } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

function MainChart() {
  const [data, setData] = useState<{ x: string; y: number }[]>([]);
  const [openSheet, setOpenSheet] = useState(false);
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [chartType, setChartType] = useState("");
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
  const [editingChartIndex, setEditingChartIndex] = useState<number | null>(
    null,
  );

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
    setOpenSheet(false);
  };

  const handleDeleteChart = (index: number) => {
    const updatedCharts = savedCharts.filter((_, i) => i !== index);
    setSavedCharts(updatedCharts);
    localStorage.setItem("charts-shadcn", JSON.stringify(updatedCharts));
  };

  const handleDeleteData = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>
              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>
              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>
              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>
              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
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
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>
              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
          </div>
        );
      case "radial-shadcn":
        return (
          <div key={index} className="border p-4 rounded shadow">
            <CustomRadialChartShadcn
              chartData={chart.data.map(({ x, y }, i) => ({
                name: x,
                value: y,
                fill: `hsl(var(--chart-${i + 1}))`,
              }))}
              chartConfig={{
                value: {
                  label: "Value",
                  color: `hsl(var(--chart-${index + 1}))`,
                },
              }}
              dataKey="value"
              nameKey="name"
              chartTitle={chart.title}
              chartDesc={chart.desc}
              showLabels
            />
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleDeleteChart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Delete Chart
              </Button>

              <Button
                onClick={() => handleEditChart(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
              >
                Edit Chart
              </Button>
            </div>
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
    setEditingChartIndex(index);
    setOpenSheet(true);
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

    setData([]);
    setChartTitle("");
    setChartDesc("");
    setChartType("");
    setEditingChartIndex(null);
    setOpenSheet(false);
  };

  const handleSheetOpen = () => {
    setData([]);
    setChartTitle("");
    setChartDesc("");
    setChartType("");
    setEditingChartIndex(null);
    setOpenSheet(true);
  };

  return (
    <div className="grid grid-cols-1 bg-white lg:grid-cols-1 gap-6 p-4">
      <h1 className="text-2xl font-bold">Shadcn Chart Playground</h1>

      <Button onClick={handleSheetOpen}>Add Chart</Button>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild />
        <SheetContent style={{ maxWidth: "100vw", overflowY: "auto" }}>
          <SheetHeader>
            <SheetTitle>
              {editingChartIndex !== null ? "Edit Chart" : "Create Chart"}
            </SheetTitle>
            <SheetDescription>
              {editingChartIndex !== null
                ? "Edit the chart details and update the data."
                : "Add a new chart with the necessary data."}
            </SheetDescription>
          </SheetHeader>

          <div className="mt-4">
            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="chartTitle">Chart Title</Label>
                <Input
                  type="text"
                  id="chartTitle"
                  placeholder="Chart Title"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="chartDesc">Chart Description</Label>
                <Textarea
                  placeholder="Chart Description"
                  value={chartDesc}
                  onChange={(e) => setChartDesc(e.target.value)}
                  className="w-full"
                  id="chartDesc"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="chartType">Chart Type</Label>
                <Select
                  value={chartType}
                  onValueChange={(value) => setChartType(value)}
                >
                  <SelectTrigger id="chartType" className="w-full">
                    <SelectValue placeholder="Select Chart Type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="area-shadcn">Area Chart</SelectItem>
                    <SelectItem value="bar-shadcn">Bar Chart</SelectItem>
                    <SelectItem value="line-shadcn">Line Chart</SelectItem>
                    <SelectItem value="pie-shadcn">Pie Chart (Bug)</SelectItem>
                    <SelectItem value="radar-shadcn">Radar Chart</SelectItem>
                    <SelectItem value="radial-shadcn">
                      Radial Chart (Bug)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4 items-end">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="xDataVal">Add X Data Value </Label>
                  <Input
                    id="xDataVal"
                    type="text"
                    placeholder="X Value"
                    value={xValue}
                    onChange={(e) => setXValue(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="yDataVal">Add Y Data Value </Label>
                  <Input
                    id="yDataVal"
                    type="number"
                    placeholder="Y Value"
                    value={yValue}
                    onChange={(e) => setYValue(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <Button onClick={handleAddData} className="flex-shrink-0">
                  Add
                </Button>
              </div>

              <div className="mt-4">
                <h2 className="font-semibold">Current Data</h2>
                {data.length > 0 ? (
                  <Table className="w-full mt-2 border-collapse">
                    <thead>
                      <tr>
                        <th className="border p-2">X Value</th>
                        <th className="border p-2">Y Value</th>
                        <th className="border p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((d, index) => (
                        <tr key={index}>
                          <td className="border p-2">{d.x}</td>
                          <td className="border p-2">{d.y}</td>
                          <td className="border p-2  items-center justify-center flex">
                            <Button
                              onClick={() => handleDeleteData(index)}
                              className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No data added yet.</p>
                )}
              </div>
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button
                onClick={() =>
                  editingChartIndex !== null
                    ? handleUpdateChart(editingChartIndex)
                    : handleSaveChart()
                }
                className="mt-6"
              >
                {editingChartIndex !== null ? "Update Chart" : "Create Chart"}
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

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
