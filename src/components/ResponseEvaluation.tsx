
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Star,
  MessageSquare,
  Clock,
  User
} from "lucide-react";

export function ResponseEvaluation() {
  const evaluations = [
    {
      id: 1,
      model: "GPT-4-Turbo",
      prompt: "Write a Python function to implement binary search",
      response: "Here's an efficient binary search implementation...",
      rating: 4.8,
      category: "Code Generation",
      evaluator: "John Smith",
      timestamp: "2 hours ago",
      feedback: "Excellent implementation with proper error handling"
    },
    {
      id: 2,
      model: "Claude-3-Opus", 
      prompt: "Explain quantum computing principles",
      response: "Quantum computing leverages quantum mechanical phenomena...",
      rating: 4.6,
      category: "Technical Explanation",
      evaluator: "Sarah Johnson",
      timestamp: "4 hours ago",
      feedback: "Clear explanation but could use more examples"
    },
    {
      id: 3,
      model: "Gemini-Pro",
      prompt: "Debug this React component",
      response: "I can see several issues in your component...",
      rating: 4.2,
      category: "Code Review",
      evaluator: "Mike Chen",
      timestamp: "6 hours ago",
      feedback: "Good debugging but missed one edge case"
    }
  ];

  const categories = [
    { name: "Code Generation", count: 45, avgScore: 4.7 },
    { name: "Technical Explanation", count: 32, avgScore: 4.5 },
    { name: "Code Review", count: 28, avgScore: 4.3 },
    { name: "Problem Solving", count: 25, avgScore: 4.6 },
    { name: "Documentation", count: 18, avgScore: 4.4 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Response Evaluation</h1>
          <p className="text-slate-600 mt-2">Detailed analysis of AI model responses and quality assessment</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MessageSquare className="w-4 h-4 mr-2" />
          New Evaluation
        </Button>
      </div>

      {/* Category Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="border-slate-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 text-sm">{category.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">{category.count}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-slate-600">{category.avgScore}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Evaluations */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Recent Evaluations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {evaluations.map((evaluation) => (
              <div key={evaluation.id} className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {evaluation.model}
                      </Badge>
                      <Badge variant="secondary">
                        {evaluation.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Prompt:</h3>
                    <p className="text-slate-700 mb-3">{evaluation.prompt}</p>
                    <h3 className="font-semibold text-slate-900 mb-2">Response:</h3>
                    <p className="text-slate-700 bg-slate-50 p-3 rounded border">{evaluation.response}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-slate-900">{evaluation.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{evaluation.evaluator}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{evaluation.timestamp}</span>
                    </div>
                  </div>
                </div>

                {evaluation.feedback && (
                  <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Feedback:</strong> {evaluation.feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
