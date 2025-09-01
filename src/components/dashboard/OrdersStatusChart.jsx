"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Returned", value: 42, color: "#8571F4" }, // purple
  { name: "Delivered", value: 68, color: "#C686F8" }, // soft purple
  { name: "Pending", value: 50, color: "#C686F866" }, // light purple
];

const filterOptions = ["12 Months", "6 Months", "30 Days", "7 Days"];

export default function OrdersChart() {
  const [filter, setFilter] = useState("12 Months");

  return (
    <div>
        <h3 className="text-2xl my-5 font-medium">Order Status</h3>
        <Card className="lg:p-5  rounded-3xl  border border-[#D1D1D680] bg-white/80 backdrop-blur">
      {/* Header */}
      <CardHeader className="lg:flex justify-between items-center pb-4">
        <h2 className="lg:text-lg lg:font-semibold text-gray-700">Orders</h2>
        <div className="lg:flex gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option}
              size="sm"
              variant={filter === option ? "default" : "ghost"}
              className={` border border-[#D1D1D680] rounded-full text-xs lg:px-3 py-1 transition-all ${
                filter === option
                  ? "bg-[#007AFF] text-white shadow-sm"
                  : "text-gray-500 hover:text-[#007AFF]"
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="w-full lg:h-[250px] lg:flex items-center justify-between">
        {/* Donut Chart */}
        <div className="lg:w-48 lg:h-48 mb-2">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={25}
                outerRadius={85}
                paddingAngle={4}
                cornerRadius={8}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legends */}
        <div className="space-y-4 text-sm">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 text-gray-600"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-full shadow-sm"
                  style={{ background: item.color }}
                ></span>
                <span>{item.name}</span>
              </div>
              <span className="font-semibold text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
