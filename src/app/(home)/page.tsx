import { ArrowRight, Blocks, BookOpen, Code, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive API Docs',
    description: 'Clear, well-structured documentation for all endpoints with code examples in multiple languages.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on Next.js with optimized performance for instant page loads and smooth navigation.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Bearer token authentication with scoped API keys for granular access control.',
  },
  {
    icon: Code,
    title: 'Multi-language Examples',
    description: 'Code snippets in cURL, JavaScript, Python, and PHP ready to copy and use.',
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Full CRUD operations for managing students, teachers, classes, and grades.',
  },
  {
    icon: Blocks,
    title: 'RESTful Design',
    description: 'Clean, intuitive REST API following industry best practices and conventions.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fd-primary/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-fd-primary/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fd-primary/10 border border-fd-primary/20 text-fd-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fd-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fd-primary"></span>
            </span>
            v1.0 Now Available
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
              Build with the
            </span>
            <br />
            <span className="bg-gradient-to-r from-fd-primary via-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
              EduCare API
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-10">
            A powerful education management API for developers. Manage students, teachers, classes, grades, and attendance with a simple, RESTful interface.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-fd-primary text-fd-primary-foreground font-semibold shadow-lg shadow-fd-primary/25 hover:shadow-fd-primary/40 hover:scale-105 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/docs/getting-started/quickstart"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-fd-muted text-fd-foreground font-semibold hover:bg-fd-accent transition-colors border border-fd-border"
            >
              Quick Start Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fd-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fd-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-fd-primary/10 via-transparent to-fd-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fd-primary/10 border border-fd-primary/20 text-fd-primary text-sm font-medium mb-6">
              <Blocks className="w-4 h-4" />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
                Everything you need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-fd-primary via-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
                build education apps
              </span>
            </h2>
            <p className="text-fd-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              The EduCare API provides a complete set of tools for managing educational institutions.
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = index === 0 || index === 3;
              const gradients = [
                'from-emerald-500/20 via-teal-500/10 to-transparent',
                'from-amber-500/20 via-orange-500/10 to-transparent',
                'from-blue-500/20 via-indigo-500/10 to-transparent',
                'from-purple-500/20 via-pink-500/10 to-transparent',
                'from-rose-500/20 via-red-500/10 to-transparent',
                'from-cyan-500/20 via-sky-500/10 to-transparent',
              ];
              const iconColors = [
                'from-emerald-500 to-teal-500',
                'from-amber-500 to-orange-500',
                'from-blue-500 to-indigo-500',
                'from-purple-500 to-pink-500',
                'from-rose-500 to-red-500',
                'from-cyan-500 to-sky-500',
              ];
              
              return (
                <div
                  key={feature.title}
                  className={`group relative p-6 lg:p-8 rounded-3xl bg-fd-background/80 backdrop-blur-sm border border-fd-border/50 hover:border-fd-primary/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                    isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating accent orb */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${gradients[index]} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-150`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${iconColors[index]} mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title with arrow indicator */}
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl lg:text-2xl font-bold">{feature.title}</h3>
                      <ArrowRight className="w-5 h-5 text-fd-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-fd-muted-foreground leading-relaxed">{feature.description}</p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute -bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r ${iconColors[index]} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background mesh gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fd-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fd-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fd-muted border border-fd-border text-sm font-medium mb-6">
                <Code className="w-4 h-4 text-fd-primary" />
                Developer Experience
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
                  Simple, intuitive
                </span>
                <br />
                <span className="text-fd-primary">API design</span>
              </h2>

              <p className="text-fd-muted-foreground text-lg mb-8 leading-relaxed">
                Get up and running in minutes with our clean, RESTful API design. Authenticate with a simple Bearer token and start making requests.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: '01', text: 'Bearer token auth' },
                  { num: '02', text: 'JSON format' },
                  { num: '03', text: 'Error handling' },
                  { num: '04', text: 'Pagination' },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-fd-muted/50 border border-fd-border/50 hover:border-fd-primary/30 hover:bg-fd-muted transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-fd-primary/10 text-fd-primary text-xs font-bold group-hover:bg-fd-primary group-hover:text-fd-primary-foreground transition-colors">
                      {item.num}
                    </span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/docs/getting-started/authentication"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-fd-primary/10 text-fd-primary font-semibold hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-300"
              >
                Learn about authentication
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            
            {/* Right - Code Terminal */}
            <div className="order-1 lg:order-2 relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-fd-primary/30 to-fd-primary/5 rounded-2xl blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-fd-primary/20 to-transparent rounded-full blur-2xl" />
              
              {/* Floating badge */}
              <div className="absolute -top-4 right-8 z-20 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                200 OK
              </div>

              {/* Main terminal card */}
              <div className="relative bg-fd-background/95 backdrop-blur-xl border border-fd-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-fd-primary/10">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-fd-muted/80 to-fd-muted/40 border-b border-fd-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-fd-background/50 border border-fd-border/50">
                    <Zap className="w-3 h-3 text-fd-primary" />
                    <span className="text-xs text-fd-muted-foreground font-mono">api.educare.com</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6">
                  <div className="font-mono text-sm leading-relaxed">
                    {/* Request */}
                    <div className="mb-4">
                      <span className="text-fd-muted-foreground text-xs uppercase tracking-wider">Request</span>
                    </div>
                    <div className="flex items-start gap-3 mb-6">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-xs font-bold">GET</span>
                      <code className="text-fd-foreground">/v1/students</code>
                    </div>

                    {/* Headers */}
                    <div className="p-4 rounded-xl bg-fd-muted/30 border border-fd-border/30 mb-4">
                      <div className="text-fd-muted-foreground text-xs mb-2">Headers</div>
                      <div className="space-y-1">
                        <div>
                          <span className="text-purple-400">Authorization</span>
                          <span className="text-fd-muted-foreground">: </span>
                          <span className="text-green-400">Bearer eyJhbGc...</span>
                        </div>
                        <div>
                          <span className="text-purple-400">Content-Type</span>
                          <span className="text-fd-muted-foreground">: </span>
                          <span className="text-green-400">application/json</span>
                        </div>
                      </div>
                    </div>

                    {/* Response preview */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-fd-primary/5 to-transparent border border-fd-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-fd-muted-foreground text-xs">Response</span>
                        <span className="text-xs text-green-500">42ms</span>
                      </div>
                      <code className="text-fd-muted-foreground">
                        {'{'} <span className="text-purple-400">&quot;data&quot;</span>: [...], <span className="text-purple-400">&quot;count&quot;</span>: <span className="text-amber-400">156</span> {'}'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background - using solid primary for consistent appearance */}
        <div className="absolute inset-0 bg-fd-primary" />
        
        {/* Animated gradient orbs - adjusted for dark mode visibility */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fd-primary-foreground/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fd-primary-foreground/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: '10k+', label: 'API Calls Daily' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<50ms', label: 'Avg Response' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-6 py-4 rounded-2xl bg-fd-primary-foreground/10 backdrop-blur-sm border border-fd-primary-foreground/20"
                >
                  <div className="text-3xl md:text-4xl font-black text-fd-primary-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-fd-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-fd-primary-foreground mb-6 tracking-tight">
                Ready to get started?
              </h2>
              <p className="text-fd-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Join thousands of developers building the future of education. Explore our documentation and start building your platform today.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-fd-primary-foreground text-fd-primary font-bold text-lg shadow-2xl shadow-fd-primary/30 hover:shadow-fd-primary/50 hover:scale-105 transition-all duration-300"
                >
                  Read the Documentation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/docs/getting-started/quickstart"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-fd-primary-foreground/10 backdrop-blur-sm text-fd-primary-foreground font-bold text-lg border border-fd-primary-foreground/30 hover:bg-fd-primary-foreground/20 hover:scale-105 transition-all duration-300"
                >
                  Quick Start Guide
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-fd-primary-foreground/20 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-fd-primary-foreground/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 right-20 w-8 h-8 bg-fd-primary-foreground/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-fd-border bg-fd-background">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fd-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fd-primary to-fd-primary/70 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">EduCare</span>
              </div>
              <p className="text-fd-muted-foreground text-sm max-w-xs mb-4">
                A powerful education management API for developers building the future of learning.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2.5">
                {['Getting Started', 'Authentication', 'API Reference', 'Examples'].map((link) => (
                  <li key={link}>
                    <Link href="/docs" className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {['Changelog', 'Support', 'Status'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-fd-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-fd-muted-foreground">
              © 2026 EduCare. Built with{' '}
              <a href="https://fumadocs.vercel.app" className="text-fd-primary hover:underline">Fumadocs</a>.
            </p>
            <div className="flex items-center gap-1 text-sm text-fd-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
