
import { TrendingUp, Users, Clock, Target, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Dashboard = () => {
  const caseStudyMetrics = [
    {
      title: "Client Onboarding Speed",
      value: "45%",
      change: "Faster processing time",
      icon: Clock,
      trend: "up",
      description: "New clients complete setup and begin their journey almost twice as fast"
    },
    {
      title: "Manual Admin Reduction",
      value: "60%",
      change: "Workload eliminated",
      icon: Target,
      trend: "up",
      description: "Automated workflows replaced repetitive tasks and form handoffs"
    },
    {
      title: "Lead Response Time",
      value: "30%",
      change: "Faster responses",
      icon: TrendingUp,
      trend: "up",
      description: "Faster responses led to more conversions and smoother first impressions"
    },
    {
      title: "Win Rate Achievement",
      value: "45%",
      change: "Qualified leads converted",
      icon: Users,
      trend: "up",
      description: "Enabled by faster onboarding, consistent nurturing, and smarter tracking"
    }
  ];

  const revenueResults = [
    {
      title: "Opportunity Value Captured",
      value: "$112,000",
      description: "Through improved visibility and timely follow-ups",
      period: "30 days"
    },
    {
      title: "Revenue Generated",
      value: "$53,000", 
      description: "From newly closed deals",
      period: "30 days"
    },
    {
      title: "System ROI",
      value: "847%",
      description: "Return on automation investment",
      period: "First month"
    }
  ];

  const automationResults = [
    { 
      system: "Centralized CRM Dashboard", 
      impact: "Complete visibility of leads and funding stages",
      metric: "Real-time updates"
    },
    { 
      system: "Automated Lead Capture & Nurture", 
      impact: "Instant qualification and follow-up sequences",
      metric: "24/7 active"
    },
    { 
      system: "Smart Client Portal", 
      impact: "Self-service credit repair and funding tracking",
      metric: "Always accessible"
    },
    { 
      system: "Course Delivery System", 
      impact: "Reduced support requests with self-paced learning",
      metric: "On-demand access"
    },
    { 
      system: "Pipeline & Task Automation", 
      impact: "Smart triggers for every client journey stage",
      metric: "Zero manual oversight"
    },
    { 
      system: "Funding Tracker", 
      impact: "Live dashboard with complete transparency",
      metric: "Real-time progress"
    }
  ];

  const timelineData = [
    { month: "Week 1", efficiency: 20, leads: 15, revenue: 8 },
    { month: "Week 2", efficiency: 35, leads: 25, revenue: 18 },
    { month: "Month 1", efficiency: 55, leads: 40, revenue: 35 },
    { month: "Month 2", efficiency: 75, leads: 65, revenue: 58 },
    { month: "Month 3", efficiency: 85, leads: 80, revenue: 78 },
    { month: "30 Days", efficiency: 95, leads: 100, revenue: 100 }
  ];

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
            Real Results from Our Credit Repair & Funding Case Study
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See how custom GoHighLevel CRM automation transformed operations, streamlined client onboarding, and delivered measurable growth within 30 days.
          </p>
        </div>

        {/* Revenue Results Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Revenue Results Unlocked in 30 Days
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {revenueResults.map((result, index) => (
              <Card key={result.title} className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border-purple-400/30 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">
                    {result.value}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{result.title}</h4>
                  <p className="text-white/70 text-sm mb-1">{result.description}</p>
                  <p className="text-purple-300 text-xs font-medium">{result.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex space-x-4">
            <Button variant="outline" className="text-white border-white/20 bg-transparent hover:bg-white/10">
              30-Day Results
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Before vs After
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              ROI Analysis
            </Button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {caseStudyMetrics.map((metric, index) => (
            <Card key={metric.title} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <p className="text-xs text-green-400 mb-2">{metric.change}</p>
                <p className="text-xs text-white/60">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Growth Chart Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Operational Efficiency & Revenue Growth</CardTitle>
                <p className="text-sm text-white/60">30-day transformation timeline</p>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between space-x-2">
                  {timelineData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                      <div className="flex flex-col items-center space-y-1 w-full">
                        <div
                          className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t w-full transition-all duration-300 hover:from-purple-500 hover:to-purple-300"
                          style={{ height: `${(data.efficiency / 100) * 200}px` }}
                        />
                        <div
                          className="bg-gradient-to-t from-violet-600 to-violet-400 rounded-t w-full transition-all duration-300 hover:from-violet-500 hover:to-violet-300"
                          style={{ height: `${(data.leads / 100) * 150}px` }}
                        />
                        <div
                          className="bg-gradient-to-t from-green-600 to-green-400 rounded-t w-full transition-all duration-300 hover:from-green-500 hover:to-green-300"
                          style={{ height: `${(data.revenue / 100) * 120}px` }}
                        />
                      </div>
                      <div className="text-xs text-white/60 text-center">
                        <div>{data.month}</div>
                        <div className="text-purple-300">{data.efficiency}%</div>
                        <div className="text-violet-300">{data.leads}%</div>
                        <div className="text-green-300">{data.revenue}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-white/60">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded"></div>
                    <span>Operational Efficiency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-violet-600 to-violet-400 rounded"></div>
                    <span>Lead Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded"></div>
                    <span>Revenue Growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automation Systems */}
          <div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Custom Systems Deployed</CardTitle>
                <p className="text-sm text-white/60">GoHighLevel solutions that drive results</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automationResults.map((system, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-white">{system.system}</p>
                        <p className="text-xs text-white/70">{system.impact}</p>
                        <div className="text-xs font-medium text-purple-300">{system.metric}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 via-purple-900/40 to-slate-800/80 backdrop-blur-sm border border-purple-500/20 p-12 text-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-white/[0.02] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to achieve similar results for your business?
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every business is unique, but the principles remain the same: streamline operations, 
                improve customer experience, and free your team to focus on growth.
              </p>
              <Button 
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/30 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Transformation
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/[0.03] blur-xl"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-purple-500/[0.08] blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
