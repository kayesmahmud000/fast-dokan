"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";

const chartData = [
  { month: "Feb", desktop: 180, mobile: 120 },
  { month: "Mar", desktop: 240, mobile: 160 },
  { month: "Apr", desktop: 200, mobile: 130 },
  { month: "May", desktop: 280, mobile: 190 },
  { month: "Jun", desktop: 300, mobile: 200 },
  { month: "Jul", desktop: 350, mobile: 230 },
  { month: "Aug", desktop: 320, mobile: 240 },
  { month: "Sep", desktop: 360, mobile: 260 },
  { month: "Oct", desktop: 390, mobile: 280 },
  { month: "Nov", desktop: 420, mobile: 300 },
  { month: "Dec", desktop: 450, mobile: 330 },
  { month: "Jan", desktop: 480, mobile: 350 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#007AFF",
  },
  mobile: {
    label: "Mobile",
    color: "#8A38F5",
  },
}

const filterOptions = ["12 Months", "6 Months", "30 Days", "7 Days"];

export function SalesCharts() {
  const [filter, setFilter] = useState("12 Months");

  return (
    <div className="mt-10">
      <h3 className="text-2xl my-5 font-medium">Sales</h3>

      <Card className="border-[#D1D1D680] rounded-3xl ">
        {/* Header */}
        <CardHeader className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <h3 className="lg:text-lg lg:font-semibold text-gray-700">Sales Report</h3>
          
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option}
                size="sm"
                variant={filter === option ? "default" : "ghost"}
                className={`rounded-full text-xs lg:px-3 py-1 border transition-all ${
                  filter === option
                    ? "bg-[#007AFF] text-white shadow-sm"
                    : "border-[#D1D1D680] text-gray-500 hover:text-[#007AFF]"
                }`}
                onClick={() => setFilter(option)}
              >
                {option}
              </Button>
            ))}
            
            <Button className="flex items-center gap-2 bg-[#007AFF] text-white rounded-full px-4 py-2 hover:bg-[#0066dd]">
              Export PDF <MdOutlineFileDownload size={18}/>
            </Button>
          </div>
        </CardHeader>

        {/* Chart */}
        <CardContent className="w-full lg:h-[250px]">
          <ResponsiveContainer>
            <AreaChart data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide />
              
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white shadow-md rounded-lg px-3 py-2 text-center text-sm border">
                        <p className="text-gray-400">Today</p>
                        <p className="font-semibold text-lg">
                          ${payload[0].value.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              {/* Mobile Line */}
              <Area
                type="natural"
                dataKey="mobile"
                stroke={chartConfig.mobile.color}
                strokeWidth={2}
                fill={chartConfig.mobile.color}
                fillOpacity={0.05}
              />
              {/* Desktop Line */}
              <Area
                type="natural"
                dataKey="desktop"
                stroke={chartConfig.desktop.color}
                strokeWidth={2}
                fill={chartConfig.desktop.color}
                fillOpacity={0.05}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>

        <CardFooter />
      </Card>
    </div>
  )
}
