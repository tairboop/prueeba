import { useEffect, useState } from 'react'

/**
 * Tailwind-style responsive breakpoints in pixels.
 */
const breakpoints = {
  /** Extra small: 0px and up */
  xs: 0,
  /** Small: 640px and up */
  sm: 640,
  /** Medium: 768px and up */
  md: 768,
  /** Large: 1024px and up */
  lg: 1024,
  /** Extra large: 1280px and up */
  xl: 1280,
  /** 2X large: 1536px and up */
  '2xl': 1536,
}

type Breakpoint = keyof typeof breakpoints

/**
 * A custom hook that returns the current screen breakpoint and
 * helpers based on window width.
 *
 * @returns {{
 *   width: number,                      // The current window width in pixels.
 *   breakpoint: Breakpoint,            // The current breakpoint name based on width.
 *   isMobile: boolean,                 // `true` when width is less than 768px.
 *   isTablet: boolean,                 // `true` when width is between 768px and 1023px.
 *   isDesktop: boolean,                // `true` when width is 1024px or wider.
 *   isSmall: boolean,                  // `true` when width is less than 640px.
 *   is2XL: boolean                     // `true` when width is 1536px or wider.
 * }}
 *
 * @example
 * ```tsx
 * const { breakpoint, isMobile } = useBreakpoint();
 * if (isMobile) {
 *   console.log("You're on a mobile device");
 * }
 * ```
 */
export function useBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const current: Breakpoint =
    width >= breakpoints['2xl']
      ? '2xl'
      : width >= breakpoints.xl
        ? 'xl'
        : width >= breakpoints.lg
          ? 'lg'
          : width >= breakpoints.md
            ? 'md'
            : width >= breakpoints.sm
              ? 'sm'
              : 'xs'

  return {
    width,
    breakpoint: current,
    isMobile: width < breakpoints.md,
    isTablet: width >= breakpoints.md && width < breakpoints.lg,
    isDesktop: width >= breakpoints.lg,
    isSmall: width < breakpoints.sm,
    is2XL: current === '2xl',
  }
}
