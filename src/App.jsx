import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { Search, Flame, BookMarked, TrendingUp, Users, Plus, X, ChevronRight, Menu } from 'lucide-react';

function App() {
  const [view, setView] = useState('main');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [articles] = useState([
    {
      title: "Advanced React Patterns",
      author: "Sarah Chen",
      category: "Frontend",
      readTime: "8 min",
      tags: ["react", "javascript", "patterns"]
    },
    {
      title: "Getting Started with Rust",
      author: "Mike Wilson",
      category: "Systems",
      readTime: "12 min",
      tags: ["rust", "beginners"]
    }
  ]);

  const MobileNav = () => (
    <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-zinc-950/95 transform transition-transform duration-200 ease-in-out z-50 border-r border-red-500/20`}>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-gray-100">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-gray-400 hover:text-white" />
          </button>
        </div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start group">
            <TrendingUp className="h-4 w-4 mr-2 group-hover:text-red-400" />
            Trending
          </Button>
          <Button variant="ghost" className="w-full justify-start group">
            <BookMarked className="h-4 w-4 mr-2 group-hover:text-red-400" />
            Bookmarks
          </Button>
          <Button variant="ghost" className="w-full justify-start group">
            <Users className="h-4 w-4 mr-2 group-hover:text-red-400" />
            Contributors
          </Button>
        </nav>
        <Button 
          onClick={() => {
            setView('write');
            setIsMobileMenuOpen(false);
          }}
          className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-400"
        >
          <Plus className="h-4 w-4 mr-2" />
          Write Article
        </Button>
      </div>
    </div>
  );

  const AuthModal = ({ mode, onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-4 relative border-red-500/20 shadow-2xl shadow-red-500/10">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <CardHeader>
          <CardTitle className="text-center">
            {mode === 'login' ? 'Welcome Back' : 'Join InCodeX'}
          </CardTitle>
          <CardDescription className="text-center">
            {mode === 'login' 
              ? 'Enter your credentials to continue' 
              : 'Create your account to start sharing knowledge'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full bg-zinc-800 border border-red-500/20 rounded-md py-2 px-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Password</label>
              <input
                type="password"
                className="w-full bg-zinc-800 border border-red-500/20 rounded-md py-2 px-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-400">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
            <p className="text-center text-sm text-gray-400 mt-4">
              {mode === 'login' 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button
                onClick={() => setView(mode === 'login' ? 'signup' : 'login')}
                className="text-red-400 hover:text-red-300"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const WriteArticle = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl h-[80vh] mx-4 relative border-red-500/20 shadow-2xl shadow-red-500/10 overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <CardHeader>
          <input
            type="text"
            placeholder="Article Title"
            className="w-full bg-transparent text-3xl font-bold border-none focus:outline-none placeholder-gray-500"
          />
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input
              type="text"
              placeholder="Add tags..."
              className="flex-1 bg-zinc-800 border border-red-500/20 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
            />
            <select className="bg-zinc-800 border border-red-500/20 rounded-md py-2 px-3 focus:outline-none focus:border-red-500">
              <option>Select Category</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>DevOps</option>
              <option>AI/ML</option>
            </select>
          </div>
        </CardHeader>
        <CardContent className="h-full pb-20">
          <textarea
            placeholder="Write your article content..."
            className="w-full h-full bg-zinc-800/50 border border-red-500/20 rounded-md p-4 focus:outline-none focus:border-red-500 resize-none"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-900 border-t border-red-500/20">
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={onClose} className="border-red-500/20 hover:border-red-500">
                Save Draft
              </Button>
              <Button className="bg-gradient-to-r from-red-600 to-red-400">
                Publish
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-red-950/50 bg-zinc-950/95 sticky top-0 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Flame className="h-8 w-8 text-red-500 animate-pulse" />
                <div className="absolute -inset-1 bg-red-500 blur-md opacity-20 animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                InCodeX
              </span>
            </div>
            
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-300 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-zinc-900/90 border border-red-950 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setView('write')}
                className="hidden md:flex border-red-500/20 hover:border-red-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Write Article
              </Button>
              <Button 
                onClick={() => setView('login')}
                className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-zinc-900/90 border border-red-950 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start group">
                <TrendingUp className="h-4 w-4 mr-2 group-hover:text-red-400" />
                Trending
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button variant="ghost" className="w-full justify-start group">
                <BookMarked className="h-4 w-4 mr-2 group-hover:text-red-400" />
                Bookmarks
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button variant="ghost" className="w-full justify-start group">
                <Users className="h-4 w-4 mr-2 group-hover:text-red-400" />
                Contributors
                <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </nav>
          </div>

          {/* Article Feed */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:border-red-500/30 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-300 transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription>
                          By {article.author} · {article.readTime} read
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-zinc-800 to-zinc-700">
                        {article.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="hover:border-red-500 transition-colors">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="lg:col-span-3">
            <Card className="border-red-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  {['React', 'Machine Learning', 'DevOps', 'Web3'].map((topic, index) => (
                    <div key={index} className="flex items-center justify-between group hover:bg-zinc-800/50 p-2 rounded-md transition-colors">
                      <span className="text-red-200">#{topic}</span>
                      <Badge variant="secondary" className="bg-gradient-to-r from-zinc-800 to-zinc-700">
                        {Math.floor(Math.random() * 1000 + 100)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Modals */}
      {view === 'login' && <AuthModal mode="login" onClose={() => setView('main')} />}
      {view === 'signup' && <AuthModal mode="signup" onClose={() => setView('main')} />}
      {view === 'write' && <WriteArticle onClose={() => setView('main')} />}
    </div>
  );
}

export default App;