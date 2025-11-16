# PuntaProp Design System - Style Guide

## Table of Contents

1. [Overview](#overview)
2. [Design Philosophy](#design-philosophy)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Component Styles](#component-styles)
7. [Shadows & Elevation](#shadows--elevation)
8. [Animations & Transitions](#animations--transitions)
9. [Border Styles](#border-styles)
10. [Border Radius](#border-radius)
11. [Opacity & Transparency](#opacity--transparency)
12. [Z-Index Layers](#z-index-layers)
13. [Responsive Breakpoints](#responsive-breakpoints)
14. [CSS Variables](#css-variables)
15. [Layout Patterns](#layout-patterns)
16. [Example Component Reference](#example-component-reference)

---

## Overview

This design system provides a comprehensive guide for building consistent, accessible, and beautiful UI components in our Nuxt 4 + Nuxt UI PuntaProp website. It leverages Tailwind CSS utilities and Nuxt UI's design tokens.

### Tech Stack
- **Framework**: Nuxt 4
- **UI Library**: Nuxt UI v4 (Radix Vue + Tailwind CSS)
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Iconify (Lucide + Simple Icons)
- **Animations**: Motion-v

---

## Design Philosophy

### Principles

**1. Content First**
- Design serves content, not the other way around
- Clear hierarchy and visual flow
- Readable typography and comfortable line-height

**2. Performance Matters**
- Optimized images with `<NuxtImg>`
- Minimal custom CSS, leverage Tailwind utilities
- Lazy loading for below-the-fold content

**3. Accessibility Always**
- WCAG 2.1 AA compliance minimum
- Keyboard navigation support
- Proper ARIA labels and semantic HTML
- Color contrast ratios meet standards

**4. Mobile First**
- Responsive by default
- Touch-friendly interactive elements (min 44px)
- Optimized for all screen sizes

**5. Dark Mode Native**
- All components work in both light and dark modes
- Thoughtful color choices for both themes
- Smooth mode transitions

---

## Color Palette

### Primary Colors

Current configuration in `app.config.ts`:
- **Primary**: `blue` (customizable via Nuxt UI color tokens)
- **Neutral**: `neutral`

#### Semantic Color Usage

```css
/* Brand Colors */
--color-primary-50: /* Lightest primary shade */
--color-primary-500: /* Main brand color */
--color-primary-600: /* Hover states */
--color-primary-700: /* Active states */
--color-primary-900: /* Darkest primary shade */

/* Neutral/Gray Scale */
--color-neutral-50: /* Subtle backgrounds */
--color-neutral-100: /* Borders, dividers */
--color-neutral-200: /* Disabled states */
--color-neutral-500: /* Secondary text */
--color-neutral-700: /* Body text */
--color-neutral-900: /* Headings */
```

#### Background Colors

```css
/* Light Mode */
--background-primary: white;        /* #ffffff - Main background, cards */
--background-secondary: neutral-50; /* #fafafa - Subtle sections */
--background-tertiary: neutral-100; /* #f5f5f5 - Code blocks, wells */

/* Dark Mode */
--background-primary: neutral-950;  /* #0a0a0a - Main background */
--background-secondary: neutral-900;/* #171717 - Subtle sections */
--background-tertiary: neutral-800; /* #262626 - Code blocks, wells */
```

#### Text Colors

```css
/* Light Mode */
--text-primary: neutral-900;   /* #171717 - Headings, primary text */
--text-secondary: neutral-700; /* #404040 - Body text */
--text-muted: neutral-500;     /* #737373 - Supporting text */
--text-disabled: neutral-400;  /* #a3a3a3 - Disabled elements */

/* Dark Mode */
--text-primary: neutral-50;    /* #fafafa - Headings, primary text */
--text-secondary: neutral-200; /* #e5e5e5 - Body text */
--text-muted: neutral-400;     /* #a3a3a3 - Supporting text */
--text-disabled: neutral-600;  /* #525252 - Disabled elements */
```

#### Interactive Colors

```css
/* Links */
--link-default: primary-600;    /* Default state */
--link-hover: primary-700;      /* Hover state */
--link-active: primary-800;     /* Active/pressed state */
--link-visited: purple-600;     /* Visited links (optional) */

/* Borders */
--border-subtle: neutral-200;   /* Light mode - subtle dividers */
--border-default: neutral-300;  /* Light mode - standard borders */
--border-strong: neutral-400;   /* Light mode - emphasized borders */

--border-subtle-dark: neutral-800;  /* Dark mode - subtle dividers */
--border-default-dark: neutral-700; /* Dark mode - standard borders */
--border-strong-dark: neutral-600;  /* Dark mode - emphasized borders */
```

#### Status Colors

```css
/* Success */
--color-success: green-600;
--color-success-bg: green-50;
--color-success-border: green-200;

/* Warning */
--color-warning: amber-600;
--color-warning-bg: amber-50;
--color-warning-border: amber-200;

/* Error */
--color-error: red-600;
--color-error-bg: red-50;
--color-error-border: red-200;

/* Info */
--color-info: blue-600;
--color-info-bg: blue-50;
--color-info-border: blue-200;
```

### Tailwind Class Reference

```html
<!-- Primary colors -->
<div class="bg-primary-500 text-primary-50">Primary background</div>
<div class="text-primary-600 hover:text-primary-700">Primary text</div>

<!-- Neutral/Background -->
<div class="bg-white dark:bg-neutral-950">Page background</div>
<div class="bg-neutral-50 dark:bg-neutral-900">Section background</div>

<!-- Text colors -->
<h1 class="text-neutral-900 dark:text-neutral-50">Heading</h1>
<p class="text-neutral-700 dark:text-neutral-200">Body text</p>
<span class="text-neutral-500 dark:text-neutral-400">Muted text</span>

<!-- Borders -->
<div class="border border-neutral-200 dark:border-neutral-800">Card</div>
```

---

## Typography

### Font Families

Nuxt UI uses system fonts by default for optimal performance:

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo,
             Consolas, "Liberation Mono", monospace;
```

### Type Scale

Following a modular scale for consistent hierarchy:

```css
/* Font Sizes */
--text-xs: 0.75rem;      /* 12px - Small labels, captions */
--text-sm: 0.875rem;     /* 14px - Supporting text */
--text-base: 1rem;       /* 16px - Body text */
--text-md: 1.125rem;     /* 18px - Large body text */
--text-lg: 1.25rem;      /* 20px - Small headings */
--text-xl: 1.5rem;       /* 24px - Section headings */
--text-2xl: 2rem;        /* 32px - Page headings */
--text-3xl: 2.5rem;      /* 40px - Hero headings (mobile) */
--text-4xl: 3rem;        /* 48px - Hero headings (tablet) */
--text-5xl: 4rem;        /* 64px - Hero headings (desktop) */

/* Line Heights */
--leading-none: 1;       /* Tight headings */
--leading-tight: 1.25;   /* Headings */
--leading-snug: 1.375;   /* Large text */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.625;/* Comfortable reading */
--leading-loose: 2;      /* Spacious text */
```

### Font Weights

```css
--font-light: 300;       /* Subtle text */
--font-normal: 400;      /* Body text */
--font-medium: 500;      /* Emphasized text */
--font-semibold: 600;    /* Subheadings */
--font-bold: 700;        /* Headings */
--font-extrabold: 800;   /* Hero text */
```

### Typography Styles

#### Headings

```html
<!-- H1 - Hero Heading -->
<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
  Hero Heading
</h1>

<!-- H2 - Section Heading -->
<h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
  Section Heading
</h2>

<!-- H3 - Subsection Heading -->
<h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 leading-snug">
  Subsection Heading
</h3>

<!-- H4 - Component Heading -->
<h4 class="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-50">
  Component Heading
</h4>
```

#### Body Text

```html
<!-- Large body text -->
<p class="text-md text-neutral-700 dark:text-neutral-200 leading-relaxed">
  Large body text for introductions and emphasis.
</p>

<!-- Regular body text -->
<p class="text-base text-neutral-700 dark:text-neutral-200 leading-normal">
  Standard body text for most content.
</p>

<!-- Small text -->
<p class="text-sm text-neutral-600 dark:text-neutral-300 leading-normal">
  Small text for secondary information.
</p>

<!-- Muted text -->
<p class="text-sm text-neutral-500 dark:text-neutral-400">
  Muted text for metadata and supporting info.
</p>
```

#### Special Text Styles

```html
<!-- Lead paragraph -->
<p class="text-md sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
  Lead paragraph with comfortable reading width.
</p>

<!-- Caption -->
<figcaption class="text-xs text-neutral-500 dark:text-neutral-400 italic">
  Image caption or small print
</figcaption>

<!-- Code inline -->
<code class="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-sm font-mono rounded">
  inline code
</code>

<!-- Link -->
<a class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline underline-offset-2 transition-colors">
  Text link
</a>
```

---

## Spacing System

Nuxt UI and Tailwind use a consistent 4px spacing scale:

### Spacing Scale

```css
0:    0px      /* No spacing */
px:   1px      /* Hairline */
0.5:  2px      /* Tiny gaps */
1:    4px      /* Extra small */
1.5:  6px
2:    8px      /* Small */
3:    12px     /* Medium-small */
4:    16px     /* Medium */
5:    20px     /* Medium-large */
6:    24px     /* Large */
7:    28px
8:    32px     /* Extra large */
10:   40px     /* XXL */
12:   48px     /* XXXL */
16:   64px     /* Section spacing */
20:   80px     /* Large sections */
24:   96px     /* Hero sections */
```

### Common Spacing Patterns

#### Component Spacing

```html
<!-- Button padding -->
<button class="px-4 py-2">         <!-- Small button -->
<button class="px-6 py-3">         <!-- Medium button -->
<button class="px-8 py-4">         <!-- Large button -->

<!-- Card padding -->
<div class="p-4">                  <!-- Compact card -->
<div class="p-6">                  <!-- Standard card -->
<div class="p-8">                  <!-- Spacious card -->

<!-- Input padding -->
<input class="px-3 py-2">          <!-- Standard input -->
```

#### Layout Spacing

```html
<!-- Container -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">

<!-- Section vertical spacing -->
<section class="py-12 sm:py-16 lg:py-20">    <!-- Standard section -->
<section class="py-18 sm:py-24 lg:py-32">    <!-- Hero section -->

<!-- Stack spacing (vertical) -->
<div class="space-y-2">   <!-- Tight stack (labels, form elements) -->
<div class="space-y-4">   <!-- Medium stack (list items) -->
<div class="space-y-6">   <!-- Comfortable stack (sections) -->
<div class="space-y-8">   <!-- Loose stack (major sections) -->

<!-- Grid gap -->
<div class="grid gap-4">  <!-- Compact grid -->
<div class="grid gap-6">  <!-- Standard grid -->
<div class="grid gap-8">  <!-- Spacious grid -->
```

#### Content Width

```html
<!-- Reading width (prose) -->
<div class="max-w-prose">        <!-- ~65ch, optimal for reading -->
<div class="max-w-2xl">          <!-- 672px -->
<div class="max-w-4xl">          <!-- 896px -->
<div class="max-w-6xl">          <!-- 1152px -->
<div class="max-w-7xl">          <!-- 1280px -->
```

---

## Component Styles

### Buttons

Use Nuxt UI's `<UButton>` component with variants:

```vue
<!-- Primary button -->
<UButton color="primary" variant="solid">
  Primary Action
</UButton>

<!-- Secondary button -->
<UButton color="neutral" variant="outline">
  Secondary Action
</UButton>

<!-- Ghost button -->
<UButton variant="ghost">
  Tertiary Action
</UButton>

<!-- Link button -->
<UButton variant="link">
  Link Action
</UButton>

<!-- Sizes -->
<UButton size="xs">Extra Small</UButton>
<UButton size="sm">Small</UButton>
<UButton size="md">Medium (default)</UButton>
<UButton size="lg">Large</UButton>
<UButton size="xl">Extra Large</UButton>

<!-- With icon -->
<UButton icon="i-lucide-arrow-right" trailing>
  Next
</UButton>
```

#### Custom Button Styles

```html
<!-- Base button classes -->
<button class="
  inline-flex items-center justify-center gap-2
  px-4 py-2 rounded-md
  font-medium text-sm
  transition-colors duration-200
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Custom Button
</button>

<!-- Primary variant -->
<button class="
  bg-primary-600 text-white
  hover:bg-primary-700
  active:bg-primary-800
  focus-visible:outline-primary-600
">
  Primary
</button>

<!-- Secondary variant -->
<button class="
  bg-neutral-100 text-neutral-900
  dark:bg-neutral-800 dark:text-neutral-100
  hover:bg-neutral-200 dark:hover:bg-neutral-700
  border border-neutral-300 dark:border-neutral-600
">
  Secondary
</button>
```

### Cards

Use Nuxt UI's `<UCard>` component:

```vue
<!-- Basic card -->
<UCard>
  <template #header>
    <h3 class="text-lg font-semibold">Card Title</h3>
  </template>

  <p>Card content goes here.</p>

  <template #footer>
    <UButton>Action</UButton>
  </template>
</UCard>

<!-- Custom card -->
<div class="
  bg-white dark:bg-neutral-900
  border border-neutral-200 dark:border-neutral-800
  rounded-lg
  p-6
  shadow-sm
  hover:shadow-md
  transition-shadow duration-200
">
  Card content
</div>
```

### Forms

```vue
<!-- Input -->
<UInput
  v-model="value"
  placeholder="Enter text..."
  size="md"
/>

<!-- Textarea -->
<UTextarea
  v-model="text"
  placeholder="Enter description..."
  :rows="4"
/>

<!-- Select -->
<USelect
  v-model="selected"
  :options="options"
/>

<!-- Checkbox -->
<UCheckbox
  v-model="checked"
  label="Accept terms"
/>

<!-- Custom input -->
<input class="
  w-full px-3 py-2
  bg-white dark:bg-neutral-900
  border border-neutral-300 dark:border-neutral-700
  rounded-md
  text-base text-neutral-900 dark:text-neutral-100
  placeholder:text-neutral-400 dark:placeholder:text-neutral-500
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
  disabled:opacity-50 disabled:cursor-not-allowed
">
```

### Navigation

```vue
<!-- Header navigation -->
<nav class="
  sticky top-0 z-50
  bg-white/80 dark:bg-neutral-950/80
  backdrop-blur-md
  border-b border-neutral-200 dark:border-neutral-800
">
  <UContainer class="flex items-center justify-between h-16">
    <!-- Nav content -->
  </UContainer>
</nav>

<!-- Nav links -->
<a class="
  text-sm font-medium
  text-neutral-700 dark:text-neutral-200
  hover:text-primary-600 dark:hover:text-primary-400
  transition-colors
">
  Link
</a>
```

---

## Shadows & Elevation

Consistent shadow system for depth and hierarchy:

```css
/* Shadow Scale */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Usage Examples

```html
<!-- Flat (no shadow) -->
<div class="shadow-none">No elevation</div>

<!-- Subtle elevation -->
<div class="shadow-sm">Subtle card</div>

<!-- Standard elevation -->
<div class="shadow-md">Standard card</div>

<!-- Elevated -->
<div class="shadow-lg">Modal, dropdown</div>

<!-- Floating -->
<div class="shadow-xl">Floating action button</div>

<!-- Hover states -->
<div class="shadow-sm hover:shadow-md transition-shadow">
  Interactive card
</div>

<!-- Dark mode shadows -->
<div class="shadow-md dark:shadow-neutral-900/50">
  Shadow with dark mode adjustment
</div>
```

### Elevation Hierarchy

- **Level 0** (shadow-none): Flat elements, inline content
- **Level 1** (shadow-sm): Subtle cards, list items
- **Level 2** (shadow-md): Cards, raised buttons
- **Level 3** (shadow-lg): Dropdowns, popovers
- **Level 4** (shadow-xl): Modals, drawers
- **Level 5** (shadow-2xl): Important floating elements

---

## Animations & Transitions

Smooth, purposeful animations enhance UX without being distracting.

### Transition Durations

```css
--duration-75: 75ms;     /* Instant feedback */
--duration-100: 100ms;   /* Quick transitions */
--duration-150: 150ms;   /* Fast transitions */
--duration-200: 200ms;   /* Standard transitions */
--duration-300: 300ms;   /* Slow transitions */
--duration-500: 500ms;   /* Deliberate animations */
--duration-700: 700ms;   /* Page transitions */
```

### Easing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Transitions

```html
<!-- Color transitions -->
<div class="transition-colors duration-200">
  Color change
</div>

<!-- All properties -->
<div class="transition-all duration-300">
  Multiple properties
</div>

<!-- Transform -->
<div class="transition-transform duration-200 hover:scale-105">
  Scale on hover
</div>

<!-- Opacity -->
<div class="transition-opacity duration-300">
  Fade in/out
</div>

<!-- Multiple properties -->
<div class="transition-[colors,transform] duration-200 ease-out">
  Specific properties
</div>
```

### Animation Patterns

```html
<!-- Fade in -->
<div class="animate-in fade-in duration-500">
  Fade in
</div>

<!-- Slide in from bottom -->
<div class="animate-in slide-in-from-bottom duration-500">
  Slide up
</div>

<!-- Spin (loading) -->
<div class="animate-spin">
  Loading spinner
</div>

<!-- Pulse (attention) -->
<div class="animate-pulse">
  Loading skeleton
</div>

<!-- Bounce -->
<div class="animate-bounce">
  Scroll indicator
</div>
```

### Motion Preferences

Always respect user preferences:

```html
<!-- Disable animations for reduced motion -->
<div class="motion-safe:transition-all motion-reduce:transition-none">
  Respects prefers-reduced-motion
</div>
```

### Usage Guidelines

- **Hover states**: 100-200ms
- **Active/pressed states**: 75-100ms
- **Page transitions**: 300-500ms
- **Modals/overlays**: 200-300ms
- **Micro-interactions**: 150-200ms

---

## Border Styles

### Border Widths

```css
--border-0: 0px;
--border: 1px;      /* Default border */
--border-2: 2px;    /* Thick border */
--border-4: 4px;    /* Extra thick */
--border-8: 8px;    /* Accent borders */
```

### Border Usage

```html
<!-- Standard border -->
<div class="border border-neutral-200 dark:border-neutral-800">
  Standard border
</div>

<!-- Specific sides -->
<div class="border-t border-neutral-200">Top border</div>
<div class="border-b border-neutral-200">Bottom border</div>
<div class="border-l-4 border-primary-600">Accent left border</div>

<!-- Thick borders -->
<div class="border-2 border-primary-600">
  Emphasized border
</div>

<!-- Interactive borders -->
<div class="
  border border-neutral-300
  hover:border-primary-500
  focus-within:border-primary-600 focus-within:ring-2 focus-within:ring-primary-500/20
  transition-colors
">
  Interactive element
</div>
```

---

## Border Radius

Consistent corner rounding for visual harmony:

```css
--radius-none: 0px;
--radius-sm: 0.25rem;   /* 4px - Subtle rounding */
--radius-md: 0.375rem;  /* 6px - Standard (default) */
--radius-lg: 0.5rem;    /* 8px - Cards, modals */
--radius-xl: 0.75rem;   /* 12px - Large cards */
--radius-2xl: 1rem;     /* 16px - Images, heroes */
--radius-3xl: 1.5rem;   /* 24px - Special elements */
--radius-full: 9999px;  /* Pills, avatars */
```

### Usage Examples

```html
<!-- Standard elements -->
<div class="rounded-md">Buttons, inputs</div>
<div class="rounded-lg">Cards, containers</div>
<div class="rounded-xl">Large cards, images</div>

<!-- Specific corners -->
<div class="rounded-t-lg">Top rounded</div>
<div class="rounded-b-lg">Bottom rounded</div>

<!-- Pills and circles -->
<span class="rounded-full">Pill badge</span>
<img class="rounded-full" />  <!-- Avatar -->

<!-- Mixed radius -->
<div class="rounded-t-2xl rounded-b-lg">
  Hero image with card bottom
</div>
```

---

## Opacity & Transparency

### Opacity Scale

```css
--opacity-0: 0;       /* Invisible */
--opacity-5: 0.05;
--opacity-10: 0.1;
--opacity-20: 0.2;
--opacity-30: 0.3;
--opacity-40: 0.4;
--opacity-50: 0.5;    /* Half transparent */
--opacity-60: 0.6;
--opacity-70: 0.7;
--opacity-80: 0.8;
--opacity-90: 0.9;
--opacity-95: 0.95;
--opacity-100: 1;     /* Fully opaque */
```

### Common Uses

```html
<!-- Disabled state -->
<button class="opacity-50 cursor-not-allowed">
  Disabled
</button>

<!-- Muted backgrounds -->
<div class="bg-neutral-900/50">
  Semi-transparent overlay
</div>

<!-- Glassmorphism -->
<div class="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
  Frosted glass effect
</div>

<!-- Hover transparency -->
<div class="opacity-80 hover:opacity-100 transition-opacity">
  Image card
</div>
```

---

## Z-Index Layers

Consistent stacking order prevents z-index conflicts:

```css
/* Z-Index Scale */
--z-0: 0;          /* Base layer */
--z-10: 10;        /* Dropdowns, popovers */
--z-20: 20;        /* Sticky headers */
--z-30: 30;        /* Modals, drawers */
--z-40: 40;        /* Notifications, toasts */
--z-50: 50;        /* Tooltips */
```

### Usage Guidelines

```html
<!-- Sticky header -->
<header class="sticky top-0 z-20">
  Navigation
</header>

<!-- Dropdown -->
<div class="absolute z-10">
  Dropdown menu
</div>

<!-- Modal -->
<div class="fixed inset-0 z-30">
  Modal overlay
</div>

<!-- Toast notification -->
<div class="fixed top-4 right-4 z-40">
  Toast
</div>

<!-- Tooltip -->
<div class="absolute z-50">
  Tooltip
</div>
```

---

## Responsive Breakpoints

Mobile-first responsive design with Tailwind breakpoints:

```css
/* Breakpoints */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Small laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Responsive Patterns

```html
<!-- Typography -->
<h1 class="text-3xl sm:text-4xl lg:text-5xl">
  Responsive heading
</h1>

<!-- Layout -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  Responsive grid
</div>

<!-- Spacing -->
<section class="py-12 sm:py-16 lg:py-20">
  Responsive section
</section>

<!-- Show/Hide -->
<div class="hidden lg:block">Desktop only</div>
<div class="block lg:hidden">Mobile/tablet only</div>

<!-- Container -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  Responsive container
</div>
```

---

## CSS Variables

Custom properties for theme customization:

### In `app/assets/css/main.css`

```css
@layer base {
  :root {
    /* Custom spacing */
    --content-width: 1280px;
    --section-spacing: 5rem;

    /* Custom transitions */
    --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);

    /* Custom shadows */
    --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1);
    --shadow-card-hover: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }

  .dark {
    /* Dark mode overrides */
    --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.3);
  }
}
```

---

## Layout Patterns

### Container

```html
<!-- Standard container -->
<UContainer>
  Content with responsive padding
</UContainer>

<!-- Custom container -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Manual container
</div>
```

### Grid Layouts

```html
<!-- Auto-fit grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Feature grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
  <div>Feature 1</div>
  <div>Feature 2</div>
</div>
```

### Flexbox Layouts

```html
<!-- Centered content -->
<div class="flex items-center justify-center min-h-screen">
  Centered content
</div>

<!-- Space between -->
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Vertical stack -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Section Layouts

```html
<!-- Hero section -->
<section class="py-18 sm:py-24 lg:py-32">
  <UContainer>
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Hero Title
      </h1>
      <p class="mt-4 text-md text-muted">
        Hero description
      </p>
    </div>
  </UContainer>
</section>

<!-- Content section -->
<section class="py-12 sm:py-16 lg:py-20">
  <UContainer>
    <!-- Section content -->
  </UContainer>
</section>
```

---

## Example Component Reference

### Hero Component

```vue
<template>
  <section class="relative overflow-hidden py-18 sm:py-24 lg:py-32">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
          {{ title }}
        </h1>

        <p class="mt-4 sm:mt-6 text-md sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {{ description }}
        </p>

        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="lg"
            color="primary"
            variant="solid"
          >
            Get Started
          </UButton>

          <UButton
            size="lg"
            variant="outline"
          >
            Learn More
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
```

### Card Component

```vue
<template>
  <UCard
    class="group hover:shadow-lg transition-shadow duration-200"
  >
    <template #header>
      <div class="aspect-video overflow-hidden rounded-t-lg">
        <NuxtImg
          :src="image"
          :alt="title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </template>

    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {{ title }}
      </h3>

      <p class="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <template #footer>
      <UButton
        variant="ghost"
        icon="i-lucide-arrow-right"
        trailing
      >
        View Project
      </UButton>
    </template>
  </UCard>
</template>
```

### Navigation Component

```vue
<template>
  <nav class="sticky top-0 z-20 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-bold text-neutral-900 dark:text-neutral-50"
        >
          Logo
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <ColorModeButton />
          <UButton
            size="sm"
            class="hidden sm:inline-flex"
          >
            Contact
          </UButton>
        </div>
      </div>
    </UContainer>
  </nav>
</template>
```

---

## Best Practices

### Performance
- Use `<NuxtImg>` for images with lazy loading
- Leverage Tailwind's purge for minimal CSS
- Avoid custom CSS when Tailwind utilities exist
- Use CSS variables for theme values

### Accessibility
- Maintain 4.5:1 contrast ratio for text
- Provide focus indicators for interactive elements
- Use semantic HTML elements
- Include ARIA labels where needed
- Support keyboard navigation

### Consistency
- Follow the design system patterns
- Use Nuxt UI components when available
- Stick to the spacing scale
- Maintain color palette usage
- Keep animations purposeful and subtle

### Maintenance
- Document component variants
- Update this guide when adding patterns
- Keep configuration in `app.config.ts`
- Test in both light and dark modes

---

## Configuration Files

### `app/app.config.ts`

Primary theme configuration:

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  }
})
```

### `app/assets/css/main.css`

Custom CSS and overrides:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Custom styles */
}
```

---

**Last Updated**: 2024
**Version**: 1.0.0
**Maintained by**: Development Team
