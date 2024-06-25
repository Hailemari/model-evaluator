
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Code,
  BarChart3
} from "lucide-react";

export function Overview() {
  const stats = [
    {
      title: "Models Evaluated",
      value: "24",
      change: "+12%",
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Avg Performance",
      value: "87.3%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Code Quality Score",
      value: "94.1",
      change: "+2.8",
      icon: Code,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Evaluations Done",
      value: "156",
      change: "+23",
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  const recentEvaluations = [
    { model: "GPT-4-Turbo", task: "Code Generation", score: 92.5, status: "Excellent" },
    { model: "Claude-3-Opus", task: "Reasoning", score: 89.7, status: "Very Good" },
    { model: "Gemini-Pro", task: "Multimodal", score: 85.2, status: "Good" },
    { model: "Llama-3-70B", task: "STEM Knowledge", score: 91.3, status: "Excellent" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Model Evaluation Dashboard</h1>
          <p className="text-slate-600 mt-2">Comprehensive analysis and ranking of AI model performance</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
          System Operational
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Evaluations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span>Recent Model Evaluations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvaluations.map((evaluation, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{evaluation.model}</h4>
                    <p className="text-sm text-slate-600">{evaluation.task}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{evaluation.score}%</p>
                      <Badge 
                        variant={evaluation.status === 'Excellent' ? 'default' : 'secondary'}
                        className={evaluation.status === 'Excellent' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {evaluation.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>System Health</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Model Loading</span>
                <span className="font-medium">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Evaluation Pipeline</span>
                <span className="font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Data Processing</span>
                <span className="font-medium">96%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">Last system check:</p>
              <p className="text-sm font-medium text-slate-900">2 minutes ago</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
