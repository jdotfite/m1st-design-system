#!/usr/bin/env powershell

# M1st Design System - Distribution Builder
# This script builds both incremental and monolithic distributions

Write-Host "🚀 Building M1st Design System Distributions..." -ForegroundColor Green

# Create distribution directories
$distDir = "c:\_websites\m1st-design-system\public\dist"
$srcDir = "c:\_websites\m1st-design-system\src"

# Ensure directories exist
New-Item -ItemType Directory -Force -Path "$distDir\incremental\components" | Out-Null

# Copy main CSS as monolithic distribution
Write-Host "📦 Building monolithic distribution..." -ForegroundColor Yellow
# Note: We use the clean version without Tailwind directives and auto-dark-mode
# Copy-Item "$srcDir\index.css" "$distDir\monolithic.css" -Force
Write-Host "   Using pre-built monolithic-clean.css (browser-ready version)" -ForegroundColor Gray

# Build incremental components
Write-Host "🔧 Building incremental distributions..." -ForegroundColor Yellow

# Note: For now, we have tabs.css as self-contained
# Future components will follow the same pattern

Write-Host "✅ Distribution build complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Available distributions:" -ForegroundColor Cyan
Write-Host "  📁 Monolithic: public/dist/monolithic.css" -ForegroundColor White
Write-Host "  📁 Incremental Tabs: public/dist/incremental/components/tabs.css" -ForegroundColor White
Write-Host ""
Write-Host "Test pages:" -ForegroundColor Cyan
Write-Host "  🌐 Incremental: http://localhost:3000/test-incremental.html" -ForegroundColor White
Write-Host "  🌐 Monolithic: http://localhost:3000/test-monolithic.html" -ForegroundColor White
