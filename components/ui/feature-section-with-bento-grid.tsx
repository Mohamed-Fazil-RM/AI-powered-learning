import React from "react";
import { 
  Calendar, 
  Zap, 
  Plus, 
  Slack,
  HeartPulse,
  Activity
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "./card";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { BentoGridShowcase } from "./bento-grid";

const IntegrationsCard = () => (
  <Card className="h-full rounded-[2rem] border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <CardHeader>
      <CardTitle className="text-xl font-bold">Integrations</CardTitle>
      <CardDescription className="text-sm font-medium">
        Easily integrations of third party apps.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4 py-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400">
        <Calendar size={20} />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400">
        <Slack size={20} />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400">
        <Zap size={20} />
      </div>
    </CardContent>
  </Card>
);

const FeatureTagsCard = () => (
  <Card className="h-full rounded-[2rem] border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="flex h-full flex-col justify-center gap-3 p-8">
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-200 py-1.5 px-4 text-purple-600 font-bold"
      >
        Innovative <Plus className="h-3 w-3" />
      </Badge>
      <Badge
        variant="secondary"
        className="w-fit items-center gap-1.5 bg-purple-100 py-1.5 px-4 text-purple-700 font-bold hover:bg-purple-200"
      >
        Revolutionary
      </Badge>
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-200 py-1.5 px-4 text-purple-600 font-bold"
      >
        Empowering <Plus className="h-3 w-3" />
      </Badge>
    </CardContent>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden rounded-[2rem] border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="absolute top-8 left-8 z-10 rounded-xl bg-white/90 backdrop-blur-md px-4 py-2 border border-white/20">
      <p className="text-xl font-bold tracking-tighter text-gray-900">Learn. Live.</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
      alt="Students collaborating"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
  </Card>
);

const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-[#EEFADC] border-0 p-8 rounded-[2rem] group hover:shadow-lg transition-all overflow-hidden relative">
    <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
    <Activity className="h-10 w-10 text-[#4A7212] mb-4 relative z-10" />
    <div className="relative z-10">
      <p className="text-7xl font-black text-[#2D4A06] font-display tracking-tighter leading-none mb-4 group-hover:scale-110 transition-transform origin-left">95%</p>
      <p className="text-sm text-[#5C8A1B] font-bold leading-relaxed max-w-[220px]">
        Student retention and satisfaction with LearnEzily AI adaptive platforms.
      </p>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden rounded-[2rem] border-gray-100 group shadow-sm">
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
      alt="Close-up of student studying"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent" />
    <p className="absolute bottom-6 left-6 z-10 max-w-[85%] text-xl font-bold text-white [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)] leading-tight">
      Small modules, big impact on the way!
    </p>
  </Card>
);

const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-8 rounded-[2rem] border-gray-100 shadow-sm">
    <CardTitle className="text-xl font-bold mb-1">Weekly Journey</CardTitle>
    <CardDescription className="text-sm font-medium mb-6">
      Adaptive path mapping within 02-03 Weeks.
    </CardDescription>
    <div className="absolute -right-4 -bottom-4 h-32 w-48">
      <div className="absolute top-4 left-16 z-20">
        <Avatar className="h-12 w-12 border-4 border-white shadow-xl">
          <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute top-14 left-4 z-10">
        <Avatar className="h-12 w-12 border-4 border-white shadow-xl">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </Card>
);

export function Feature() {
  return (
    <section id="features" className="w-full py-24 bg-[#F5F5F0]">
      <div className="mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px]">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-gray-900">
            Powerful AI Infrastructure
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Full range of solutions to effectively enhance your learning growth.
          </p>
        </div>

        <BentoGridShowcase
          integrations={<IntegrationsCard />}
          featureTags={<FeatureTagsCard />}
          mainFeature={<MainFeatureCard />}
          secondaryFeature={<SecondaryFeatureCard />}
          statistic={<StatCard />}
          journey={<JourneyCard />}
        />
      </div>
    </section>
  );
}