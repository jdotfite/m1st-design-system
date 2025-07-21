import React from 'react';
import { ParsedToken } from '../../../utils/cssTokenParser';

interface TokenFlowProps {
  token: ParsedToken;
  allTokens: ParsedToken[];
  onTokenClick?: (tokenName: string) => void;
}

export const TokenFlow: React.FC<TokenFlowProps> = ({ token, allTokens, onTokenClick }) => {
  // Find what this token depends on (its references)
  const dependencies = token.references?.map(ref => 
    allTokens.find(t => t.name === ref)
  ).filter(Boolean) || [];

  // Find what depends on this token
  const dependents = allTokens.filter(t => 
    t.references?.includes(token.name)
  );

  const getLayerColor = (layer: number) => {
    const colors = {
      1: 'bg-red-100 text-red-800 border-red-200',
      2: 'bg-orange-100 text-orange-800 border-orange-200', 
      3: 'bg-blue-100 text-blue-800 border-blue-200',
      4: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[layer as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const renderTokenNode = (t: ParsedToken, isCenter = false) => (
    <div
      key={t.name}
      className={`
        p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md
        ${isCenter ? 'ring-2 ring-blue-500 shadow-lg' : ''}
        ${getLayerColor(t.layer)}
      `}
      onClick={() => onTokenClick?.(t.name)}
    >
      <div className="font-mono text-xs font-medium">{t.name}</div>
      <div className="text-xs opacity-75 mt-1">{t.description}</div>
      <div className="text-xs mt-1">
        Layer {t.layer} • {t.category}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Dependencies (what this token references) */}
      {dependencies.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Dependencies (what {token.name} references):
          </h4>
          <div className="flex flex-col items-center space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              {dependencies.map(dep => renderTokenNode(dep!))}
            </div>
            <div className="text-gray-400">↓</div>
          </div>
        </div>
      )}

      {/* Current Token */}
      <div className="flex justify-center">
        {renderTokenNode(token, true)}
      </div>

      {/* Dependents (what references this token) */}
      {dependents.length > 0 && (
        <div>
          <div className="text-gray-400 text-center">↓</div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">
            Used by ({dependents.length} tokens):
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dependents.map(dep => renderTokenNode(dep))}
          </div>
        </div>
      )}

      {/* Show computed value if it's a reference */}
      {token.references && token.references.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Token Chain:</h4>
          <div className="font-mono text-xs space-y-1">
            <div>{token.name}: {token.value}</div>
            {token.references.map(ref => {
              const refToken = allTokens.find(t => t.name === ref);
              return refToken ? (
                <div key={ref} className="ml-4 text-gray-600">
                  ↳ {ref}: {refToken.value}
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
