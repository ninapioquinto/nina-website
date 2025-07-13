
'use client'
import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartConfig = {
  efficiency: {
    label: 'Efficiency Gain',
    color: '#8b5cf6', // purple-500
  },
  revenue: {
    label: 'Revenue Impact', 
    color: '#3b82f6', // blue-500
  },
} satisfies ChartConfig;

const chartData = [
  { month: 'Jan', efficiency: 15, revenue: 25 },
  { month: 'Feb', efficiency: 35, revenue: 45 },
  { month: 'Mar', efficiency: 55, revenue: 75 },
  { month: 'Apr', efficiency: 75, revenue: 95 },
  { month: 'May', efficiency: 85, revenue: 120 },
  { month: 'Jun', efficiency: 95, revenue: 150 },
];

const SuccessChart = () => {
  return (
    <div className="bg-black/20 backdrop-blur-xl border-t border-purple-500/20 relative overflow-hidden">
      <ChartContainer className="h-48 sm:h-64 md:h-80 w-full" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}>
          <defs>
            <linearGradient id="fillEfficiency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-efficiency)" stopOpacity={0.6} />
              <stop offset="100%" stopColor="var(--color-efficiency)" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.6} />
              <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            className="stroke-purple-500/10" 
          />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            className="text-xs fill-gray-400"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            className="text-xs fill-gray-400"
          />
          <ChartTooltip 
            cursor={false} 
            content={<ChartTooltipContent className="bg-black/90 backdrop-blur-xl border-purple-500/30 text-white rounded-lg" />} 
          />
          <Area 
            strokeWidth={2} 
            dataKey="revenue" 
            type="monotone" 
            fill="url(#fillRevenue)" 
            stroke="var(--color-revenue)" 
            stackId="a" 
          />
          <Area 
            strokeWidth={2} 
            dataKey="efficiency" 
            type="monotone" 
            fill="url(#fillEfficiency)" 
            stroke="var(--color-efficiency)" 
            stackId="a" 
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default SuccessChart;
