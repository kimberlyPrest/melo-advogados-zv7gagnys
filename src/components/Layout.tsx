import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'About Us', href: '#about-us' },
  { name: 'Professionals', href: '#professionals' },
  { name: 'Contact', href: '#contact' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-subtle py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          <a 
            href="#" 
            className="z-50 transition-opacity hover:opacity-80">
          <img
            src="https://kmbzepwpesrkplkzwhqh.supabase.co/storage/v1/object/public/Logo/favicon.png"
            alt="Melo Advogados"
            className="h-12 w-auto"
          />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${
                  !isScrolled ? 'text-white/90' : 'text-brand-primary/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`rounded-none px-6 tracking-wide transition-all duration-300 ${
                !isScrolled
                  ? 'bg-white text-brand-primary hover:bg-white/90'
                  : 'bg-brand-primary text-white hover:bg-brand-primary/90'
              }`}
              onClick={() => (window.location.hash = '#contact')}
            >
              Consultation
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`z-50 ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-brand-primary'}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-full bg-brand-bg pt-24">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display text-brand-primary hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  className="mt-4 rounded-none bg-brand-primary py-6 text-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    window.location.hash = '#contact'
                  }}
                >
                  Consultation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-brand-surface py-16 border-t border-brand-muted">
        <div className="container grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-widest text-brand-primary">
              Melo Advogados & Associados
            </h3>
            <p className="text-sm text-brand-primary/70 max-w-sm">
              Commemorating 60 years of exclusive dedication to Tax Law and the defense of our
              clients' interests.
            </p>
          </div>
          <div className="space-y-4 md:text-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary/50">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-brand-primary/80">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <p className="text-xs text-brand-primary/50 text-right mt-auto">
              © 1964-{new Date().getFullYear()} Melo Advogados & Associados. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
