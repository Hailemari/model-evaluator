
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Database, Zap, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export function DataInsights() {
  const modelPerformanceData = [
    { name: 'GPT-4-Turbo', coding: 94, reasoning: 91, multimodal: 89, overall: 92.5 },
    { name: 'Claude-3-Opus', coding: 87, reasoning: 95, multimodal: 86, overall: 89.7 },
    { name: 'Gemini-Pro', coding: 83, reasoning: 84, multimodal: 92, overall: 85.2 },
    { name: 'Llama-3-70B', coding: 85, reasoning: 81, multimodal: 75, overall: 82.8 },
  ];

  const performanceTrends = [
    { month: 'Jan', 'GPT-4': 88, 'Claude-3': 85, 'Gemini': 82, 'Llama-3': 79 },
    { month: 'Feb', 'GPT-4': 89, 'Claude-3': 86, 'Gemini': 83, 'Llama-3': 80 },
    { month: 'Mar', 'GPT-4': 91, 'Claude-3': 88, 'Gemini': 84, 'Llama-3': 81 },
    { month: 'Apr', 'GPT-4': 92, 'Claude-3': 89, 'Gemini': 85, 'Llama-3': 82 },
    { month: 'May', 'GPT-4': 93, 'Claude-3': 90, 'Gemini': 85, 'Llama-3': 83 },
  ];

  const taskDistribution = [
    { name: 'Coding', value: 35, color: '#3B82F6' },
    { name: 'Reasoning', value: 28, color: '#8B5CF6' },
    { name: 'Multimodal', value: 22, color: '#10B981' },
    { name: 'STEM', value: 15, color: '#F59E0B' },
  ];

  const insights = [
    {
      title: "Best Overall Performer",
      value: "GPT-4-Turbo",
      description: "Consistently ranks highest across all evaluation metrics",
      trend: "+3.2%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Top Reasoning Model",
      value: "Claude-3-Opus",
      description: "Excels in logical reasoning and complex problem solving",
      trend: "+5.1%",
      icon: Database,
      color: "text-purple-600"
    },
    {
      title: "Fastest Improving",
      value: "Gemini-Pro",
      description: "Shows strongest month-over-month improvement",
      trend: "+8.7%",
      icon: Zap,
      color: "text-blue-600"
    }
  ];

  const dataQualityMetrics = [
    { metric: "Data Completeness", score: 97.3, status: "Excellent" },
    { metric: "Evaluation Coverage", score: 94.8, status: "Very Good" },
    { metric: "Response Consistency", score: 91.2, status: "Good" },
    { metric: "Bias Detection", score: 88.9, status: "Good" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Data Insights & Analytics</h1>
          <p className="text-slate-600 mt-2">Deep analysis of model performance patterns and trends</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center`}>
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                </div>
                <Badge className="bg-green-100 text-green-800">{insight.trend}</Badge>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{insight.title}</h3>
              <p className="text-2xl font-bold text-slate-900 mb-2">{insight.value}</p>
              <p className="text-sm text-slate-600">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Comparison Chart */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Model Performance Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={modelPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="coding" fill="#3B82F6" name="Coding" />
              <Bar dataKey="reasoning" fill="#8B5CF6" name="Reasoning" />
              <Bar dataKey="multimodal" fill="#10B981" name="Multimodal" />
              <Bar dataKey="overall" fill="#F59E0B" name="Overall" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Trends and Task Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="GPT-4" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="Claude-3" stroke="#8B5CF6" strokeWidth={2} />
                <Line type="monotone" dataKey="Gemini" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="Llama-3" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {taskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Data Quality Metrics */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-green-600" />
            <span>Data Quality Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataQualityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${metric.score * 2.51} 251`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-900">{metric.score}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{metric.metric}</h4>
                <Badge 
                  className={
                    metric.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                    metric.status === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }
                >
                  {metric.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
