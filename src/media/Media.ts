function media(mediaQueryString: string): boolean {
  return window.matchMedia(mediaQueryString).matches;
}

interface IBreapoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const globalBreakpoints: IBreapoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/**
 * Check media query
 */
function query(mediaQuery: string): boolean {
  return media(mediaQuery);
}

/**
 * Minimum breakpoint width
 */
function min(breakpoint: number) {
  return media(`(min-width: ${breakpoint}px)`);
}

/**
 * Maximum breakpoint width
 */
function max(breakpoint: number) {
  return media(`(max-width: ${breakpoint}px)`);
}

/**
 * Minimum breakpoint width
 */
function up(breakpoint: number): boolean {
  return min(breakpoint);
}

/**
 * Maximum breakpoint width
 */
function down(breakpoint: number): boolean {
  return max(breakpoint);
}

/**
 * Check if screen between the from and to breakpoints
 */
function between(from: number, to: number): boolean {
  return media(`(min-width: ${from}px) and (max-width: ${to}px)`);
}

/**
 * Check if is touck device
 */
function isTouch() {
  return media(`(pointer: coarse)`);
}

/**
 * Check if is non-touch device
 */
function isMouse() {
  return media(`(pointer: fine)`);
}

/**
 * Check if screen is bigger or equal to xs global defined breapoint
 */
function xs(breakpoints: IBreapoints = globalBreakpoints) {
  return up(breakpoints.xs);
}

/**
 * Check if screen is bigger or equal to sm global defined breapoint
 */
function sm(breakpoints: IBreapoints = globalBreakpoints) {
  return up(breakpoints.sm);
}

/**
 * Check if screen is bigger or equal to md global defined breapoint
 */
function md(breakpoints: IBreapoints = globalBreakpoints) {
  return up(breakpoints.md);
}

/**
 * Check if screen is bigger or equal to lg global defined breapoint
 */
function lg(breakpoints: IBreapoints = globalBreakpoints) {
  return up(breakpoints.lg);
}

/**
 * Check if screen is bigger or equal to xl global defined breapoint
 */
function xl(breakpoints: IBreapoints = globalBreakpoints) {
  return up(breakpoints.xl);
}

function setBreakpoints(breakpoints: IBreapoints) {
  this.breakpoints = {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
  };
}

export class Media {
  private breakpoints: IBreapoints = globalBreakpoints;

  constructor(breakpoints: IBreapoints = globalBreakpoints) {
    this.setBreakpoints(breakpoints);
  }

  /**
   * Set Local breapoints
   */
  setBreakpoints(breakpoints: IBreapoints) {
    this.breakpoints = {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    };
  }

  /**
   * Check media query
   */
  public query = query;

  /**
   * Minimum breakpoint width
   */
  public min = min;

  /**
   * Maximum breakpoint width
   */
  public max = max;

  /**
   * Minimum breakpoint width
   */
  public up = up;

  /**
   * Maximum breakpoint width
   */
  public down = down;

  /**
   * Check if screen between the from and to breakpoints
   */
  public between = between;

  /**
   * Check if is touck device
   */
  public isTouch = isTouch;

  /**
   * Check if is non-touch device
   */
  public isMouse = isMouse;

  /**
   * Check if screen is bigger or equal to xs class defined breapoint
   */
  public xs = () => xs(this.breakpoints);

  /**
   * Check if screen is bigger or equal to sm class defined breapoint
   */
  public sm = () => sm(this.breakpoints);

  /**
   * Check if screen is bigger or equal to md class defined breapoint
   */
  public md = () => md(this.breakpoints);

  /**
   * Check if screen is bigger or equal to lg class defined breapoint
   */
  public lg = () => lg(this.breakpoints);

  /**
   * Check if screen is bigger or equal to xl class defined breapoint
   */
  public xl = () => xl(this.breakpoints);

  /**
   * Check media query
   */
  public static query = query;

  /**
   * Minimum breakpoint width
   */
  public static min = min;

  /**
   * Maximum breakpoint width
   */
  public static max = max;

  /**
   * Minimum breakpoint width
   */
  public static up = up;

  /**
   * Maximum breakpoint width
   */
  public static down = down;

  /**
   * Check if screen between the from and to breakpoints
   */
  public static between = between;

  /**
   * Check if is touck device
   */
  public static isTouch = isTouch;

  /**
   * Check if is non-touch device
   */
  public static isMouse = isMouse;

  /**
   * Check if screen is bigger or equal to xs global defined breapoint
   */
  public static xs = xs;

  /**
   * Check if screen is bigger or equal to sm global defined breapoint
   */
  public static sm = sm;

  /**
   * Check if screen is bigger or equal to md global defined breapoint
   */
  public static md = md;

  /**
   * Check if screen is bigger or equal to lg global defined breapoint
   */
  public static lg = lg;

  /**
   * Check if screen is bigger or equal to xl global defined breapoint
   */
  public static xl = xl;

  /**
   * Set Global breapoints
   */
  public static setBreakpoints = setBreakpoints;
}

export {
  query,
  min,
  max,
  up,
  down,
  between,
  isTouch,
  isMouse,
  xs,
  sm,
  md,
  lg,
  xl,
  setBreakpoints,
};

export default Media;
