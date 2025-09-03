import React from 'react';
// import * as tokens from 'm1st-design-tokens';

// Temporary: Read tokens from CSS custom properties since JS exports aren't available
const getTokenValue = (tokenName: string) => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${tokenName}`).trim();
  }
  return 'N/A';
};

const sampleKeys: Array<[string, () => string]> = [
  ['BrandPrimary', () => getTokenValue('brand-primary')],
  ['ColorTextPrimary', () => getTokenValue('color-text-primary')],
  ['ColorBackgroundPrimary', () => getTokenValue('color-background-primary')],
  ['ButtonPrimaryBackground', () => getTokenValue('button-primary-background')],
  ['SpaceMd', () => getTokenValue('space-md')],
];

export const TokenDiagnostics: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Token Diagnostics</h1>
      <p>Verifies package CSS import & CSS custom property availability.</p>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '4px 8px' }}>Token</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '4px 8px' }}>Value</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '4px 8px' }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {sampleKeys.map(([k, valueGetter]) => {
            const value = valueGetter();
            return (
              <tr key={k}>
                <td style={{ padding: '4px 8px' }}>{k}</td>
                <td style={{ padding: '4px 8px', fontFamily: 'monospace' }}>{value || 'Not found'}</td>
                <td style={{ padding: '4px 8px' }}>
                  {value && value.startsWith('#') ? (
                    <span style={{ display: 'inline-block', width: 24, height: 24, background: value, border: '1px solid #ccc' }} />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>CSS Variable Spot Check</h2>
      <div style={{
        background: 'var(--color-background-primary)',
        color: 'var(--color-text-primary)',
        padding: 'var(--space-md, 1rem)',
        border: '1px solid var(--color-border-primary, #e5e5e5)',
        borderRadius: 'var(--button-border-radius, 8px)'
      }}>
        This box uses CSS custom properties from the token package.
      </div>
    </div>
  );
};

export default TokenDiagnostics;
