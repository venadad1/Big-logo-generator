import { GoogleGenAI } from "@google/genai";
import { LogoNiche, LogoBackground, LogoColorPalette, LogoTypography } from '../types';
import { NICHE_PROMPTS, BACKGROUND_PROMPTS, PALETTE_PROMPTS, TYPOGRAPHY_PROMPTS, BASE_LOGO_PROMPT } from '../constants';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing via process.env.API_KEY");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLogoImage = async (
  userPrompt: string, 
  niche: LogoNiche, 
  background: LogoBackground,
  palette: LogoColorPalette,
  typography: LogoTypography
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct a rich prompt
    const nicheContext = NICHE_PROMPTS[niche];
    const backgroundContext = BACKGROUND_PROMPTS[background];
    const paletteContext = PALETTE_PROMPTS[palette];
    const typographyContext = TYPOGRAPHY_PROMPTS[typography];
    
    const fullPrompt = `${BASE_LOGO_PROMPT}

DETAILED SPECIFICATIONS:
- NICHE/INDUSTRY: ${niche}
- NICHE STYLE: ${nicheContext}
- BACKGROUND: ${backgroundContext}
- COLOR PALETTE: ${paletteContext}
- TYPOGRAPHY STYLE: ${typographyContext} (Use this font style if text elements are included)

USER CONCEPT: ${userPrompt}

Ensure the color palette matches ${palette}.
Ensure the background is ${background}.
`;

    // Using gemini-2.5-flash-image (nano banana) as requested for image generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: fullPrompt,
      config: {
        imageConfig: {
            aspectRatio: "1:1",
        }
      }
    });

    // Check if candidates exist
    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("No candidates returned. The request might have been blocked.");
    }

    // Extract image from response
    let imageUrl = '';
    const parts = candidates[0].content?.parts;
    
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          imageUrl = `data:${mimeType};base64,${base64Data}`;
          break;
        }
      }
    }

    if (!imageUrl) {
      // If no image, check if the model returned text (e.g., refusal or error message)
      let textResponse = '';
      if (parts) {
        for (const part of parts) {
          if (part.text) {
            textResponse += part.text;
          }
        }
      }
      
      if (textResponse) {
        // Clean up the error message
        const cleanError = textResponse.replace(/\n/g, ' ').trim().slice(0, 150);
        throw new Error(`Model returned text: ${cleanError}${cleanError.length >= 150 ? '...' : ''}`);
      }
      
      throw new Error("No image data found in response");
    }

    return imageUrl;

  } catch (error) {
    console.error("Logo Generation Error:", error);
    throw error;
  }
};