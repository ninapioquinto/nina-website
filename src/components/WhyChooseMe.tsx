'use client'
import React from 'react';
import { Activity, MessageCircle } from 'lucide-react';
import DottedMap from 'dotted-map';
import { Area, AreaChart, CartesianGrid } from 'recharts';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const WhyChooseMe = () => {
  return (
    <section className="px-4 py-16 md:py-32 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="mx-auto grid max-w-5xl border border-purple-500/20 backdrop-blur-xl bg-black/20 rounded-2xl md:grid-cols-2 relative z-10">
        <div>
          <div className="p-6 sm:p-12">
            <span className="text-purple-300 flex items-center gap-2">
              <Activity className="size-4" />
              Certified Expert Delivering Real Results
            </span>

            <p className="mt-8 text-2xl font-semibold text-white">
              I bring a rare combination of certifications in AI automation, generative AI for data engineering, Make, and Airtable.
            </p>
          </div>

          <div aria-hidden className="relative">
            <div className="absolute inset-0 z-10 m-auto size-fit">
              <div className="rounded-xl bg-black/40 backdrop-blur-xl z-[1] relative flex size-fit w-fit items-center gap-2 border border-purple-500/30 px-3 py-1 text-xs font-medium shadow-md shadow-purple-500/20">
                <span className="text-lg">🚀</span> 
                <span className="text-white">Advanced Automation Systems</span>
              </div>
              <div className="rounded-xl bg-black/20 absolute inset-2 -bottom-2 mx-auto border border-purple-500/20 px-3 py-4 text-xs font-medium shadow-md shadow-purple-500/10"></div>
            </div>

            <div className="relative overflow-hidden">
              <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-black/40 absolute inset-0 from-transparent to-75%"></div>
              <TechMap />
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-purple-500/20 bg-black/10 p-6 sm:p-12 md:border-0 md:border-l">
          <div className="relative z-10">
            <span className="text-purple-300 flex items-center gap-2">
              <MessageCircle className="size-4" />
              Clear and Supportive Collaboration
            </span>

            <p className="my-8 text-2xl font-semibold text-white">
              Working with me means you will never be left guessing. I communicate complex automation strategies in a straightforward way.
            </p>
          </div>
          <div aria-hidden className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center size-5 rounded-full border border-purple-500/30">
                  <span className="size-3 rounded-full bg-purple-500"/>
                </span>
                <span className="text-gray-400 text-xs">Mon 28 May</span>
              </div>
              <div className="rounded-xl bg-black/30 backdrop-blur-xl mt-1.5 w-3/5 border border-purple-500/20 p-3 text-xs text-white">
                I need help streamlining my lead management process.
              </div>
            </div>

            <div>
              <div className="rounded-xl mb-1 ml-auto w-3/5 bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-xs text-white">
                I'll design a custom workflow that automates your lead capture, scoring, and follow-up sequence. This will save you hours weekly and improve conversion rates.
              </div>
              <span className="text-gray-400 block text-right text-xs">Now</span>
            </div>
          </div>
        </div>

        <div className="col-span-full border-y border-purple-500/20 p-12 bg-black/10">
          <p className="text-center text-4xl font-semibold lg:text-7xl text-white">
            <span className="text-gradient">Experienced partner</span> for clients worldwide
          </p>
        </div>

        <div className="relative col-span-full">
          <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
            <span className="text-purple-300 flex items-center gap-2">
              <Activity className="size-4" />
              Proven Success Across Industries
            </span>

            <p className="my-8 text-2xl font-semibold text-white">
              I have optimized lead management for real estate teams and streamlined operations for business owners. 
              <span className="text-gray-400"> Clients consistently reclaim hours in their week and gain clarity in their workflows.</span>
            </p>
          </div>
          <SuccessChart />
        </div>
      </div>
    </section>
  );
};

const map = new DottedMap({ height: 55, grid: 'diagonal' });
const points = map.getPoints();

const svgOptions = {
  backgroundColor: 'transparent',
  color: 'rgb(139, 92, 246)', // purple-500
  radius: 0.15,
};

const TechMap = () => {
  const viewBox = `0 0 120 60`;
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }} className="w-full h-40">
      {points.map((point, index) => (
        <circle 
          key={index} 
          cx={point.x} 
          cy={point.y} 
          r={svgOptions.radius} 
          fill={svgOptions.color}
          className="animate-pulse"
        />
      ))}
    </svg>
  );
};

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
      <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
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

export default WhyChooseMe;
