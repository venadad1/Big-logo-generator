import React from 'react';
import { GeneratedLogo } from '../types';
import { Button } from './Button';

interface LogoCardProps {
  logo: GeneratedLogo;
  onRegenerate: (id: number) => void;
}

export const LogoCard: React.FC<LogoCardProps> = ({ logo, onRegenerate }) => {
  const handleDownload = () => {
    if (logo.imageUrl) {
      const link = document.createElement('a');
      link.href = logo.imageUrl;
      link.download = `big-logo-generator-${logo.id}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-slate-100 flex items-center justify-center p-4">
        {logo.isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-sm text-slate-500 font-medium animate-pulse">Designing...</p>
          </div>
        ) : logo.error ? (
          <div className="text-center p-6">
            <div className="text-red-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm text-slate-600 mb-4">{logo.error}</p>
            <Button variant="secondary" onClick={() => onRegenerate(logo.id)} className="text-xs">
              Try Again
            </Button>
          </div>
        ) : logo.imageUrl ? (
          <img 
            src={logo.imageUrl} 
            alt="Generated Logo" 
            className="w-full h-full object-contain rounded-lg drop-shadow-sm" 
          />
        ) : (
          <div className="text-slate-400 text-sm flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Ready to generate</span>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
        <Button 
          variant="secondary" 
          onClick={() => onRegenerate(logo.id)}
          className="flex-1 text-sm py-1.5"
          disabled={logo.isLoading}
        >
          <span className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Regenerate
          </span>
        </Button>
        <Button 
          variant="outline"
          onClick={handleDownload}
          className="flex-shrink-0 py-1.5 px-3"
          disabled={!logo.imageUrl || logo.isLoading}
          title="Download PNG"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </Button>
      </div>
    </div>
  );
};