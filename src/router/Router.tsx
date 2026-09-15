import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath =
  | '/'
  | '/services'
  | '/services/ai-automation'
  | '/services/web-applications'
  | '/services/mobile-apps'
  | '/services/web3-blockchain'
  | '/services/ongoing-support'
  | '/work'
  | '/work/agrotrace'
  | '/work/ipmi-os'
  | '/work/mediverse'
  | '/work/fume'
  | '/process'
  | '/pricing'
  | '/about'
  | '/team'
  | '/careers'
  | '/faq'
  | '/contact'
  | '/insights'
  | '/blog';

interface RouterContextType {
  path: RoutePath;
  navigate: (to: string, state?: { slug?: string }) => void;
  subSlug: string | null;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  subSlug: null,
});

const normalizePath = (pathname: string): { path: RoutePath; subSlug: string | null } => {
  const clean = pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Case study sub-routes
  if (clean === '/work/agrotrace' || clean === '/case-studies/agrotrace') return { path: '/work/agrotrace', subSlug: null };
  if (clean === '/work/ipmi-os' || clean === '/case-studies/ipmi-os') return { path: '/work/ipmi-os', subSlug: null };
  if (clean === '/work/mediverse' || clean === '/case-studies/mediverse') return { path: '/work/mediverse', subSlug: null };
  if (clean === '/work/fume' || clean === '/case-studies/fume') return { path: '/work/fume', subSlug: null };
  if (clean === '/case-studies' || clean === '/portfolio' || clean === '/projects') return { path: '/work', subSlug: null };

  // Services sub-routes
  if (clean === '/services/ai-automation') return { path: '/services/ai-automation', subSlug: null };
  if (clean === '/services/web-applications') return { path: '/services/web-applications', subSlug: null };
  if (clean === '/services/mobile-apps') return { path: '/services/mobile-apps', subSlug: null };
  if (clean === '/services/web3-blockchain') return { path: '/services/web3-blockchain', subSlug: null };
  if (clean === '/services/ongoing-support') return { path: '/services/ongoing-support', subSlug: null };

  // Insights / Blog sub-routes
  if (clean.startsWith('/insights/') || clean.startsWith('/blog/')) {
    const slug = clean.replace('/insights/', '').replace('/blog/', '');
    return { path: '/insights', subSlug: slug };
  }
  if (clean === '/blog') return { path: '/insights', subSlug: null };

  // Core pages
  if (clean === '/pricing') return { path: '/pricing', subSlug: null };
  if (clean === '/faq') return { path: '/faq', subSlug: null };
  if (clean === '/services') return { path: '/services', subSlug: null };
  if (clean === '/work') return { path: '/work', subSlug: null };
  if (clean === '/process') return { path: '/process', subSlug: null };
  if (clean === '/about') return { path: '/about', subSlug: null };
  if (clean === '/team') return { path: '/team', subSlug: null };
  if (clean === '/careers') return { path: '/careers', subSlug: null };
  if (clean === '/contact') return { path: '/contact', subSlug: null };
  if (clean === '/insights') return { path: '/insights', subSlug: null };
  if (clean === '/home') return { path: '/', subSlug: null };

  return { path: '/', subSlug: null };
};

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initial = typeof window !== 'undefined' 
    ? normalizePath(window.location.pathname) 
    : { path: '/' as RoutePath, subSlug: null };

  const [path, setPath] = useState<RoutePath>(initial.path);
  const [subSlug, setSubSlug] = useState<string | null>(initial.subSlug);

  const navigate = (to: string, state?: { slug?: string }) => {
    const parsed = normalizePath(to);
    const targetPath = parsed.path;
    const targetSlug = state?.slug || parsed.subSlug;

    if (targetPath === path && targetSlug === subSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetUrl = targetSlug ? `/insights/${targetSlug}` : to;
    window.history.pushState({}, '', targetUrl);
    setPath(targetPath);
    setSubSlug(targetSlug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const parsed = normalizePath(window.location.pathname);
      setPath(parsed.path);
      setSubSlug(parsed.subSlug);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate, subSlug }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
export const useNavigate = () => useContext(RouterContext).navigate;
export const usePath = () => useContext(RouterContext).path;
