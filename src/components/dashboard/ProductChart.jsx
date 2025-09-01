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
  CardHeader,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const chartData = [
  { month: "Feb", products: 100 },
  { month: "Mar", products: 150 },
  { month: "Apr", products: 120 },
  { month: "May", products: 250 },
  { month: "Jun", products: 180 },
  { month: "Jul", products: 300 },
  { month: "Aug", products: 220 },
  { month: "Sep", products: 260 },
  { month: "Oct", products: 200 },
  { month: "Nov", products: 350 },
  { month: "Dec", products: 140 },
  { month: "Jan", products: 360 },
]

const filterOptions = ["12 Months", "6 Months", "30 Days", "7 Days"]

export function ProductChart() {
  const [filter, setFilter] = useState("12 Months")

  return (
    <div className="">
        <h3 className="text-2xl my-5 font-medium">Products</h3>
      <Card className="border border-[#E5E7EB] rounded-2xl shadow-sm">
        {/* Header */}
        <CardHeader className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <h3 className="lg:text-lg lg:font-semibold text-gray-700">Total Products</h3>

          <div className="flex flex-wrap items-center gap-2">
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

        {/* Chart */}
        <CardContent className="w-full lg:h-[250px]">
          <ResponsiveContainer>
            <AreaChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#f3f4f6" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <YAxis hide />

              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white shadow-md rounded-lg px-3 py-2 text-center text-sm border">
                        <p className="text-gray-400">Today</p>
                        <p className="font-semibold text-lg">
                          {payload[0].value}
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />

              <Area
                type="natural"
                dataKey="products"
                stroke="#8A38F5"
                strokeWidth={2}
                fill="url(#colorProducts)"
                fillOpacity={1}
              />

              {/* Gradient for Area */}
              <defs>
                <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#8A38F5" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#8A38F5" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
