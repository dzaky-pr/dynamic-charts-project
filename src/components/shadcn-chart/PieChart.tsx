"use client";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

type CustomPieChartProps = {
  chartData: Array<{ browser: string; visitors: number; fill: string }>;
  chartConfig: ChartConfig;
  chartType: "pie" | "donut";
  showLegend?: boolean;
  showLabel?: boolean;
  dataKey: string;
  nameKey: string;
  chartTitle: string;
  chartDesc: string;
};

export function CustomPieChartShadcn({
  chartData,
  chartConfig,
  chartType,
  showLegend = false,
  showLabel = false,
  dataKey,
  nameKey,
  chartTitle,
  chartDesc,
}: CustomPieChartProps) {
  const renderPieChart = () => {
    return (
      <PieChart>
        {showLegend && (
          <ChartLegend
            content={<ChartLegendContent nameKey={nameKey} />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        )}

        <ChartTooltip content={<ChartTooltipContent hideLabel />} />

        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={chartType === "donut" ? 60 : 0}
          label={showLabel ? true : false}
        />
      </PieChart>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDesc}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          {renderPieChart()}
        </ChartContainer>
      </CardContent>

      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
