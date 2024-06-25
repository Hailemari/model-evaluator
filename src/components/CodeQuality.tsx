
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, GitBranch, Bug, Shield, Zap, CheckCircle, AlertTriangle } from "lucide-react";

export function CodeQuality() {
  const codeMetrics = {
    overall: 94.1,
    maintainability: 92,
    reliability: 96,
    security: 91,
    performance: 95,
    coverage: 88
  };

  const recentAnalysis = [
    {
      file: "model_evaluator.py",
      score: 96,
      issues: 2,
      suggestions: 3,
      lines: 245,
      complexity: "Low",
      status: "Excellent"
    },
    {
      file: "data_processor.py",
      score: 91,
      issues: 5,
      suggestions: 7,
      lines: 189,
      complexity: "Medium",
      status: "Good"
    },
    {
      file: "ai_model_wrapper.py",
      score: 89,
      issues: 8,
      suggestions: 12,
      lines: 312,
      complexity: "Medium",
      status: "Good"
    },
    {
      file: "evaluation_pipeline.py",
      score: 93,
      issues: 4,
      suggestions: 6,
      lines: 198,
      complexity: "Low",
      status: "Very Good"
    }
  ];

  const qualityRules = [
    {
      category: "Documentation",
      rules: [
        { name: "Function docstrings", status: "passing", count: 47 },
        { name: "Type annotations", status: "passing", count: 52 },
        { name: "README completeness", status: "warning", count: 1 },
      ]
    },
    {
      category: "Code Style",
      rules: [
        { name: "PEP 8 compliance", status: "passing", count: 98 },
        { name: "Naming conventions", status: "passing", count: 156 },
        { name: "Line length", status: "warning", count: 3 },
      ]
    },
    {
      category: "Best Practices",
      rules: [
        { name: "Error handling", status: "passing", count: 23 },
        { name: "Code duplication", status: "passing", count: 0 },
        { name: "Security patterns", status: "error", count: 2 },
      ]
    }
  ];

  const testCoverage = [
    { module: "Model Evaluation", coverage: 94, tests: 28 },
    { module: "Data Processing", coverage: 87, tests: 19 },
    { module: "API Handlers", coverage: 91, tests: 22 },
    { module: "Utils", coverage: 96, tests: 15 },
    { module: "Config", coverage: 78, tests: 8 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passing": return "bg-green-100 text-green-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "passing": return <CheckCircle className="w-4 h-4" />;
      case "warning": return <AlertTriangle className="w-4 h-4" />;
      case "error": return <Bug className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Code Quality Assessment</h1>
          <p className="text-slate-600 mt-2">Comprehensive analysis of code quality, maintainability, and best practices</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <GitBranch className="w-4 h-4 mr-2" />
          Run Analysis
        </Button>
      </div>

      {/* Overall Score */}
      <Card className="border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Overall Code Quality Score</h2>
              <p className="text-slate-600">Based on industry standards and best practices</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-600 mb-2">{codeMetrics.overall}</div>
              <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">Excellent</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Code className="w-5 h-5 text-blue-600" />
              <span>Maintainability</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">{codeMetrics.maintainability}%</span>
              <Badge className="bg-blue-100 text-blue-800">A+</Badge>
            </div>
            <Progress value={codeMetrics.maintainability} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Reliability</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">{codeMetrics.reliability}%</span>
              <Badge className="bg-green-100 text-green-800">A+</Badge>
            </div>
            <Progress value={codeMetrics.reliability} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Zap className="w-5 h-5 text-purple-600" />
              <span>Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">{codeMetrics.performance}%</span>
              <Badge className="bg-purple-100 text-purple-800">A+</Badge>
            </div>
            <Progress value={codeMetrics.performance} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Shield className="w-5 h-5 text-red-600" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">{codeMetrics.security}%</span>
              <Badge className="bg-yellow-100 text-yellow-800">A</Badge>
            </div>
            <Progress value={codeMetrics.security} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Test Coverage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">{codeMetrics.coverage}%</span>
              <Badge className="bg-emerald-100 text-emerald-800">B+</Badge>
            </div>
            <Progress value={codeMetrics.coverage} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Bug className="w-5 h-5 text-slate-600" />
              <span>Issues Found</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900">19</span>
              <Badge className="bg-slate-100 text-slate-800">Total</Badge>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-red-600">Critical: 2</span>
                <span className="text-yellow-600">Medium: 8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Low: 9</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Analysis */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-indigo-600" />
            <span>Recent File Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">File</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Score</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Issues</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Lines</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Complexity</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAnalysis.map((file, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-slate-500" />
                        <span className="font-mono text-sm">{file.file}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 font-bold text-indigo-600">{file.score}%</td>
                    <td className="text-center py-4 px-4">{file.issues}</td>
                    <td className="text-center py-4 px-4 text-slate-600">{file.lines}</td>
                    <td className="text-center py-4 px-4">
                      <Badge 
                        className={
                          file.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                          file.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }
                      >
                        {file.complexity}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge 
                        className={
                          file.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                          file.status === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {file.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quality Rules and Test Coverage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Quality Rules Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {qualityRules.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-slate-900 mb-3">{category.category}</h4>
                <div className="space-y-2">
                  {category.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">{rule.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(rule.status)}>
                          {getStatusIcon(rule.status)}
                          <span className="ml-1">{rule.count}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Test Coverage by Module</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {testCoverage.map((module, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-900">{module.module}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">{module.tests} tests</span>
                    <span className="text-sm font-bold text-slate-900">{module.coverage}%</span>
                  </div>
                </div>
                <Progress value={module.coverage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
