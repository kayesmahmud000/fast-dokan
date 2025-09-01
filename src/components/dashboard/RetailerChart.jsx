"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react"; // icon

const data = [
  { month: "Feb", value1: 15, value2: 10, value3: 5 },
  { month: "Mar", value1: 20, value2: 15, value3: 8 },
  { month: "Apr", value1: 25, value2: 20, value3: 10 },
  { month: "May", value1: 30, value2: 25, value3: 12 },
  { month: "Jun", value1: 35, value2: 28, value3: 15 },
  { month: "Jul", value1: 40, value2: 30, value3: 18 },
  { month: "Aug", value1: 45, value2: 35, value3: 20 },
  { month: "Sep", value1: 50, value2: 40, value3: 22 },
  { month: "Oct", value1: 55, value2: 45, value3: 25 },
  { month: "Nov", value1: 60, value2: 50, value3: 28 },
  { month: "Dec", value1: 65, value2: 55, value3: 30 },
  { month: "Jan", value1: 70, value2: 60, value3: 32 },
];

export default function RetailerPerformance() {
  return (
  <div className="mt-10">
     <h3 className="text-2xl my-5 font-medium">Sales</h3>
      <Card className="lg:p-5 max-w-3xl rounded-3xl  border border-gray-100 bg-white/80 backdrop-blur">
      {/* Header */}
      <CardHeader className="flex justify-between items-center pb-4">
        <h2 className="lg:text-lg lg:font-semibold text-gray-700">Retailer Performance</h2>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full text-xs lg:px-3 py-1 flex items-center gap-1 text-gray-600 border-gray-200 hover:bg-gray-50"
        >
          Sort By <SlidersHorizontal size={14} />
        </Button>
      </CardHeader>

      {/* Chart */}
      <CardContent className="w-full lg:h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <Tooltip cursor={{ fill: "transparent" }} />

            {/* Gradient fills for stacked bars */}
            <defs>
              <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C4B5FD" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#C4B5FD" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <Bar dataKey="value1" stackId="a" fill="url(#color1)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="value2" stackId="a" fill="url(#color2)" />
            <Bar dataKey="value3" stackId="a" fill="url(#color3)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
  );
}
