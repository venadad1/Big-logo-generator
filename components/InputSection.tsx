import React from 'react';
import { LogoNiche, LogoBackground, LogoColorPalette, LogoTypography } from '../types';
import { Button } from './Button';

interface InputSectionProps {
  prompt: string;
  setPrompt: (value: string) => void;
  niche: LogoNiche;
  setNiche: (value: LogoNiche) => void;
  background: LogoBackground;
  setBackground: (value: LogoBackground) => void;
  palette: LogoColorPalette;
  setPalette: (value: LogoColorPalette) => void;
  typography: LogoTypography;
  setTypography: (value: LogoTypography) => void;
  onGenerate: () => void;
  isGeneratingAny: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({
  prompt,
  setPrompt,
  niche,
  setNiche,
  background,
  setBackground,
  palette,
  setPalette,
  typography,
  setTypography,
  onGenerate,
  isGeneratingAny
}) => {
  
  const SelectField = ({ 
    label, 
    id, 
    value, 
    onChange, 
    options 
  }: { 
    label: string, 
    id: string, 
    value: string, 
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, 
    options: string[] 
  }) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="appearance-none w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-lg py-2.5 px-3.5 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer text-sm"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-10 max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        
        {/* Dropdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectField 
            label="Industry / Niche" 
            id="niche" 
            value={niche} 
            onChange={(e) => setNiche(e.target.value as LogoNiche)} 
            options={Object.values(LogoNiche)} 
          />
          
          <SelectField 
            label="Color Palette" 
            id="palette" 
            value={palette} 
            onChange={(e) => setPalette(e.target.value as LogoColorPalette)} 
            options={Object.values(LogoColorPalette)} 
          />

           <SelectField 
            label="Typography Style" 
            id="typography" 
            value={typography} 
            onChange={(e) => setTypography(e.target.value as LogoTypography)} 
            options={Object.values(LogoTypography)} 
          />

          <SelectField 
            label="Background" 
            id="background" 
            value={background} 
            onChange={(e) => setBackground(e.target.value as LogoBackground)} 
            options={Object.values(LogoBackground)} 
          />
        </div>

        {/* Prompt Input */}
        <div className="w-full space-y-2">
          <label htmlFor="prompt" className="block text-sm font-semibold text-slate-700">
            Describe your logo idea
          </label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A minimalist fox wearing spectacles"
              className="appearance-none flex-grow bg-slate-50 border border-slate-300 text-slate-900 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && prompt.trim() && !isGeneratingAny) {
                  onGenerate();
                }
              }}
            />
            <Button 
              onClick={onGenerate} 
              disabled={!prompt.trim() || isGeneratingAny}
              className="w-full md:w-auto min-w-[180px] font-semibold tracking-wide"
            >
              GENERATE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};