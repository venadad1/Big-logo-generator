export enum LogoNiche {
  Business = 'Business',
  Technology = 'Technology',
  Gaming = 'Gaming',
  Fitness = 'Fitness',
  Beauty = 'Beauty',
  RealEstate = 'Real Estate',
  Music = 'Music',
  Restaurant = 'Restaurant',
  ECommerce = 'E-commerce',
  Custom = 'Custom Niche'
}

export enum LogoBackground {
  White = 'White',
  Black = 'Black',
  Navy = 'Navy Blue',
  DarkGrey = 'Dark Grey',
  Beige = 'Beige / Cream',
  Purple = 'Deep Purple',
  Green = 'Forest Green',
  Yellow = 'Mustard Yellow',
  Red = 'Bold Red',
  Orange = 'Vibrant Orange',
  Teal = 'Teal',
  Pink = 'Soft Pink',
  SkyBlue = 'Sky Blue',
  Maroon = 'Deep Maroon'
}

export enum LogoColorPalette {
  Grayscale = 'Grayscale / Monochrome',
  Vibrant = 'Vibrant & Bold',
  Pastel = 'Soft & Pastel',
  Earth = 'Earth Tones (Nature)',
  Cool = 'Cool Blues & Teals',
  Warm = 'Warm Reds & Oranges',
  Neon = 'Neon & Cyberpunk',
  Luxury = 'Luxury Gold & Black',
  Retro = 'Retro / Vintage',
  Professional = 'Professional Blue & Grey',
  Sunset = 'Sunset Gradients',
  Forest = 'Forest & Botanical',
  Metallic = 'Metallic (Silver/Chrome)'
}

export enum LogoTypography {
  ModernSans = 'Modern Sans-Serif',
  ClassicSerif = 'Classic Serif',
  SlabSerif = 'Slab Serif (Bold)',
  Script = 'Script / Elegant',
  Handwritten = 'Handwritten',
  Futuristic = 'Futuristic / Sci-Fi',
  BoldDisplay = 'Bold Display',
  Minimalist = 'Minimalist / Thin',
  Vintage = 'Vintage / Retro',
  Geometric = 'Geometric',
  Graffiti = 'Graffiti / Urban',
  Techno = 'Techno / Digital'
}

export interface GeneratedLogo {
  id: number;
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LogoGenerationParams {
  prompt: string;
  niche: LogoNiche;
  background: LogoBackground;
  palette: LogoColorPalette;
  typography: LogoTypography;
}