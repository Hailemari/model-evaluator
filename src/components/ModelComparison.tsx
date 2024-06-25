
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Zap, Clock, Star } from "lucide-react";

export function ModelComparison() {
  const models = [
    {
      name: "GPT-4-Turbo",
      provider: "OpenAI",
      overall: 92.5,
      coding: 94,
      reasoning: 91,
      multimodal: 89,
      speed: "Fast",
      cost: "High",
      status: "Active"
    },
    {
      name: "Claude-3-Opus",
      provider: "Anthropic",
      overall: 89.7,
      coding: 87,
      reasoning: 95,
      multimodal: 86,
      speed: "Medium",
      cost: "High",
      status: "Active"
    },
    {
      name: "Gemini-Pro",
      provider: "Google",
      overall: 85.2,
      coding: 83,
      reasoning: 84,
      multimodal: 92,
      speed: "Fast",
      cost: "Medium",
      status: "Testing"
    },
    {
      name: "Llama-3-70B",
      provider: "Meta",
      overall: 82.8,
      coding: 85,
      reasoning: 81,
      multimodal: 75,
      speed: "Medium",
      cost: "Low",
      status: "Active"
    }
  ];

  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case "Fast": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Slow": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Model Comparison</h1>
          <p className="text-slate-600 mt-2">Compare performance metrics across different AI models</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Add New Model
        </Button>
      </div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {models.map((model, index) => (
          <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    <p className="text-sm text-slate-600">{model.provider}</p>
                  </div>
                </div>
                <Badge 
                  variant={model.status === 'Active' ? 'default' : 'secondary'}
                  className={model.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                >
                  {model.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Overall Score */}
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Overall Score</span>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600">{model.overall}%</span>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Coding Performance</span>
                    <span className="font-medium">{model.coding}%</span>
                  </div>
                  <Progress value={model.coding} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Reasoning</span>
                    <span className="font-medium">{model.reasoning}%</span>
                  </div>
                  <Progress value={model.reasoning} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Multimodal</span>
                    <span className="font-medium">{model.multimodal}%</span>
                  </div>
                  <Progress value={model.multimodal} className="h-2" />
                </div>
              </div>

              {/* Speed and Cost */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-slate-500" />
                  <Badge className={getSpeedColor(model.speed)}>{model.speed}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <Badge className={getCostColor(model.cost)}>{model.cost} Cost</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison Table */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Detailed Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Model</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Overall</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Coding</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Reasoning</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Multimodal</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Speed</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Cost</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-slate-900">{model.name}</p>
                        <p className="text-sm text-slate-600">{model.provider}</p>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 font-bold text-blue-600">{model.overall}%</td>
                    <td className="text-center py-4 px-4">{model.coding}%</td>
                    <td className="text-center py-4 px-4">{model.reasoning}%</td>
                    <td className="text-center py-4 px-4">{model.multimodal}%</td>
                    <td className="text-center py-4 px-4">
                      <Badge className={getSpeedColor(model.speed)}>{model.speed}</Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge className={getCostColor(model.cost)}>{model.cost}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
