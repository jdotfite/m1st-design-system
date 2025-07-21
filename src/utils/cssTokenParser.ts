// CSS Token Parser Utility
export interface ParsedToken {
  name: string;
  value: string;
  category: string;
  layer: number;
  description?: string;
  references?: string[];
  section?: string;
  computedValue?: string;
}

export interface TokenParseResult {
  tokens: ParsedToken[];
  categories: string[];
  layers: number[];
  sections: string[];
}

// CSS parsing functions
export const parseCSSTokens = async (): Promise<TokenParseResult> => {
  try {
    // In a real implementation, you'd fetch the CSS file
    // For now, we'll use a mock version
    const cssContent = await fetchCSSContent();
    return parseCSSContent(cssContent);
  } catch (error) {
    console.error('Error parsing CSS tokens:', error);
    return { tokens: [], categories: [], layers: [], sections: [] };
  }
};

const fetchCSSContent = async (): Promise<string> => {
  try {
    // In production, you'd fetch from your actual CSS file
    // For now, let's use a more comprehensive sample based on your actual tokens
    const response = await fetch('/src/index.css');
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.warn('Could not fetch actual CSS file, using sample data');
  }
  
  // Fallback sample with your actual token structure
  return `
    /* ==========================================================================
       EXTENDED NEUTRAL SCALE (Tailwind Neutral + Calculated Middle Values)
       ========================================================================== */
    
    --neutral-0: #ffffff;        /* white */
    --neutral-25: #fefefd;       /* middle between white and neutral-50 */
    --neutral-925: #0f0f0f;      /* middle between neutral-900 and neutral-950 */
    --neutral-1000: #000000;     /* black */

    /* ==========================================================================
       BRAND COLORS
       ========================================================================== */
    
    --color-brand-primary: #EE3831;                /* M1st brand red - matches M logo */
    --color-brand-primary-hover: #dc2626;          /* red-600 */
    
    /* ==========================================================================
       SEMANTIC COLOR PALETTE - LIGHT THEME (Using Extended Neutrals)
       ========================================================================== */
    
    --color-accent-primary: var(--neutral-925);                    /* neutral-925 - dark gray */
    --color-background-primary: var(--neutral-0);      /* white - clean background */
    --color-text-primary: var(--neutral-900);          /* primary text */
    
    /* ==========================================================================
       PAGE-LEVEL SEMANTIC TOKENS (Layer 3) - Maps semantic tokens to page contexts
       ========================================================================== */
    
    --page-background: var(--color-background-primary);           /* main page background */
    --page-text-primary: var(--color-text-primary);              /* main content text */
    
    /* ==========================================================================
       BUTTON COMPONENT TOKENS (Layer 4 - Component Tokens)
       ========================================================================== */
    
    --button-primary-bg: var(--color-accent-primary);
    --button-primary-text: var(--neutral-0);                       /* white text for contrast */
    --button-secondary-border: var(--color-background-primary);
  `;
};

const parseCSSContent = (cssContent: string): TokenParseResult => {
  const tokens: ParsedToken[] = [];
  const categories = new Set<string>();
  const layers = new Set<number>();
  const sections = new Set<string>();

  // Regular expression to match CSS custom properties
  const tokenRegex = /--([^:]+):\s*([^;]+);(?:\s*\/\*\s*([^*]+)\s*\*\/)?/g;
  
  let match;
  let currentSection = 'Unknown';
  let currentLayer = 1;

  // Parse section headers
  const sectionRegex = /\/\*\s*([^*]+)\s*\*\//g;
  let sectionMatch;
  const sectionMatches: Array<{section: string, index: number}> = [];
  
  while ((sectionMatch = sectionRegex.exec(cssContent)) !== null) {
    sectionMatches.push({
      section: sectionMatch[1].trim(),
      index: sectionMatch.index
    });
  }

  while ((match = tokenRegex.exec(cssContent)) !== null) {
    const [, name, value, comment] = match;
    const tokenName = `--${name.trim()}`;
    const tokenValue = value.trim();
    const description = comment?.trim();

    // Determine current section based on position
    const tokenIndex = match.index;
    for (let i = sectionMatches.length - 1; i >= 0; i--) {
      if (tokenIndex > sectionMatches[i].index) {
        currentSection = sectionMatches[i].section;
        break;
      }
    }

    // Determine layer based on naming convention
    if (tokenName.startsWith('--neutral-') || tokenName.startsWith('--color-brand-')) {
      currentLayer = 1;
    } else if (tokenName.startsWith('--color-')) {
      currentLayer = 2;
    } else if (tokenName.startsWith('--page-')) {
      currentLayer = 3;
    } else if (tokenName.includes('-bg') || tokenName.includes('-text') || tokenName.includes('-border')) {
      currentLayer = 4;
    }

    // Determine category
    let category = 'Other';
    if (tokenName.includes('neutral')) category = 'Neutral Colors';
    else if (tokenName.includes('brand')) category = 'Brand Colors';
    else if (tokenName.includes('background')) category = 'Background Colors';
    else if (tokenName.includes('text')) category = 'Text Colors';
    else if (tokenName.includes('border')) category = 'Border Colors';
    else if (tokenName.includes('accent')) category = 'Interactive Colors';
    else if (tokenName.includes('button')) category = 'Button Tokens';
    else if (tokenName.includes('page')) category = 'Page Tokens';

    // Extract references to other variables
    const references: string[] = [];
    const varRegex = /var\((--[^)]+)\)/g;
    let varMatch;
    while ((varMatch = varRegex.exec(tokenValue)) !== null) {
      references.push(varMatch[1]);
    }

    const token: ParsedToken = {
      name: tokenName,
      value: tokenValue,
      category,
      layer: currentLayer,
      description,
      references: references.length > 0 ? references : undefined,
      section: currentSection
    };

    tokens.push(token);
    categories.add(category);
    layers.add(currentLayer);
    sections.add(currentSection);
  }

  return {
    tokens,
    categories: Array.from(categories).sort(),
    layers: Array.from(layers).sort(),
    sections: Array.from(sections)
  };
};

// Token relationship analysis
export const analyzeTokenDependencies = (tokens: ParsedToken[]): Map<string, string[]> => {
  const dependencies = new Map<string, string[]>();
  
  tokens.forEach(token => {
    if (token.references) {
      dependencies.set(token.name, token.references);
    }
  });
  
  return dependencies;
};

// Find tokens that reference a specific token
export const findTokenUsage = (tokens: ParsedToken[], targetToken: string): ParsedToken[] => {
  return tokens.filter(token => 
    token.references?.includes(targetToken)
  );
};

// Group tokens by layer
export const groupTokensByLayer = (tokens: ParsedToken[]): Record<number, ParsedToken[]> => {
  return tokens.reduce((groups, token) => {
    const layer = token.layer;
    if (!groups[layer]) {
      groups[layer] = [];
    }
    groups[layer].push(token);
    return groups;
  }, {} as Record<number, ParsedToken[]>);
};

// Get token hierarchy (what a token depends on)
export const getTokenHierarchy = (tokens: ParsedToken[], tokenName: string): ParsedToken[] => {
  const hierarchy: ParsedToken[] = [];
  const visited = new Set<string>();
  
  const findDependencies = (name: string) => {
    if (visited.has(name)) return;
    visited.add(name);
    
    const token = tokens.find(t => t.name === name);
    if (token) {
      hierarchy.push(token);
      if (token.references) {
        token.references.forEach(ref => findDependencies(ref));
      }
    }
  };
  
  findDependencies(tokenName);
  return hierarchy;
};
