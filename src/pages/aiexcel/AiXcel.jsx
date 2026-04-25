import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, CheckCircle2, Code, Download, ExternalLink, Layers, Map, Terminal, Users } from "lucide-react";
import whychoose from "@/assets/why-choose.webp"
import AIrobot from "@/assets/close-up-robot.webp"
import AI from "@/assets/AI.webp"
import Basic from "@/assets/high-angle-view-boy-using-laptop.webp"
import MasterCard from "@/assets/mastercard.webp"
import azureAI from "@/assets/azureAI.webp"
import bedRock from "@/assets/bedrock.webp"
import Colab from "@/assets/colab-color.webp"
import Python from "@/assets/python.webp"
import Tensor from "@/assets/tensor.webp"
import Registration from "@/assets/Registration-bg.webp"
import About from "@/assets/about-team.webp"
import Hero from "@/assets/hero-bg.webp"
import AILogo from "@/assets/Al.png"
import { Button } from "@/components/ui/button";

const AiXcel = () => {
    const features = [
        {
            title: "Industry-Relevant Skills",
            description: "Develop industry-relevant AI skills with a curriculum focused on practical, real-world use cases.",
            icon: <Layers className="w-6 h-6 text-orange-500" />,
        },
        {
            title: "Job-Ready Portfolio",
            description: "Build a job-ready portfolio, working on practical projects that reflect real business and industry challenges.",
            icon: <Briefcase className="w-6 h-6 text-orange-500" />,
        },
        {
            title: "Expert Mentorship",
            description: "Get mentored by practicing AI professionals, gaining insights, guidance, and best practices from the field.",
            icon: <Users className="w-6 h-6 text-orange-500" />,
        },
        {
            title: "Career Roadmap",
            description: "Advance with a clear AI career roadmap, helping you progress confidently from fundamentals to advanced expertise.",
            icon: <Map className="w-6 h-6 text-orange-500" />,
        },
    ];

    const logos = [
        { name: "Mastercard", src: MasterCard },
        { name: "Microsoft", src: azureAI },
        { name: "AI/ML", src: bedRock },
        { name: "Colab", src: Colab },
        { name: "Python", src: Python },
        { name: "TensorFlow", src: Tensor },
    ];

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfO0-P8tossGQ3kXQyEhbCE4pPuw75wAbIgqR4e1z-taNQqsA/viewform";
    return (
        <>
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden px-4 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Hero})` }}>
                      <div className="flex justify-start">
                        <img src={AILogo} alt="AI Logo" className="h-[100px] w-[100px]" />

                    </div>
                {/* Background Glow/Neural Effect */}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-0"></div>

                {/* Content Container */}
                <div className="relative z-10 max-w-4xl text-center space-y-8">
                  
                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/50 bg-black/40 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                            <span className="text-xs font-medium tracking-wider text-orange-400 uppercase">
                                Launching Soon!!
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Explore. Execute. <br />
                        <span className="text-orange-500">Excel with AI.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                        AIXcel is a premier AI Center of Excellence by XpertEaze, under enxcl
                        Business Solutions. We are dedicated to building future-ready AI talent through
                        immersive, hands-on learning.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-semibold text-black transition-transform hover:scale-105 flex items-center gap-2">
                            Start Your Journey
                            <span>→</span>
                        </button>

                        <button className="px-8 py-4 border border-gray-700 bg-black/20 backdrop-blur-md rounded-lg font-semibold text-white transition-all hover:bg-white/10">
                            View Programs
                        </button>
                    </div>

                </div>
            </div>
            <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content Column */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                                About Us
                            </h4>
                            <h2 className="text-[38px] font-bold text-black">
                                Igniting Intelligence
                            </h2>
                            <div className="w-16 h-1.5 bg-orange-500 rounded-full"></div>
                        </div>

                        <div className="space-y-4 text-black leading-relaxed">
                            <p>
                                AIXcel is a premier AI Center of Excellence by <span className="font-bold text-black">XpertEaze</span>,
                                under <span className="font-bold text-black">enxcl Business Solutions</span>,
                                dedicated to building future-ready AI talent.
                            </p>
                            <p>
                                Through immersive, hands-on learning, AIXcel supports learners at every stage,
                                from beginners to experienced professionals, and offers a clear pathway to
                                build, apply, and excel in Artificial Intelligence using real-world projects,
                                modern tools, and industry best practices.
                            </p>
                            <p>
                                We go beyond teaching AI to empower innovation, leadership, and
                                meaningful impact in an evolving digital world.
                            </p>
                        </div>
                    </div>

                    {/* Right Feature Card Column */}
                    <div className="relative">
                        {/* Subtle Orange Glow behind the card */}
                        <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-[2.5rem] opacity-50"></div>

                        {/* Card Container with Background Image */}
                        <div
                            className="relative rounded-3xl p-8 md:p-12 space-y-10 shadow-2xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${About})` }}
                        >
                            {/* Dark Shadow Overlay (Gradient) */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0"></div>

                            {/* Content - Ensure z-10 so it sits above the shadow */}
                            <div className="relative z-10 space-y-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-6 items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 backdrop-blur-sm">
                                            {feature.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-white text-xl font-bold">{feature.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="min-h-screen bg-[#F9FAFB] py-16 px-4 font-sans">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-[#D97706] font-bold uppercase tracking-[0.2em] text-sm mb-2">Our Programs</p>
                    <span className="text-[38px] font-bold text-black tracking-tight">
                        Tailored for Every Stage
                    </span>
                    <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid Container */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* CARD 1: ALXPLORE */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="relative h-44">
                            <img
                                src={Basic}
                                alt="Basic"
                                className="w-full h-full object-cover grayscale-[30%]"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="absolute top-4 left-4 bg-[#F59E0B] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded">
                                Basic
                            </span>
                        </div>
                        <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Alxplore</h2>
                            <div className="border border-gray-700 p-1.5 rounded">
                                <BookOpen size={18} className="text-[#D97706]" />
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Build a strong foundation in AI & Data Science fundamentals",
                                    "Gain hands-on experience with real-world data and practical projects",
                                    "Develop Machine Learning, Deep Learning, and Generative AI solutions",
                                    "Apply AI to industry use cases and deliver an end-to-end capstone project"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 size={18} className="text-[#D97706] mt-0.5 flex-shrink-0" />
                                        <p className="text-[13.5px] text-gray-600 leading-snug">{text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto space-y-4">
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Ideal For</h4>
                                    <p className="text-[13px] text-gray-500">Students, fresh graduates, beginners</p>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Tools</h4>
                                    <p className="text-[12px] italic text-gray-400 leading-relaxed">
                                        Python • NumPy • Pandas • Scikit-learn • TensorFlow • PyTorch • Matplotlib • Seaborn • Google Colab • AWS • Azure • Git & GitHub
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <h4 className="text-[11px] font-black uppercase text-[#D97706] tracking-wider mb-1">Outcome</h4>
                                    <p className="text-[14px] font-bold text-gray-900 leading-tight">Strong foundation in AI concepts and clarity on AI career paths</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: ALXECUTE */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="relative h-44">
                            <img
                                src={AI}
                                alt="Intermediate"
                                className="w-full h-full object-cover grayscale-[30%]"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="absolute top-4 left-4 bg-[#FBBF24] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded">
                                Intermediate
                            </span>
                        </div>
                        <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Alxecute</h2>
                            <div className="border border-gray-700 p-1.5 rounded">
                                <Code size={18} className="text-[#D97706]" />
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Apply advanced AI & ML techniques with strong mathematical and statistical foundations",
                                    "Build scalable deep learning models for NLP and Computer Vision use cases",
                                    "Work with the LLM ecosystem, including embeddings, vector databases, and RAG basics",
                                    "Deliver hands-on, industry-aligned projects using modern tools and workflows"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 size={18} className="text-[#D97706] mt-0.5 flex-shrink-0" />
                                        <p className="text-[13.5px] text-gray-600 leading-snug">{text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto space-y-4">
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Ideal For</h4>
                                    <p className="text-[13px] text-gray-500">Learners with basic AI knowledge, developers</p>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Tools</h4>
                                    <p className="text-[12px] italic text-gray-400 leading-relaxed">
                                        Advanced ML Frameworks • Cloud AI Services • Vector DBs • NLP Libraries
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <h4 className="text-[11px] font-black uppercase text-[#D97706] tracking-wider mb-1">Outcome</h4>
                                    <p className="text-[14px] font-bold text-gray-900 leading-tight">Practical experience in building and working with AI models</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: ALXPERT */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="relative h-44">
                            <img
                                src={AIrobot}
                                alt="Advanced"
                                className="w-full h-full object-cover grayscale-[30%]"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="absolute top-4 left-4 bg-[#FCD34D] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded">
                                Advanced
                            </span>
                        </div>
                        <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Alxpert</h2>
                            <div className="border border-gray-100/20 p-1.5 rounded">
                                <Terminal size={18} className="text-[#D97706]" />
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Master Large Language Models (LLMs), including prompt engineering, fine-tuning, and safety guardrails",
                                    "Design Agentic AI systems using LangGraph, ReAct workflows, and multi-agent architectures",
                                    "Build production-grade RAG pipelines with embeddings, vector databases, and optimization techniques",
                                    "Deliver an end-to-end GenAI capstone, integrating LLMs, Agents, and RAG"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 size={18} className="text-[#D97706] mt-0.5 flex-shrink-0" />
                                        <p className="text-[13.5px] text-gray-600 leading-snug">{text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto space-y-4">
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Ideal For</h4>
                                    <p className="text-[13px] text-gray-500">Professionals and experienced learners</p>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black uppercase text-gray-900 tracking-wider mb-1">Tools</h4>
                                    <p className="text-[12px] italic text-gray-400 leading-relaxed">
                                        LLMs • LangChain • LangGraph • RAG Pipelines • Multi-Agent Systems
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <h4 className="text-[11px] font-black uppercase text-[#D97706] tracking-wider mb-1">Outcome</h4>
                                    <p className="text-[14px] font-bold text-gray-900 leading-tight">Job-ready AI skills with portfolio-level projects</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <section className="w-full pt-12 px-4 bg-slate-50/50 flex flex-col items-center gap-10">
                    {/* Logos Container */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 ">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        ))}
                    </div>

                    {/* shadcn UI Button */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-[#FF9F1C] text-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white px-8 py-6 text-lg font-semibold transition-colors"
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Download Brochure
                    </Button>
                </section>
            </div>
            <div className="min-h-screen bg-black text-white p-8 md:p-16 lg:p-24 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Branding & Media */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-orange-500 font-semibold tracking-wide text-sm">
                                Why AIXcel?
                            </h4>
                            <span className="text-[38px] font-bold leading-tight">
                                We Don&apos;t Just Teach AI.<br />
                                <span className="text-gray-400">We Build Futures.</span>
                            </span>
                            <p className="text-gray-400 max-w-lg leading-relaxed">
                                At AIXcel, we bridge the gap between theoretical knowledge and practical application.
                                Our ecosystem is designed to nurture talent that isn&apos;t just &quot;certified&quot; but is
                                genuinely capable of driving innovation.
                            </p>
                        </div>

                        {/* Featured Image Placeholder */}
                        <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
                            <img
                                src={whychoose}
                                alt="AI Technology Visualization"
                                className="w-full object-cover aspect-video"
                            />
                            {/* Blue glow effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column: Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-[#121212] border-none hover:bg-[#1a1a1a] transition-colors duration-300">
                                <CardHeader className="pb-2">
                                    <div className="bg-[#1a1a1a] w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-white/5">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-white text-xl font-bold">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
            <section className="w-full py-16 px-4 bg-gray-50 flex justify-center items-center">
                <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">

                    {/* Left Image Section */}
                    <div className="relative w-full md:w-[45%] h-64 md:h-auto">
                        <img
                            src={Registration}
                            alt="Person using tablet"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark Overlay with Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Ready to Excel?</h3>
                            <p className="text-sm text-gray-200">
                                Join the community of next-gen AI leaders today.
                            </p>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
                        {/* Orange Accent Line */}
                        <div className="w-12 h-1 bg-[#FF9F1C] mb-6" />

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Register Your Interest
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-8">
                            Ready to take the next step? Fill out our registration form to secure your
                            spot in upcoming batches. Our team will review your application and get
                            back to you with the next steps.
                        </p>
                        <a
                            href={formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="w-fit bg-gradient-to-r from-[#FF9F1C] to-[#FFC371] hover:opacity-90 text-white font-bold py-6 px-8 rounded-lg shadow-lg transition-all"
                            >
                                Register via Google Forms
                                <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <p className="mt-8 text-[11px] text-gray-400 leading-tight italic">
                            *You will be redirected to an external Google Form to complete your secure registration.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AiXcel;