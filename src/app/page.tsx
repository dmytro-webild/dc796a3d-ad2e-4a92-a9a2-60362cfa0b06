"use client";

import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureBento, { type FeatureCard } from "@/components/sections/feature/FeatureBento";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Bot, Brain, Sparkles, User, Code, Database, Workflow, Settings, Search, FileText, Send, CheckCircle, Zap, MessageSquare, CreditCard, Star, HelpCircle, Mail, Activity, Shield, Clock, BarChart3, Layers, GitBranch, Lock, Eye } from "lucide-react";

export default function AIAgentsTemplatePage() {
    const navItems = [
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Docs", id: "docs" },
        { name: "Contact", id: "contact" },
    ];

    const features: FeatureCard[] = [
        {
            bentoComponent: "3d-task-list",
            title: "Agent Tasks",
            items: [
                { icon: Search, label: "Research competitors", time: "2m ago" },
                { icon: FileText, label: "Analyze market data", time: "5m ago" },
                { icon: CheckCircle, label: "Generate report", time: "8m ago" },
                { icon: Send, label: "Send to stakeholders", time: "10m ago" },
            ],
            description: "Agents break down complex goals into manageable tasks and execute them autonomously.",
        },
        {
            bentoComponent: "chat",
            aiIcon: Bot,
            userIcon: User,
            exchanges: [
                { userMessage: "Summarize our Q4 sales data", aiResponse: "Q4 revenue was $2.4M, up 23% from Q3. Top performer: Enterprise tier." },
                { userMessage: "What about customer retention?", aiResponse: "Retention rate improved to 94%, with churn down 12% quarter-over-quarter." },
            ],
            placeholder: "Ask your agent anything...",
            title: "Natural Conversations",
            description: "Interact with your agents through natural language. They understand context and intent.",
        },
        {
            bentoComponent: "3d-card-grid",
            items: [
                { name: "Code", icon: Code },
                { name: "Data", icon: Database },
                { name: "Workflow", icon: Workflow },
                { name: "Config", icon: Settings },
            ],
            centerIcon: Brain,
            title: "Tool Integration",
            description: "Connect agents to your existing tools and let them take action across your entire stack.",
        },
    ];

    const testimonials = [
        {
            id: "1",
            name: "Sarah Chen",
            handle: "CTO at DataFlow",
            testimonial: "AgentFlow cut our data processing time by 80%. The agents handle complex workflows that used to require a team of engineers.",
            imageSrc: "/templates/luxury-travel-agency/testimonial/testimonial1.webp",
            imageAlt: "Sarah Chen",
        },
        {
            id: "2",
            name: "Marcus Rodriguez",
            handle: "VP Engineering at ScaleUp",
            testimonial: "We deployed 50 agents in production within a week. The reliability and observability tools are exceptional.",
            imageSrc: "/templates/luxury-travel-agency/testimonial/testimonial2.webp",
            imageAlt: "Marcus Rodriguez",
        },
        {
            id: "3",
            name: "Emily Watson",
            handle: "Head of AI at TechCorp",
            testimonial: "Finally, an AI platform that lets us build agents that actually work in production. The tool integration is seamless.",
            imageSrc: "/templates/luxury-travel-agency/testimonial/testimonial3.webp",
            imageAlt: "Emily Watson",
        },
        {
            id: "4",
            name: "Maria Park",
            handle: "Founder at AutomateAI",
            testimonial: "AgentFlow's natural language interface means our non-technical team can now build and deploy their own agents.",
            imageSrc: "/templates/skincare/image5.avif",
            imageAlt: "Maria Park",
        },
        {
            id: "5",
            name: "Lisa Thompson",
            handle: "Director of Ops at CloudScale",
            testimonial: "The enterprise security features gave us confidence to deploy agents handling sensitive customer data.",
            imageSrc: "/templates/skincare/image6.avif",
            imageAlt: "Lisa Thompson",
        },
        {
            id: "6",
            name: "Daniella Kim",
            handle: "Lead Engineer at Nexus",
            testimonial: "We went from manual reporting to fully automated insights in days. Our agents now handle what took us hours.",
            imageSrc: "/templates/skincare/image7.avif",
            imageAlt: "Daniella Kim",
        },
    ];

    const pricingPlans = [
        {
            id: "starter",
            price: "$29/mo",
            name: "Starter",
            buttons: [{ text: "Get Started", href: "#" }],
            features: [
                "3 active agents",
                "5,000 agent runs/month",
                "Basic integrations",
                "Community support",
                "7-day log retention",
            ],
        },
        {
            id: "pro",
            price: "$99/mo",
            name: "Professional",
            buttons: [{ text: "Get Started", href: "#" }],
            features: [
                "15 active agents",
                "50,000 agent runs/month",
                "All integrations",
                "Email support",
                "30-day log retention",
            ],
        },
        {
            id: "business",
            badge: "Most Popular",
            badgeIcon: Star,
            price: "$299/mo",
            name: "Business",
            buttons: [{ text: "Get Started", href: "#" }],
            features: [
                "50 active agents",
                "250,000 agent runs/month",
                "Custom integrations",
                "Priority support",
                "90-day log retention",
            ],
        },
        {
            id: "enterprise",
            price: "Custom",
            name: "Enterprise",
            buttons: [{ text: "Contact Sales", href: "#" }],
            features: [
                "Unlimited agents",
                "Unlimited agent runs",
                "Dedicated integrations",
                "24/7 dedicated support",
                "Unlimited log retention",
            ],
        },
    ];

    const faqs = [
        {
            id: "1",
            title: "What are AI agents and how do they work?",
            content: "AI agents are autonomous software programs that can reason, plan, and execute tasks on your behalf. They use large language models combined with tool integrations to understand goals, break them into steps, and take action across your systems.",
        },
        {
            id: "2",
            title: "How long does it take to set up my first agent?",
            content: "Most users have their first agent running within 15 minutes. Our intuitive interface and pre-built templates make it easy to get started, and our documentation covers everything from basic setup to advanced configurations.",
        },
        {
            id: "3",
            title: "What integrations are available?",
            content: "AgentFlow connects with 100+ popular tools including Slack, GitHub, Jira, Salesforce, Google Workspace, and more. We also provide APIs and SDKs for custom integrations with your internal systems.",
        },
        {
            id: "4",
            title: "Is my data secure with AgentFlow?",
            content: "Security is our top priority. We're SOC 2 Type II certified, use end-to-end encryption, and never train on your data. Enterprise plans include additional features like SSO, audit logs, and dedicated infrastructure.",
        },
        {
            id: "5",
            title: "Can I control what actions agents can take?",
            content: "Yes, you have full control over agent permissions. Set granular access controls, require approvals for sensitive actions, and monitor all agent activity in real-time through our dashboard.",
        },
        {
            id: "6",
            title: "What happens if I exceed my plan limits?",
            content: "We'll notify you when you're approaching your limits. You can upgrade anytime, and we offer flexible overage pricing so your agents won't stop working unexpectedly.",
        },
    ];

    const footerColumns = [
        {
            title: "Product",
            items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Integrations", href: "#" },
                { label: "Changelog", href: "#" },
            ],
        },
        {
            title: "Resources",
            items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Tutorials", href: "#" },
                { label: "Blog", href: "#" },
            ],
        },
        {
            title: "Company",
            items: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Press", href: "#" },
            ],
        },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="background-highlight"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="gradient-bordered"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="layered"
            headingFontWeight="semibold"
        >
            <NavbarStyleFullscreen
                navItems={navItems}
                brandName="AgentFlow"
                bottomLeftText="Build Smarter"
                bottomRightText="hello@agentflow.ai"
            />
            <HeroBillboardDashboard
                background={{ variant: "canvas-reveal" }}
                tag="AI Agents Platform"
                tagIcon={Bot}
                title="Build Autonomous AI Agents That Actually Work"
                description="Deploy intelligent agents that can reason, use tools, and collaborate to automate your most complex workflows."
                buttons={[
                    { text: "Get Started", href: "#" },
                    { text: "Learn More", href: "#" },
                ]}
                dashboard={{
                    title: "Agent Control Center",
                    logoIcon: Bot,
                    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                    imageAlt: "Operator avatar",
                    buttons: [
                        { text: "Deploy Agent", href: "#" },
                        { text: "View Logs", href: "#" },
                    ],
                    sidebarItems: [
                        { icon: Activity, active: true },
                        { icon: Brain },
                        { icon: Database },
                        { icon: Workflow },
                        { icon: Settings },
                    ],
                    stats: [
                        {
                            title: "Active Agents",
                            values: [47, 52, 49],
                            description: "Autonomous agents currently running across all workflows.",
                        },
                        {
                            title: "Tasks Completed",
                            values: [12840, 15230, 14100],
                            description: "Total tasks executed by agents in the current billing cycle.",
                        },
                        {
                            title: "Avg Response Time",
                            values: [84, 72, 91],
                            valueSuffix: "ms",
                            description: "Mean latency across all agent tool calls and reasoning steps.",
                        },
                    ],
                    chartTitle: "Agent Runs (24h)",
                    chartData: [
                        { value: 120 },
                        { value: 85 },
                        { value: 140 },
                        { value: 95 },
                        { value: 170 },
                        { value: 130 },
                        { value: 155 },
                        { value: 110 },
                    ],
                    listTitle: "Recent Agent Activity",
                    listItems: [
                        { icon: CheckCircle, title: "Report generated: Q4 Sales", status: "Completed" },
                        { icon: Search, title: "Web research: competitor pricing", status: "Running" },
                        { icon: Send, title: "Email drafted: client follow-up", status: "Completed" },
                        { icon: Code, title: "Code review: PR #247", status: "Running" },
                        { icon: FileText, title: "Contract summarized: NDA v3", status: "Completed" },
                        { icon: Database, title: "Data sync: CRM → warehouse", status: "Running" },
                        { icon: Shield, title: "Security scan: api-gateway", status: "Completed" },
                        { icon: BarChart3, title: "Dashboard updated: KPIs", status: "Completed" },
                        { icon: Clock, title: "Scheduled: weekly digest", status: "Pending" },
                        { icon: Brain, title: "Model fine-tune: support-v2", status: "Running" },
                    ],
                }}
            />
            <div id="features">
                <FeatureBento
                    features={features}
                    animationType="slide-up"
                    tag="Capabilities"
                    tagIcon={Sparkles}
                    title="Everything You Need to Build AI Agents"
                    description="From task automation to natural conversations, our platform provides the tools to create intelligent agents."
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
            </div>
            <FeatureHoverPattern
                animationType="slide-up"
                tag="Core Platform"
                tagIcon={Layers}
                title="Built for Production, Not Just Prototypes"
                description="Every feature is designed for reliability, security, and scale — so your agents perform in the real world."
                textboxLayout="default"
                useInvertedBackground={false}
                features={[
                    {
                        icon: GitBranch,
                        title: "Version Control",
                        description: "Track every change to your agent logic with built-in versioning. Roll back instantly if something goes wrong.",
                    },
                    {
                        icon: Shield,
                        title: "Enterprise Security",
                        description: "SOC 2 compliant with end-to-end encryption, SSO, and granular role-based access controls for every agent.",
                    },
                    {
                        icon: Eye,
                        title: "Full Observability",
                        description: "Monitor every reasoning step, tool call, and decision your agents make with real-time logs and tracing.",
                    },
                    {
                        icon: Lock,
                        title: "Permission Guards",
                        description: "Define exactly what each agent can access and do. Require human approval for sensitive or irreversible actions.",
                    },
                ]}
            />
            <MetricSplitMediaAbout
                tag="Why AgentFlow"
                tagIcon={Zap}
                title="Infrastructure Built for Enterprise Scale and Speed"
                description="Our battle-tested infrastructure handles millions of agent runs daily across organizations of all sizes. With enterprise-grade reliability, SOC 2 compliance, and end-to-end encryption built in from day one, you can deploy with confidence knowing your agents and data are secure."
                metrics={[
                    { value: "99.9%", title: "Uptime SLA" },
                    { value: "<100ms", title: "Average Response Time" },
                ]}
                imageSrc="/templates/ai-agents/image1.webp"
                imageAlt="AgentFlow Dashboard"
                mediaAnimation="slide-up"
                metricsAnimation="slide-up"
                useInvertedBackground={false}
            />
            <TestimonialCardSix
                testimonials={testimonials}
                animationType="slide-up"
                tag="Testimonials"
                tagIcon={MessageSquare}
                title="Trusted by Engineering Teams Worldwide"
                description="Join thousands of companies using AgentFlow to automate their most complex workflows and unlock new levels of productivity."
                textboxLayout="default"
                useInvertedBackground={false}
            />
            <div id="pricing">
                <PricingCardThree
                    plans={pricingPlans}
                    animationType="slide-up"
                    tag="Pricing"
                    tagIcon={CreditCard}
                    title="Simple, Transparent Pricing for Every Team"
                    description="Start building agents today with our flexible pricing plans. Scale as you grow with no hidden fees or surprise charges."
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
            </div>
            <FaqDouble
                faqs={faqs}
                tag="FAQ"
                tagIcon={HelpCircle}
                title="Frequently Asked Questions"
                description="Everything you need to know about AgentFlow. Can't find the answer you're looking for? Reach out to our support team."
                textboxLayout="default"
                faqsAnimation="slide-up"
                useInvertedBackground={false}
            />
            <div id="contact">
                <ContactCTA
                    tag="Get Started"
                    tagIcon={Mail}
                    title="Ready to Build Your First AI Agent?"
                    description="Join thousands of teams using AgentFlow to automate their workflows and unlock new levels of productivity. Start your free trial today."
                    buttons={[
                        { text: "Start Free Trial", href: "#" },
                        { text: "Talk to Sales", href: "#" },
                    ]}
                    background={{ variant: "canvas-reveal" }}
                    useInvertedBackground={false}
                />
            </div>
            <FooterBaseCard
                logoText="AgentFlow"
                columns={footerColumns}
                copyrightText="© 2025 AgentFlow. All rights reserved."
            />
        </ThemeProvider>
    );
}
