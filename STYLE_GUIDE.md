# PuntaProp Design System - Style Guide

**Versión**: 2.0.0
**Fecha**: 16 Noviembre 2024
**Basado en**: Sitio original https://www.puntaprop.com/

---

## Table of Contents

1. [Overview](#overview)
2. [Brand Identity](#brand-identity)
3. [Design Philosophy](#design-philosophy)
4. [Color Palette](#color-palette)
5. [Typography](#typography)
6. [Logo & Branding Assets](#logo--branding-assets)
7. [Spacing System](#spacing-system)
8. [Component Styles](#component-styles)
9. [Shadows & Elevation](#shadows--elevation)
10. [Animations & Transitions](#animations--transitions)
11. [Border Styles](#border-styles)
12. [Border Radius](#border-radius)
13. [Opacity & Transparency](#opacity--transparency)
14. [Z-Index Layers](#z-index-layers)
15. [Responsive Breakpoints](#responsive-breakpoints)
16. [CSS Variables](#css-variables)
17. [Layout Patterns](#layout-patterns)
18. [Real Estate UI Patterns](#real-estate-ui-patterns)
19. [Example Component Reference](#example-component-reference)

---

## Overview

Este design system documenta los estilos, componentes y patrones para **PuntaProp**, la guía de Real Estate de Punta del Este. El sistema está diseñado para replicar y mejorar el sitio original usando tecnologías modernas.

### Propósito del Proyecto

**PuntaProp** es una plataforma de real estate enfocada en propiedades de Punta del Este, Uruguay. El sitio incluye:

- 🏠 **Búsqueda de propiedades** (venta, alquiler, temporada)
- 🏢 **Directorio de inmobiliarias**
- 👔 **Guía de profesionales** (abogados, arquitectos, contadores, escribanos)
- 📍 **Información sobre Punta del Este**
- ⭐ **Sistema de favoritos** para usuarios

### Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Nuxt UI v4 (Radix Vue + Tailwind CSS)
- **Content**: Nuxt Content con schemas Zod
- **Styling**: Tailwind CSS con tokens personalizados
- **Icons**: Iconify (Lucide + Simple Icons)
- **Animations**: Motion-v
- **Images**: Nuxt Image con CDN integration

### Referencias del Sitio Original

- **Sitio**: https://www.puntaprop.com/
- **Framework Original**: Next.js
- **CDN Imágenes**: https://fs.puntaprop.com/files/images/
- **Screenshots**: `backup_old_website/screenshots/`

---

## Brand Identity

### Brand Information

- **Nombre**: PuntaProp
- **Tagline**: "La Guía del Real Estate de Punta del Este"
- **Mercado**: Uruguay - Punta del Este
- **Sector**: Real Estate / Bienes Raíces
- **Audiencia**: Compradores, vendedores, inquilinos, inmobiliarias

### Brand Personality

- **Profesional**: Confiable y experto en el mercado
- **Local**: Enfocado específicamente en Punta del Este
- **Accesible**: Fácil de usar para todos los usuarios
- **Completo**: Guía integral del real estate

### Tone of Voice

- **Formal pero amigable**: Profesional sin ser distante
- **Informativo**: Claro y directo
- **Local**: Conocedor del mercado uruguayo
- **Confiable**: Datos precisos y actualizados

---

## Design Philosophy

### Principios de Diseño

**1. Trust & Credibility**
- Diseño limpio y profesional
- Información clara y verificable
- Imágenes reales de propiedades
- Datos confiables de inmobiliarias

**2. User-Centric Search**
- Filtros intuitivos y potentes
- Resultados relevantes
- Búsqueda rápida y responsive
- Navegación clara

**3. Local Focus**
- Contenido específico de Punta del Este
- Directorio de profesionales locales
- Información del área
- Servicios especializados

**4. Mobile-First**
- Optimizado para búsquedas móviles
- Touch-friendly interfaces
- Responsive en todos los dispositivos
- Performance optimizado

**5. Content Rich**
- Fotografías de alta calidad
- Descripciones detalladas
- Información completa de propiedades
- Guías y recursos útiles

---

## Color Palette

### Primary Brand Colors

Basado en el análisis del sitio original, PuntaProp utiliza una paleta profesional que transmite confianza y sofisticación.

#### Primary Blue (Trust & Professionalism)

```css
/* Azul primario - Usado en CTAs, links, elementos interactivos */
--pp-blue-50: #eff6ff;
--pp-blue-100: #dbeafe;
--pp-blue-200: #bfdbfe;
--pp-blue-300: #93c5fd;
--pp-blue-400: #60a5fa;
--pp-blue-500: #3b82f6;   /* Main brand color */
--pp-blue-600: #2563eb;   /* Buttons, primary actions */
--pp-blue-700: #1d4ed8;   /* Hover states */
--pp-blue-800: #1e40af;
--pp-blue-900: #1e3a8a;
--pp-blue-950: #172554;
```

**Uso en Tailwind**:
```html
<button class="bg-pp-blue-600 hover:bg-pp-blue-700">Buscar Propiedades</button>
```

#### Secondary Colors

**Teal/Turquoise (Properties & Real Estate)**
```css
/* Color secundario para destacar propiedades */
--pp-teal-50: #f0fdfa;
--pp-teal-100: #ccfbf1;
--pp-teal-500: #14b8a6;
--pp-teal-600: #0d9488;
--pp-teal-700: #0f766e;
```

**Orange (Featured & Highlights)**
```css
/* Para propiedades destacadas y llamadas de atención */
--pp-orange-50: #fff7ed;
--pp-orange-100: #ffedd5;
--pp-orange-500: #f97316;
--pp-orange-600: #ea580c;
```

### Neutral Scale (Grays)

```css
/* Backgrounds, text, borders */
--pp-neutral-50: #fafafa;    /* Subtle backgrounds */
--pp-neutral-100: #f5f5f5;   /* Light sections */
--pp-neutral-200: #e5e5e5;   /* Borders */
--pp-neutral-300: #d4d4d4;   /* Dividers */
--pp-neutral-400: #a3a3a3;   /* Disabled text */
--pp-neutral-500: #737373;   /* Supporting text */
--pp-neutral-600: #525252;   /* Secondary text */
--pp-neutral-700: #404040;   /* Body text */
--pp-neutral-800: #262626;   /* Dark sections */
--pp-neutral-900: #171717;   /* Headings */
--pp-neutral-950: #0a0a0a;   /* Darkest */
```

### Semantic Colors

#### Success (Availability, Confirmed)
```css
--pp-success-50: #f0fdf4;
--pp-success-100: #dcfce7;
--pp-success-500: #22c55e;
--pp-success-600: #16a34a;
--pp-success-700: #15803d;
```

#### Warning (Price Changes, Important)
```css
--pp-warning-50: #fffbeb;
--pp-warning-100: #fef3c7;
--pp-warning-500: #f59e0b;
--pp-warning-600: #d97706;
--pp-warning-700: #b45309;
```

#### Error (Sold, Unavailable)
```css
--pp-error-50: #fef2f2;
--pp-error-100: #fee2e2;
--pp-error-500: #ef4444;
--pp-error-600: #dc2626;
--pp-error-700: #b91c1c;
```

#### Info (Details, Instructions)
```css
--pp-info-50: #eff6ff;
--pp-info-100: #dbeafe;
--pp-info-500: #3b82f6;
--pp-info-600: #2563eb;
```

### Background Colors

#### Light Mode
```css
--pp-bg-primary: #ffffff;        /* Main background */
--pp-bg-secondary: #fafafa;      /* Sections, cards */
--pp-bg-tertiary: #f5f5f5;       /* Wells, inputs */
--pp-bg-elevated: #ffffff;       /* Modals, dropdowns */
--pp-bg-overlay: rgba(0,0,0,0.5); /* Modal overlays */
```

#### Dark Mode
```css
--pp-bg-primary-dark: #0a0a0a;      /* Main background */
--pp-bg-secondary-dark: #171717;    /* Sections */
--pp-bg-tertiary-dark: #262626;     /* Cards */
--pp-bg-elevated-dark: #171717;     /* Modals */
--pp-bg-overlay-dark: rgba(0,0,0,0.7);
```

### Text Colors

#### Light Mode
```css
--pp-text-primary: #171717;      /* Headings, titles */
--pp-text-secondary: #404040;    /* Body text */
--pp-text-muted: #737373;        /* Supporting text */
--pp-text-disabled: #a3a3a3;     /* Disabled */
--pp-text-link: #2563eb;         /* Links */
--pp-text-link-hover: #1d4ed8;   /* Link hover */
```

#### Dark Mode
```css
--pp-text-primary-dark: #fafafa;
--pp-text-secondary-dark: #e5e5e5;
--pp-text-muted-dark: #a3a3a3;
--pp-text-disabled-dark: #525252;
--pp-text-link-dark: #60a5fa;
--pp-text-link-hover-dark: #3b82f6;
```

### Border Colors

```css
/* Light Mode */
--pp-border-subtle: #e5e5e5;
--pp-border-default: #d4d4d4;
--pp-border-strong: #a3a3a3;

/* Dark Mode */
--pp-border-subtle-dark: #262626;
--pp-border-default-dark: #404040;
--pp-border-strong-dark: #525252;
```

### Color Usage Examples

```html
<!-- Primary Actions -->
<button class="bg-pp-blue-600 text-white hover:bg-pp-blue-700">
  Buscar Propiedades
</button>

<!-- Secondary Actions -->
<button class="bg-pp-neutral-100 text-pp-neutral-900 hover:bg-pp-neutral-200">
  Ver Más
</button>

<!-- Property Cards -->
<div class="bg-white border border-pp-neutral-200 rounded-lg">
  <!-- Featured property -->
  <span class="bg-pp-orange-500 text-white">Destacada</span>
</div>

<!-- Status Badges -->
<span class="bg-pp-success-100 text-pp-success-700">Disponible</span>
<span class="bg-pp-error-100 text-pp-error-700">Vendida</span>
<span class="bg-pp-warning-100 text-pp-warning-700">Reservada</span>

<!-- Text Hierarchy -->
<h1 class="text-pp-neutral-900 dark:text-pp-neutral-50">Título</h1>
<p class="text-pp-neutral-700 dark:text-pp-neutral-200">Texto principal</p>
<span class="text-pp-neutral-500 dark:text-pp-neutral-400">Texto secundario</span>
```

---

## Typography

### Font Families

PuntaProp utiliza fuentes del sistema para óptima performance y legibilidad:

```css
/* Sans-serif - Principal */
--pp-font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Monospace - Códigos, datos técnicos */
--pp-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo,
                Consolas, "Liberation Mono", monospace;

/* Opcional: Fuente display para títulos grandes */
--pp-font-display: var(--pp-font-sans);
```

### Type Scale

Escala tipográfica optimizada para contenido de real estate:

```css
/* Font Sizes */
--pp-text-xs: 0.75rem;      /* 12px - Labels, metadata */
--pp-text-sm: 0.875rem;     /* 14px - Supporting text */
--pp-text-base: 1rem;       /* 16px - Body text */
--pp-text-md: 1.125rem;     /* 18px - Large body */
--pp-text-lg: 1.25rem;      /* 20px - Small headings */
--pp-text-xl: 1.5rem;       /* 24px - Section titles */
--pp-text-2xl: 1.875rem;    /* 30px - Page titles */
--pp-text-3xl: 2.25rem;     /* 36px - Hero h2 */
--pp-text-4xl: 3rem;        /* 48px - Hero h1 (tablet) */
--pp-text-5xl: 3.75rem;     /* 60px - Hero h1 (desktop) */

/* Line Heights */
--pp-leading-none: 1;
--pp-leading-tight: 1.25;
--pp-leading-snug: 1.375;
--pp-leading-normal: 1.5;
--pp-leading-relaxed: 1.625;
--pp-leading-loose: 2;

/* Letter Spacing */
--pp-tracking-tighter: -0.05em;
--pp-tracking-tight: -0.025em;
--pp-tracking-normal: 0em;
--pp-tracking-wide: 0.025em;
--pp-tracking-wider: 0.05em;
```

### Font Weights

```css
--pp-font-light: 300;       /* Subtle emphasis */
--pp-font-normal: 400;      /* Body text */
--pp-font-medium: 500;      /* Emphasis */
--pp-font-semibold: 600;    /* Subheadings */
--pp-font-bold: 700;        /* Headings */
--pp-font-extrabold: 800;   /* Hero text */
```

### Typography Styles

#### Headings

```html
<!-- H1 - Page Title / Hero -->
<h1 class="text-4xl md:text-5xl font-bold text-pp-neutral-900 dark:text-pp-neutral-50 leading-tight tracking-tight">
  Encontrá tu Propiedad en Punta del Este
</h1>

<!-- H2 - Section Heading -->
<h2 class="text-2xl md:text-3xl font-bold text-pp-neutral-900 dark:text-pp-neutral-50 leading-tight">
  Propiedades Destacadas
</h2>

<!-- H3 - Subsection -->
<h3 class="text-xl md:text-2xl font-semibold text-pp-neutral-900 dark:text-pp-neutral-50">
  Inmobiliarias de Confianza
</h3>

<!-- H4 - Component Title -->
<h4 class="text-lg md:text-xl font-semibold text-pp-neutral-900 dark:text-pp-neutral-50">
  Detalles de la Propiedad
</h4>
```

#### Body Text

```html
<!-- Lead / Intro -->
<p class="text-md md:text-lg text-pp-neutral-600 dark:text-pp-neutral-300 leading-relaxed max-w-2xl">
  Descubrí las mejores propiedades en Punta del Este
</p>

<!-- Body Text -->
<p class="text-base text-pp-neutral-700 dark:text-pp-neutral-200 leading-normal">
  Texto principal de descripción de propiedades
</p>

<!-- Small Text -->
<p class="text-sm text-pp-neutral-600 dark:text-pp-neutral-300">
  Información secundaria o metadata
</p>

<!-- Caption / Label -->
<span class="text-xs text-pp-neutral-500 dark:text-pp-neutral-400">
  Última actualización: Hoy
</span>
```

#### Property-Specific Typography

```html
<!-- Property Price -->
<div class="text-2xl md:text-3xl font-bold text-pp-blue-600">
  USD 1.500.000
</div>

<!-- Property Title -->
<h3 class="text-xl font-semibold text-pp-neutral-900">
  Casa 4 Dormitorios en La Barra
</h3>

<!-- Property Specs -->
<div class="flex gap-4 text-sm text-pp-neutral-600">
  <span>🛏️ 4 dorm</span>
  <span>🛁 3 baños</span>
  <span>📐 250 m²</span>
  <span>🚗 2 garages</span>
</div>

<!-- Agency Name -->
<div class="text-sm font-medium text-pp-neutral-700">
  Inmobiliaria Punta Real Estate
</div>
```

---

## Logo & Branding Assets

### Logo Files

Los logos se encuentran embedidos en el sitio original. Para extraerlos:

**Ubicación**:
- Favicon original: `backup_old_website/assets/favicons/favicon-310.png`
- Logos en base64: En HTML head del sitio original

### Logo Usage Guidelines

#### Logo Variations

```
logos/
├── puntaprop-logo-primary.png      # Logo principal (fondo claro)
├── puntaprop-logo-white.png        # Logo blanco (fondo oscuro)
├── puntaprop-logo-icon.png         # Solo icono
└── puntaprop-logo-wordmark.png     # Solo texto
```

#### Logo Sizes

```html
<!-- Header Desktop -->
<img src="/logos/puntaprop-logo-primary.png" alt="PuntaProp" class="h-12 w-auto" />

<!-- Header Mobile -->
<img src="/logos/puntaprop-logo-icon.png" alt="PuntaProp" class="h-10 w-auto" />

<!-- Footer -->
<img src="/logos/puntaprop-logo-white.png" alt="PuntaProp" class="h-8 w-auto" />

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="310x310" href="/favicon-310.png" />
```

#### Clear Space

- Mantener espacio mínimo de 16px alrededor del logo
- No modificar proporciones
- No cambiar colores del logo
- Fondo preferido: blanco o transparente

### Favicons

```html
<!-- Standard Favicon -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- MS Tile -->
<meta name="msapplication-TileImage" content="/ms-tile-310.png" />
<meta name="msapplication-TileColor" content="#FFFFFF" />

<!-- PWA -->
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#ffffff" />
```

---

## Spacing System

Sistema de espaciado basado en 4px para consistencia visual:

### Spacing Scale

```css
--pp-space-0: 0px;      /* 0 */
--pp-space-px: 1px;     /* Hairline */
--pp-space-0.5: 2px;    /* 0.5 */
--pp-space-1: 4px;      /* 1 */
--pp-space-1.5: 6px;    /* 1.5 */
--pp-space-2: 8px;      /* 2 */
--pp-space-2.5: 10px;   /* 2.5 */
--pp-space-3: 12px;     /* 3 */
--pp-space-3.5: 14px;   /* 3.5 */
--pp-space-4: 16px;     /* 4 - Base */
--pp-space-5: 20px;     /* 5 */
--pp-space-6: 24px;     /* 6 */
--pp-space-7: 28px;     /* 7 */
--pp-space-8: 32px;     /* 8 */
--pp-space-10: 40px;    /* 10 */
--pp-space-12: 48px;    /* 12 */
--pp-space-14: 56px;    /* 14 */
--pp-space-16: 64px;    /* 16 */
--pp-space-20: 80px;    /* 20 */
--pp-space-24: 96px;    /* 24 */
--pp-space-32: 128px;   /* 32 */
```

### Common Spacing Patterns

#### Property Card Spacing
```html
<div class="p-4 md:p-6 space-y-4">
  <!-- Property image -->
  <div class="aspect-video">...</div>

  <!-- Property info -->
  <div class="space-y-3">
    <h3>Property Title</h3>
    <p>Description</p>
  </div>
</div>
```

#### Section Spacing
```html
<!-- Hero Section -->
<section class="py-16 md:py-24 lg:py-32">
  ...
</section>

<!-- Content Section -->
<section class="py-12 md:py-16 lg:py-20">
  ...
</section>

<!-- Compact Section -->
<section class="py-8 md:py-12">
  ...
</section>
```

#### Container Spacing
```html
<!-- Main Container -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  ...
</div>

<!-- Content Stack -->
<div class="space-y-6 md:space-y-8">
  ...
</div>

<!-- Property Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  ...
</div>
```

---

## Component Styles

### Buttons

#### Primary Button
```html
<button class="
  px-6 py-3 rounded-lg
  bg-pp-blue-600 text-white font-semibold
  hover:bg-pp-blue-700
  active:bg-pp-blue-800
  transition-colors duration-200
  shadow-sm hover:shadow-md
">
  Buscar Propiedades
</button>
```

#### Secondary Button
```html
<button class="
  px-6 py-3 rounded-lg
  bg-white text-pp-neutral-900 font-semibold
  border-2 border-pp-neutral-300
  hover:border-pp-neutral-400 hover:bg-pp-neutral-50
  transition-colors duration-200
">
  Ver Más
</button>
```

#### Ghost Button
```html
<button class="
  px-4 py-2 rounded-lg
  text-pp-neutral-700 font-medium
  hover:bg-pp-neutral-100
  transition-colors duration-200
">
  Favoritos
</button>
```

#### Icon Button
```html
<button class="
  p-2 rounded-lg
  text-pp-neutral-600
  hover:bg-pp-neutral-100
  transition-colors duration-200
">
  <Icon name="lucide:heart" class="w-5 h-5" />
</button>
```

### Property Cards

#### Featured Property Card
```html
<div class="
  group relative
  bg-white rounded-xl overflow-hidden
  border border-pp-neutral-200
  hover:shadow-lg transition-shadow duration-300
">
  <!-- Featured Badge -->
  <div class="absolute top-4 right-4 z-10">
    <span class="
      px-3 py-1 rounded-full text-xs font-semibold
      bg-pp-orange-500 text-white
    ">
      Destacada
    </span>
  </div>

  <!-- Image -->
  <div class="aspect-[4/3] overflow-hidden">
    <img
      src="..."
      alt="Property"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <!-- Content -->
  <div class="p-6 space-y-4">
    <!-- Price -->
    <div class="text-2xl font-bold text-pp-blue-600">
      USD 1.500.000
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-pp-neutral-900">
      Casa 4 Dormitorios en La Barra
    </h3>

    <!-- Specs -->
    <div class="flex gap-4 text-sm text-pp-neutral-600">
      <span>🛏️ 4 dorm</span>
      <span>🛁 3 baños</span>
      <span>📐 250 m²</span>
    </div>

    <!-- Location -->
    <div class="flex items-center gap-2 text-sm text-pp-neutral-600">
      <Icon name="lucide:map-pin" class="w-4 h-4" />
      <span>La Barra, Punta del Este</span>
    </div>

    <!-- Actions -->
    <div class="flex gap-2 pt-4 border-t border-pp-neutral-200">
      <button class="flex-1 btn-primary">Ver Detalles</button>
      <button class="btn-ghost">
        <Icon name="lucide:heart" class="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
```

### Search Filters

```html
<div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
  <!-- Operation Type -->
  <div class="flex gap-2">
    <button class="flex-1 btn-primary">Comprar</button>
    <button class="flex-1 btn-secondary">Alquilar</button>
    <button class="flex-1 btn-secondary">Temporada</button>
  </div>

  <!-- Property Type -->
  <USelect
    v-model="propertyType"
    :options="propertyTypes"
    placeholder="Tipo de Propiedad"
  />

  <!-- Location -->
  <USelect
    v-model="location"
    :options="locations"
    placeholder="Zona"
  />

  <!-- Price Range -->
  <div class="grid grid-cols-2 gap-4">
    <UInput
      v-model="priceMin"
      type="number"
      placeholder="Precio mín"
    />
    <UInput
      v-model="priceMax"
      type="number"
      placeholder="Precio máx"
    />
  </div>

  <!-- Search Button -->
  <UButton block>Buscar</UButton>
</div>
```

### Agency Card

```html
<div class="bg-white rounded-lg border border-pp-neutral-200 p-6 space-y-4">
  <!-- Logo -->
  <div class="aspect-video flex items-center justify-center bg-pp-neutral-50">
    <img src="..." alt="Agency Logo" class="max-h-20 w-auto" />
  </div>

  <!-- Name -->
  <h3 class="text-lg font-semibold text-pp-neutral-900">
    Inmobiliaria Punta Real Estate
  </h3>

  <!-- Contact -->
  <div class="space-y-2 text-sm text-pp-neutral-600">
    <div class="flex items-center gap-2">
      <Icon name="lucide:phone" class="w-4 h-4" />
      <span>+598 99 123 456</span>
    </div>
    <div class="flex items-center gap-2">
      <Icon name="lucide:mail" class="w-4 h-4" />
      <span>info@puntare.com</span>
    </div>
  </div>

  <!-- Action -->
  <UButton block variant="outline">Ver Propiedades</UButton>
</div>
```

---

## Shadows & Elevation

```css
/* Elevation System */
--pp-shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--pp-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--pp-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--pp-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--pp-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--pp-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Usage

```html
<!-- Cards -->
<div class="shadow-sm hover:shadow-md transition-shadow">Card</div>

<!-- Featured Elements -->
<div class="shadow-lg">Featured</div>

<!-- Modals -->
<div class="shadow-2xl">Modal</div>
```

---

## Animations & Transitions

### Transition Durations

```css
--pp-duration-75: 75ms;
--pp-duration-100: 100ms;
--pp-duration-150: 150ms;
--pp-duration-200: 200ms;   /* Default */
--pp-duration-300: 300ms;
--pp-duration-500: 500ms;
```

### Common Transitions

```html
<!-- Hover Effects -->
<div class="transition-colors duration-200 hover:bg-pp-neutral-100">

<!-- Transform -->
<img class="transition-transform duration-300 hover:scale-105" />

<!-- Shadow -->
<div class="transition-shadow duration-200 hover:shadow-lg">

<!-- Multiple Properties -->
<div class="transition-all duration-200">
```

---

## Border Styles

```css
--pp-border-width: 1px;
--pp-border-width-2: 2px;
--pp-border-width-4: 4px;
```

```html
<!-- Standard Border -->
<div class="border border-pp-neutral-200">

<!-- Thick Border -->
<div class="border-2 border-pp-blue-600">

<!-- Specific Sides -->
<div class="border-b border-pp-neutral-200">
```

---

## Border Radius

```css
--pp-radius-sm: 0.375rem;   /* 6px */
--pp-radius-md: 0.5rem;     /* 8px - Default */
--pp-radius-lg: 0.75rem;    /* 12px */
--pp-radius-xl: 1rem;       /* 16px */
--pp-radius-2xl: 1.5rem;    /* 24px */
--pp-radius-full: 9999px;   /* Pills */
```

```html
<!-- Property Cards -->
<div class="rounded-xl">

<!-- Buttons -->
<button class="rounded-lg">

<!-- Badges -->
<span class="rounded-full">
```

---

## Opacity & Transparency

```css
--pp-opacity-0: 0;
--pp-opacity-50: 0.5;
--pp-opacity-80: 0.8;
--pp-opacity-100: 1;
```

```html
<!-- Disabled State -->
<button class="opacity-50 cursor-not-allowed">

<!-- Overlay -->
<div class="bg-black/50 backdrop-blur-sm">
```

---

## Z-Index Layers

```css
--pp-z-dropdown: 10;
--pp-z-sticky: 20;
--pp-z-modal: 30;
--pp-z-notification: 40;
--pp-z-tooltip: 50;
```

```html
<!-- Header -->
<header class="sticky top-0 z-20">

<!-- Modal -->
<div class="fixed inset-0 z-30">
```

---

## Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px    /* Mobile Large */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop Small */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Desktop Large */
```

```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Responsive Text -->
<h1 class="text-3xl md:text-4xl lg:text-5xl">

<!-- Responsive Spacing -->
<section class="py-12 md:py-16 lg:py-20">
```

---

## CSS Variables

### In `app/app.config.ts`

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',      // PuntaProp blue
      neutral: 'neutral'    // Gray scale
    }
  }
})
```

### Custom Variables in `app/assets/css/main.css`

```css
@layer base {
  :root {
    /* PuntaProp Brand Colors */
    --color-pp-blue: #2563eb;
    --color-pp-teal: #14b8a6;
    --color-pp-orange: #f97316;

    /* Spacing */
    --container-max-width: 1280px;
    --section-spacing: 5rem;

    /* Transitions */
    --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}
```

---

## Layout Patterns

### Container

```html
<UContainer class="py-12 md:py-16">
  <!-- Content -->
</UContainer>
```

### Property Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- Property cards -->
</div>
```

### Hero Section

```html
<section class="relative py-20 md:py-32 bg-pp-neutral-50">
  <UContainer>
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold">
        Encontrá tu Propiedad en Punta del Este
      </h1>
      <p class="text-lg text-pp-neutral-600">
        La guía completa del real estate
      </p>
    </div>
  </UContainer>
</section>
```

---

## Real Estate UI Patterns

### Property Specs Display

```html
<div class="flex flex-wrap gap-4 text-sm text-pp-neutral-600">
  <div class="flex items-center gap-2">
    <Icon name="lucide:bed" class="w-4 h-4" />
    <span>4 Dormitorios</span>
  </div>
  <div class="flex items-center gap-2">
    <Icon name="lucide:bath" class="w-4 h-4" />
    <span>3 Baños</span>
  </div>
  <div class="flex items-center gap-2">
    <Icon name="lucide:ruler" class="w-4 h-4" />
    <span>250 m²</span>
  </div>
  <div class="flex items-center gap-2">
    <Icon name="lucide:car" class="w-4 h-4" />
    <span>2 Garages</span>
  </div>
</div>
```

### Price Display

```html
<div class="space-y-1">
  <div class="text-2xl md:text-3xl font-bold text-pp-blue-600">
    USD 1.500.000
  </div>
  <div class="text-sm text-pp-neutral-500">
    USD 6.000/m²
  </div>
</div>
```

### Contact Form

```html
<div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
  <h3 class="text-xl font-semibold">Consultá por esta propiedad</h3>

  <UInput placeholder="Tu nombre" />
  <UInput type="email" placeholder="Tu email" />
  <UInput type="tel" placeholder="Tu teléfono" />
  <UTextarea placeholder="Tu mensaje" :rows="4" />

  <UButton block>Enviar Consulta</UButton>

  <p class="text-xs text-pp-neutral-500 text-center">
    Al enviar aceptás nuestra política de privacidad
  </p>
</div>
```

---

## Example Component Reference

### Complete Property Card

```vue
<template>
  <div class="
    group relative
    bg-white rounded-xl overflow-hidden
    border border-pp-neutral-200
    hover:shadow-lg transition-shadow duration-300
  ">
    <!-- Featured Badge -->
    <div v-if="property.featured" class="absolute top-4 right-4 z-10">
      <span class="px-3 py-1 rounded-full text-xs font-semibold bg-pp-orange-500 text-white">
        Destacada
      </span>
    </div>

    <!-- Image -->
    <div class="aspect-[4/3] overflow-hidden">
      <NuxtImg
        :src="property.image"
        :alt="property.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Price -->
      <div class="space-y-1">
        <div class="text-2xl font-bold text-pp-blue-600">
          {{ formatCurrency(property.price) }}
        </div>
        <div v-if="property.pricePerM2" class="text-sm text-pp-neutral-500">
          {{ formatCurrency(property.pricePerM2) }}/m²
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-pp-neutral-900 line-clamp-2">
        {{ property.title }}
      </h3>

      <!-- Specs -->
      <div class="flex flex-wrap gap-4 text-sm text-pp-neutral-600">
        <div v-if="property.bedrooms" class="flex items-center gap-2">
          <Icon name="lucide:bed" class="w-4 h-4" />
          <span>{{ property.bedrooms }} dorm</span>
        </div>
        <div v-if="property.bathrooms" class="flex items-center gap-2">
          <Icon name="lucide:bath" class="w-4 h-4" />
          <span>{{ property.bathrooms }} baños</span>
        </div>
        <div v-if="property.area" class="flex items-center gap-2">
          <Icon name="lucide:ruler" class="w-4 h-4" />
          <span>{{ property.area }} m²</span>
        </div>
        <div v-if="property.garages" class="flex items-center gap-2">
          <Icon name="lucide:car" class="w-4 h-4" />
          <span>{{ property.garages }} garages</span>
        </div>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-2 text-sm text-pp-neutral-600">
        <Icon name="lucide:map-pin" class="w-4 h-4" />
        <span>{{ property.location }}</span>
      </div>

      <!-- Actions -->
      <div class="flex gap-2 pt-4 border-t border-pp-neutral-200">
        <UButton
          :to="`/propiedades/${property.slug}`"
          class="flex-1"
        >
          Ver Detalles
        </UButton>
        <UButton
          variant="ghost"
          icon="lucide:heart"
          @click="toggleFavorite"
        />
        <UButton
          variant="ghost"
          icon="lucide:share-2"
          @click="share"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  property: {
    id: string
    title: string
    price: number
    pricePerM2?: number
    image: string
    bedrooms?: number
    bathrooms?: number
    area?: number
    garages?: number
    location: string
    featured?: boolean
    slug: string
  }
}>()

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-UY', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value)
}

const toggleFavorite = () => {
  // Toggle favorite logic
}

const share = () => {
  // Share logic
}
</script>
```

---

## Best Practices

### Performance
- Usar `<NuxtImg>` con lazy loading
- Optimizar imágenes de propiedades (WebP/AVIF)
- CDN para assets estáticos
- Code splitting por ruta

### Accessibility
- Contraste mínimo 4.5:1
- Labels en todos los inputs
- Focus indicators visibles
- Alt text descriptivo en imágenes de propiedades

### SEO
- Meta tags para propiedades
- Structured data (Schema.org/RealEstateListing)
- Sitemap con todas las propiedades
- URLs semánticas

### UX
- Búsqueda rápida y responsive
- Filtros intuitivos
- Imágenes de alta calidad
- Información clara de contacto

---

## Configuration Files

### `app/app.config.ts`

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  puntaprop: {
    contactEmail: 'info@puntaprop.com',
    contactPhone: '+598 99 123 456',
    social: {
      facebook: 'https://facebook.com/puntaprop',
      instagram: 'https://instagram.com/puntaprop',
      twitter: 'https://twitter.com/puntaprop'
    }
  }
})
```

---

**Última actualización**: 16 Noviembre 2024
**Versión**: 2.0.0
**Mantenido por**: Equipo PuntaProp
**Basado en**: Sitio original www.puntaprop.com
