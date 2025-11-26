import { LogoNiche, LogoBackground, LogoColorPalette, LogoTypography } from './types';

export const NICHE_PROMPTS: Record<LogoNiche, string> = {
  [LogoNiche.Business]: "corporate, trustworthy, strong geometric shapes, navy blue and grey tones, professional, minimalist, sleek",
  [LogoNiche.Technology]: "futuristic, circuit patterns, interconnected nodes, vibrant gradient, blue and cyan, modern, innovative, tech-startup style",
  [LogoNiche.Gaming]: "energetic, bold outlines, mascot-style elements, neon accents, aggressive, esports style, dynamic",
  [LogoNiche.Fitness]: "movement, strength, bold typography, dynamic shapes, orange or red energy colors, athletic, powerful",
  [LogoNiche.Beauty]: "elegant, thin lines, pastel colors, floral or soft curves, luxurious, sophisticated, serif typography",
  [LogoNiche.RealEstate]: "architectural lines, roof shapes, keys, stable, gold or dark green, trustworthy, solid structure",
  [LogoNiche.Music]: "rhythm, sound waves, musical notes abstractly integrated, vinyl texture, creative, artistic, bold",
  [LogoNiche.Restaurant]: "appetizing, warm colors like red and yellow, utensil iconography, welcoming, bistro or fine dining style",
  [LogoNiche.ECommerce]: "shopping bag, cart, arrows, fast movement, clean, trustworthy, amazon-style simplicity, conversion-focused",
  [LogoNiche.Custom]: "versatile, creative, unique, clean design, adaptable, modern",
};

export const BACKGROUND_PROMPTS: Record<LogoBackground, string> = {
  [LogoBackground.White]: "solid pure white background (easy to remove later)",
  [LogoBackground.Black]: "solid matte black background, ensure logo uses light contrasting colors",
  [LogoBackground.Navy]: "solid deep navy blue background, ensure logo uses white/gold/silver for contrast",
  [LogoBackground.DarkGrey]: "solid dark charcoal grey background",
  [LogoBackground.Beige]: "solid soft beige or cream background, elegant aesthetics",
  [LogoBackground.Purple]: "solid deep regal purple background, premium aesthetics",
  [LogoBackground.Green]: "solid deep forest green background, nature-inspired aesthetics",
  [LogoBackground.Yellow]: "solid mustard yellow background, cheerful and energetic aesthetics",
  [LogoBackground.Red]: "solid bold red background, powerful and high-energy aesthetics",
  [LogoBackground.Orange]: "solid vibrant orange background, creative and friendly aesthetics",
  [LogoBackground.Teal]: "solid teal background, modern and calm aesthetics",
  [LogoBackground.Pink]: "solid soft pink background, gentle and playful aesthetics",
  [LogoBackground.SkyBlue]: "solid light sky blue background, airy and fresh aesthetics",
  [LogoBackground.Maroon]: "solid deep maroon background, traditional and luxury aesthetics"
};

export const PALETTE_PROMPTS: Record<LogoColorPalette, string> = {
  [LogoColorPalette.Grayscale]: "strictly grayscale, black, white, and grey tones, high contrast",
  [LogoColorPalette.Vibrant]: "high saturation, bold primary colors, energetic red blue yellow",
  [LogoColorPalette.Pastel]: "soft, desaturated, pastel pinks, blues, and mint greens, gentle",
  [LogoColorPalette.Earth]: "natural browns, forest greens, terracotta, beige, organic feel",
  [LogoColorPalette.Cool]: "blues, teals, cyans, cold purples, calming and professional",
  [LogoColorPalette.Warm]: "reds, oranges, yellows, energetic and passionate",
  [LogoColorPalette.Neon]: "fluorescent neon colors, glowing green, hot pink, electric blue, high contrast",
  [LogoColorPalette.Luxury]: "black, gold, silver, metallic gradients, premium feel",
  [LogoColorPalette.Retro]: "muted 70s colors, mustard yellow, burnt orange, avocado green",
  [LogoColorPalette.Professional]: "corporate navy blue, slate grey, white, trustworthy",
  [LogoColorPalette.Sunset]: "gradients of pink, orange, purple and yellow, warm and dreamy",
  [LogoColorPalette.Forest]: "deep greens, wood browns, leaf green, natural palette",
  [LogoColorPalette.Metallic]: "silver, chrome, metallic greys, shiny reflections"
};

export const TYPOGRAPHY_PROMPTS: Record<LogoTypography, string> = {
  [LogoTypography.ModernSans]: "clean, modern sans-serif, Helvetica-like, neutral, readable",
  [LogoTypography.ClassicSerif]: "traditional serif, Times New Roman style, elegant, trustworthy",
  [LogoTypography.SlabSerif]: "thick slab serif, bold, sturdy, industrial, heavy weight",
  [LogoTypography.Script]: "elegant calligraphy, fluid strokes, formal, cursive",
  [LogoTypography.Handwritten]: "casual marker or brush style, personal, friendly, organic",
  [LogoTypography.Futuristic]: "sleek, sci-fi, disconnected lines, wide spacing, tech-inspired",
  [LogoTypography.BoldDisplay]: "heavy weight, thick strokes, impactful, loud, poster style",
  [LogoTypography.Minimalist]: "ultra-thin lines, plenty of whitespace, subtle, light weight",
  [LogoTypography.Vintage]: "distressed, victorian or art deco influences, textured, decorative",
  [LogoTypography.Geometric]: "letters constructed from basic geometric shapes, circle-based, bauhaus style",
  [LogoTypography.Graffiti]: "street art, spray paint aesthetic, urban, wildstyle, bubbly",
  [LogoTypography.Techno]: "glitched, digital, pixelated, matrix style, computer aesthetic"
};

export const BASE_LOGO_PROMPT = `
Generate a single high-quality, professional vector logo image based on the following concept.
Do NOT output any text explanations, only the image.

Design Style Requirements:
- Vector-style aesthetic
- Clean, simple shapes
- High contrast
- Flat design (avoid photorealistic textures unless specified by palette)
- Professional composition
- Minimalist and scalable
- No noise or artifacts
`;

export const LOGO_PLACEHOLDER = "https://picsum.photos/500/500?grayscale&blur=2";