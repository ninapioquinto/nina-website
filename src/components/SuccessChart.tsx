
'use client'
import React from 'react';
import { Area, AreaChart, CartesianGrid } from 'recharts';
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
    <div className="bg-black/20 backdrop-blur-xl border-t border-purple-500/20">
      <ChartContainer className="h-48 sm:h-64 md:h-96 aspect-auto" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}>
          <defs>
            <linearGradient id="fillEfficiency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-efficiency)" stopOpacity={0.8} />
              <stop offset="55%" stopColor="var(--color-efficiency)" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
              <stop offset="55%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} className="stroke-purple-500/20" />
          <ChartTooltip 
            active 
            cursor={false} 
            content={<ChartTooltipContent className="bg-black/80 backdrop-blur-xl border-purple-500/20 text-white" />} 
          />
          <Area 
            strokeWidth={2} 
            dataKey="revenue" 
            type="stepBefore" 
            fill="url(#fillRevenue)" 
            fillOpacity={0.1} 
            stroke="var(--color-revenue)" 
            stackId="a" 
          />
          <Area 
            strokeWidth={2} 
            dataKey="efficiency" 
            type="stepBefore" 
            fill="url(#fillEfficiency)" 
            fillOpacity={0.1} 
            stroke="var(--color-efficiency)" 
            stackId="a" 
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default SuccessChart;
