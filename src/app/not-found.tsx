import { BookOpen, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-fd-background to-fd-muted/30 px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number with gradient */}
        <div className="relative">
          <h1 className="text-[12rem] font-black leading-none bg-gradient-to-br from-fd-primary via-fd-primary/70 to-fd-primary/40 bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[12rem] font-black leading-none text-fd-primary/5 blur-xl select-none">
            404
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-fd-foreground mt-2">
          Page Not Found
        </h2>
        <p className="text-fd-muted-foreground mt-3 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved to a new location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-fd-primary text-fd-primary-foreground font-semibold shadow-lg shadow-fd-primary/20 hover:shadow-fd-primary/40 hover:scale-105 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-fd-accent text-fd-accent-foreground font-semibold hover:bg-fd-accent/80 hover:scale-105 transition-all duration-200"
          >
            <BookOpen className="w-5 h-5" />
            Browse Docs
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-4 rounded-xl bg-fd-muted/50 border border-fd-border">
          <div className="flex items-center gap-2 text-fd-muted-foreground text-sm">
            <Search className="w-4 h-4" />
            <span>Tip: Use the search bar to find what you're looking for</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-fd-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-fd-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
