
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ModelComparison } from "@/components/ModelComparison";
import { ResponseEvaluation } from "@/components/ResponseEvaluation";
import { DataInsights } from "@/components/DataInsights";
import { CodeQuality } from "@/components/CodeQuality";
import { Overview } from "@/components/Overview";

const Index = () => {
  const [activeView, setActiveView] = useState('overview');

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return <Overview />;
      case 'models':
        return <ModelComparison />;
      case 'evaluation':
        return <ResponseEvaluation />;
      case 'insights':
        return <DataInsights />;
      case 'code':
        return <CodeQuality />;
      default:
        return <Overview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <AppSidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
