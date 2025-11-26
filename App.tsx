import React, { useState, useCallback } from 'react';
import { LogoNiche, LogoBackground, LogoColorPalette, LogoTypography, GeneratedLogo } from './types';
import { InputSection } from './components/InputSection';
import { LogoCard } from './components/LogoCard';
import { generateLogoImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [niche, setNiche] = useState<LogoNiche>(LogoNiche.Business);
  const [background, setBackground] = useState<LogoBackground>(LogoBackground.White);
  const [palette, setPalette] = useState<LogoColorPalette>(LogoColorPalette.Professional);
  const [typography, setTypography] = useState<LogoTypography>(LogoTypography.ModernSans);
  
  // State for the 3 logo slots
  const [logos, setLogos] = useState<GeneratedLogo[]>([
    { id: 1, imageUrl: null, isLoading: false, error: null },
    { id: 2, imageUrl: null, isLoading: false, error: null },
    { id: 3, imageUrl: null, isLoading: false, error: null },
  ]);

  const handleGenerateSingle = useCallback(async (
    id: number, 
    currentPrompt: string, 
    currentNiche: LogoNiche, 
    currentBg: LogoBackground,
    currentPalette: LogoColorPalette,
    currentTypography: LogoTypography
  ) => {
    // Set loading for this specific ID
    setLogos(prev => prev.map(logo => 
      logo.id === id ? { ...logo, isLoading: true, error: null } : logo
    ));

    try {
      const imageUrl = await generateLogoImage(currentPrompt, currentNiche, currentBg, currentPalette, currentTypography);
      setLogos(prev => prev.map(logo => 
        logo.id === id ? { ...logo, imageUrl, isLoading: false } : logo
      ));
    } catch (err: any) {
      setLogos(prev => prev.map(logo => 
        logo.id === id ? { ...logo, isLoading: false, error: err.message || "Generation failed." } : logo
      ));
    }
  }, []);

  const handleGenerateAll = useCallback(() => {
    if (!prompt.trim()) return;
    
    // Trigger generation for all 3 slots independently to get variations
    [1, 2, 3].forEach(id => {
      handleGenerateSingle(id, prompt, niche, background, palette, typography);
    });
  }, [prompt, niche, background, palette, typography, handleGenerateSingle]);

  const handleRegenerateOne = useCallback((id: number) => {
    if (!prompt.trim()) return;
    handleGenerateSingle(id, prompt, niche, background, palette, typography);
  }, [prompt, niche, background, palette, typography, handleGenerateSingle]);

  const isGeneratingAny = logos.some(l => l.isLoading);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 rounded-lg p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Big Logo Generator</h1>
          </div>
          <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Powered by Gemini 2.5
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Create professional vector logos in seconds.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select your niche, colors, and typography, then describe your vision to generate perfectly scalable logos.
            </p>
          </div>

          <InputSection 
            prompt={prompt} 
            setPrompt={setPrompt} 
            niche={niche} 
            setNiche={setNiche}
            background={background}
            setBackground={setBackground}
            palette={palette}
            setPalette={setPalette}
            typography={typography}
            setTypography={setTypography}
            onGenerate={handleGenerateAll}
            isGeneratingAny={isGeneratingAny}
          />

          {/* Grid Output */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {logos.map((logo) => (
              <LogoCard 
                key={logo.id} 
                logo={logo} 
                onRegenerate={handleRegenerateOne} 
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Big Logo Generator. Designed for high-quality, professional outputs.
        </div>
      </footer>
    </div>
  );
};

export default App;