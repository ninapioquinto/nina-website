
import { TrendingUp, Users, DollarSign, Activity, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1% from last month",
      icon: Users,
      trend: "up"
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: TrendingUp,
      trend: "up"
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: Activity,
      trend: "up"
    }
  ];

  const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" }
  ];

  const chartData = [2000, 1800, 4500, 5600, 1200, 3000, 1200, 4000, 2200, 1800, 5000];

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real-time insights and analytics to track your business performance
          </p>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <Button variant="outline" className="text-white border-white/20 bg-transparent hover:bg-white/10">
              Overview
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Analytics
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Reports
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              Notifications
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-sm">Jan 20, 2023 - Feb 09, 2023</span>
            <Button variant="outline" className="text-white border-white/20 bg-transparent hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-green-400 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between space-x-2">
                  {chartData.map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t flex-1 transition-all duration-300 hover:from-purple-500 hover:to-purple-300"
                      style={{ height: `${(height / 6000) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-white/60">
                  <span>$0</span>
                  <span>$1500</span>
                  <span>$3000</span>
                  <span>$4500</span>
                  <span>$6000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales */}
          <div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Sales</CardTitle>
                <p className="text-sm text-white/60">You made 265 sales this month.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {sale.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-white">{sale.name}</p>
                        <p className="text-sm text-white/60">{sale.email}</p>
                      </div>
                      <div className="text-sm font-medium text-white">{sale.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
