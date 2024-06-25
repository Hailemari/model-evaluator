
import { 
  BarChart3, 
  Code, 
  FileText, 
  Search, 
  Settings,
  Brain,
  TrendingUp
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const menuItems = [
  {
    title: "Overview",
    icon: TrendingUp,
    key: "overview",
  },
  {
    title: "Model Comparison",
    icon: Brain,
    key: "models",
  },
  {
    title: "Response Evaluation",
    icon: FileText,
    key: "evaluation",
  },
  {
    title: "Data Insights",
    icon: BarChart3,
    key: "insights",
  },
  {
    title: "Code Quality",
    icon: Code,
    key: "code",
  },
];

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">AI Evaluator</h2>
            <p className="text-sm text-slate-600">Model Analysis Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => setActiveView(item.key)}
                    className={`w-full transition-colors ${
                      activeView === item.key 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-slate-200">
        <div className="text-xs text-slate-500 text-center">
          <p>Built for Turing Assessment</p>
          <p className="font-semibold">AI Model Evaluation Suite</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
