'use client'
import React from 'react';
import { Activity, MessageCircle, CheckCircle } from 'lucide-react';
import DottedMap from 'dotted-map';
import { Area, AreaChart, CartesianGrid } from 'recharts';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const WhyChooseMe = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements consistent with other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header consistent with other sections */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Clients <span className="text-gradient">Choose Me</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Delivering exceptional automation solutions with proven expertise and unwavering support
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid gap-8 md:gap-12">
            {/* Key benefits in a consistent card layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-8">
                <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Certified expert delivering real results</h3>
                      <p className="text-white/70 leading-relaxed">
                        I bring a rare combination of certifications in AI automation, generative AI for data engineering, Make, and Airtable. Leveraging top no-code platforms like Zapier, Make, GoHighLevel, Airtable, and n8n, I create custom, scalable systems that streamline your operations and unlock your business's full potential without writing a single line of code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Strategic partner who sees the bigger picture</h3>
                      <p className="text-white/70 leading-relaxed">
                        I do more than execute tasks. I identify hidden bottlenecks and design workflows that future-proof your business. Clients regularly tell me I uncover opportunities they did not even realize existed, helping them save time and boost revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Clear and supportive collaboration from start to finish</h3>
                      <p className="text-white/70 leading-relaxed">
                        Working with me means you will never be left guessing. I communicate complex automation strategies in a straightforward way, keeping you informed and confident throughout the process. My steady and thoughtful approach ensures your project runs smoothly and stress-free.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <Activity className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Proven success across diverse industries</h3>
                      <p className="text-white/70 leading-relaxed">
                        I have optimized lead management for real estate teams and streamlined operations for business owners. My systems deliver measurable improvements in efficiency and growth. Clients consistently reclaim hours in their week and gain clarity in their workflows so they can focus on scaling their business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global experience section */}
            <div className="luxury-card bg-accent/30 backdrop-blur-lg border border-white/10 rounded-2xl p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-gradient">Experienced partner</span> for clients worldwide
              </h3>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                I have worked with clients across the US, UK, Australia, and Canada who value my integrity, speed, and dedication to quality. When you work with me, you get a reliable partner committed to delivering clean and user-friendly systems that make your life easier.
              </p>
            </div>

            {/* Visual elements section */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Tech visualization */}
              <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Advanced Automation Systems</h4>
                  <p className="text-white/70 text-sm">Leveraging cutting-edge technology platforms</p>
                </div>
                <div className="relative">
                  <TechMap />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Success metrics */}
              <div className="luxury-card bg-accent/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Measurable Impact</h4>
                  <p className="text-white/70 text-sm">Consistent growth and efficiency improvements</p>
                </div>
                <SuccessChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-purple/10 rounded-full filter blur-3xl" />
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
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }} className="w-full h-32">
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
    <div className="h-48">
      <ChartContainer className="h-full w-full" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
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
            cursor={false} 
            content={<ChartTooltipContent className="bg-black/80 backdrop-blur-xl border-purple-500/20 text-white" />} 
          />
          <Area 
            strokeWidth={2} 
            dataKey="revenue" 
            type="natural" 
            fill="url(#fillRevenue)" 
            fillOpacity={0.1} 
            stroke="var(--color-revenue)" 
            stackId="a" 
          />
          <Area 
            strokeWidth={2} 
            dataKey="efficiency" 
            type="natural" 
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
