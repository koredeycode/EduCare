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
      <section className="py-20 bg-fd-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build education apps
            </h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              The EduCare API provides a complete set of tools for managing educational institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-fd-background border border-fd-border hover:border-fd-primary/50 hover:shadow-lg hover:shadow-fd-primary/5 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-fd-primary/10 text-fd-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-fd-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, intuitive API
              </h2>
              <p className="text-fd-muted-foreground text-lg mb-6">
                Get up and running in minutes with our clean, RESTful API design. Authenticate with a simple Bearer token and start making requests.
              </p>
              <ul className="space-y-3 mb-8">
                {['Bearer token authentication', 'JSON request/response format', 'Consistent error handling', 'Pagination & filtering'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-fd-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-fd-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/docs/getting-started/authentication"
                className="inline-flex items-center gap-2 text-fd-primary font-medium hover:underline"
              >
                Learn about authentication
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fd-primary/20 to-fd-primary/5 rounded-2xl blur-2xl -z-10" />
              <div className="bg-fd-background border border-fd-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-fd-muted/50 border-b border-fd-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-fd-muted-foreground ml-2">API Request</span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-fd-foreground">
                    <span className="text-fd-primary">curl</span>{' '}
                    <span className="text-fd-muted-foreground">-H</span>{' '}
                    <span className="text-green-500">&quot;Authorization: Bearer YOUR_KEY&quot;</span>{' '}
                    <span className="text-fd-muted-foreground">\</span>{'\n'}
                    {'  '}https://api.educare.com/v1/students
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fd-primary to-fd-primary/80 p-12 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/50 rounded-full" />
              <div className="absolute bottom-4 right-4 w-48 h-48 border border-white/50 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/30 rounded-full" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-fd-primary-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-fd-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Explore our documentation and start building your education platform today.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-fd-primary-foreground text-fd-primary font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Read the Documentation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-fd-border">
        <div className="container mx-auto px-4 text-center text-fd-muted-foreground text-sm">
          <p>© 2026 EduCare. Built with Fumadocs.</p>
        </div>
      </footer>
    </main>
  );
}
