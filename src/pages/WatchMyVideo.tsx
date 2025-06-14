
import { Bot, Brain, Calendar, Code, Clock, Cpu, Download, FileText, MessageSquare, Mic, Network, Search, Target, User, Zap } from 'lucide-react';
import { AssistantHeader } from '../components/assistant/AssistantHeader';
import { AutomationFlow } from '../components/assistant/AutomationFlow';
import { SetupGuide } from '../components/assistant/SetupGuide';
import { TargetAudience } from '../components/assistant/TargetAudience';
import { UseCases } from '../components/assistant/UseCases';
import { EnterpriseSolutions } from '../components/assistant/EnterpriseSolutions';
import { FinalCTA } from '../components/assistant/FinalCTA';

const WatchMyVideo = () => {
  const features = [{
    icon: Mic,
    text: "Understands voice or text input from Telegram",
    gradient: "from-blue-400 to-cyan-400"
  }, {
    icon: Target,
    text: "Chooses the correct task (email, meeting, blog, search, contact)",
    gradient: "from-purple-400 to-pink-400"
  }, {
    icon: Zap,
    text: "Triggers prebuilt automation using LangChain + n8n tools",
    gradient: "from-yellow-400 to-orange-400"
  }, {
    icon: Bot,
    text: "Delivers results in Telegram with smart, contextual responses",
    gradient: "from-green-400 to-emerald-400"
  }, {
    icon: Clock,
    text: "Remembers conversations for multi-step workflows",
    gradient: "from-indigo-400 to-purple-400"
  }];

  const setupSteps = [{
    step: "Import the JSON into your n8n instance",
    icon: Download
  }, {
    step: "Connect your Telegram bot (instructions included in the guide)",
    icon: Bot
  }, {
    step: "Add your OpenAI API Key",
    icon: Brain
  }, {
    step: "Link your email, calendar, and contact workflows",
    icon: Network
  }, {
    step: "Customize behavior with simple prompt updates",
    icon: Code
  }, {
    step: "Test with your own text or voice messages in Telegram",
    icon: MessageSquare
  }];

  const targetAudience = ["A founder juggling ops, outreach, and scheduling", "A consultant who needs to respond fast and stay organized", "A creator or exec tired of jumping between inbox, calendar, and tasks", "Looking to delegate the repetitive without hiring more help"];

  const useCases = [{
    role: "Founder",
    icon: User,
    prompt: "Email Sarah to confirm tomorrow's pitch",
    result: "Looks up contact, sends email, replies with status",
    color: "from-blue-500/20 to-cyan-500/20"
  }, {
    role: "Executive Coach",
    icon: Calendar,
    prompt: "Book meeting with Josh at 2pm Friday",
    result: "Finds contact, adds to calendar, confirms back",
    color: "from-purple-500/20 to-pink-500/20"
  }, {
    role: "Content Marketer",
    icon: FileText,
    prompt: "Write a post about productivity hacks",
    result: "AI-generated blog post delivered via Telegram",
    color: "from-green-500/20 to-emerald-500/20"
  }, {
    role: "Business Analyst",
    icon: Search,
    prompt: "Summarize Apple's latest keynote",
    result: "Searches the web (via Tavily), sends concise summary",
    color: "from-orange-500/20 to-yellow-500/20"
  }];
  
  const tools = [{
    name: "n8n + OpenAI + LangChain",
    icon: Brain
  }, {
    name: "Telegram, Slack, WhatsApp",
    icon: MessageSquare
  }, {
    name: "CRM platforms, custom APIs, internal databases",
    icon: Network
  }, {
    name: "Voice agents, web search, analytics, and more",
    icon: Cpu
  }];

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <AssistantHeader />
      <AutomationFlow features={features} />
      <SetupGuide setupSteps={setupSteps} />
      <TargetAudience targetAudience={targetAudience} />
      <UseCases useCases={useCases} />
      <EnterpriseSolutions tools={tools} />
      <FinalCTA />
    </div>
  );
};
export default WatchMyVideo;
