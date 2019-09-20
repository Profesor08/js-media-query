interface IBreapoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
/**
 * Check media query
 */
declare function query(mediaQuery: string): boolean;
/**
 * Minimum breakpoint width
 */
declare function min(breakpoint: number): boolean;
/**
 * Maximum breakpoint width
 */
declare function max(breakpoint: number): boolean;
/**
 * Minimum breakpoint width
 */
declare function up(breakpoint: number): boolean;
/**
 * Maximum breakpoint width
 */
declare function down(breakpoint: number): boolean;
/**
 * Check if screen between the from and to breakpoints
 */
declare function between(from: number, to: number): boolean;
/**
 * Check if is touck device
 */
declare function isTouch(): boolean;
/**
 * Check if is non-touch device
 */
declare function isMouse(): boolean;
/**
 * Check if screen is bigger or equal to xs global defined breapoint
 */
declare function xs(breakpoints?: IBreapoints): boolean;
/**
 * Check if screen is bigger or equal to sm global defined breapoint
 */
declare function sm(breakpoints?: IBreapoints): boolean;
/**
 * Check if screen is bigger or equal to md global defined breapoint
 */
declare function md(breakpoints?: IBreapoints): boolean;
/**
 * Check if screen is bigger or equal to lg global defined breapoint
 */
declare function lg(breakpoints?: IBreapoints): boolean;
/**
 * Check if screen is bigger or equal to xl global defined breapoint
 */
declare function xl(breakpoints?: IBreapoints): boolean;
declare function setBreakpoints(breakpoints: IBreapoints): void;
export declare class Media {
    private breakpoints;
    constructor(breakpoints?: IBreapoints);
    /**
     * Set Local breapoints
     */
    setBreakpoints(breakpoints: IBreapoints): void;
    /**
     * Check media query
     */
    query: typeof query;
    /**
     * Minimum breakpoint width
     */
    min: typeof min;
    /**
     * Maximum breakpoint width
     */
    max: typeof max;
    /**
     * Minimum breakpoint width
     */
    up: typeof up;
    /**
     * Maximum breakpoint width
     */
    down: typeof down;
    /**
     * Check if screen between the from and to breakpoints
     */
    between: typeof between;
    /**
     * Check if is touck device
     */
    isTouch: typeof isTouch;
    /**
     * Check if is non-touch device
     */
    isMouse: typeof isMouse;
    /**
     * Check if screen is bigger or equal to xs class defined breapoint
     */
    xs: () => boolean;
    /**
     * Check if screen is bigger or equal to sm class defined breapoint
     */
    sm: () => boolean;
    /**
     * Check if screen is bigger or equal to md class defined breapoint
     */
    md: () => boolean;
    /**
     * Check if screen is bigger or equal to lg class defined breapoint
     */
    lg: () => boolean;
    /**
     * Check if screen is bigger or equal to xl class defined breapoint
     */
    xl: () => boolean;
    /**
     * Check media query
     */
    static query: typeof query;
    /**
     * Minimum breakpoint width
     */
    static min: typeof min;
    /**
     * Maximum breakpoint width
     */
    static max: typeof max;
    /**
     * Minimum breakpoint width
     */
    static up: typeof up;
    /**
     * Maximum breakpoint width
     */
    static down: typeof down;
    /**
     * Check if screen between the from and to breakpoints
     */
    static between: typeof between;
    /**
     * Check if is touck device
     */
    static isTouch: typeof isTouch;
    /**
     * Check if is non-touch device
     */
    static isMouse: typeof isMouse;
    /**
     * Check if screen is bigger or equal to xs global defined breapoint
     */
    static xs: typeof xs;
    /**
     * Check if screen is bigger or equal to sm global defined breapoint
     */
    static sm: typeof sm;
    /**
     * Check if screen is bigger or equal to md global defined breapoint
     */
    static md: typeof md;
    /**
     * Check if screen is bigger or equal to lg global defined breapoint
     */
    static lg: typeof lg;
    /**
     * Check if screen is bigger or equal to xl global defined breapoint
     */
    static xl: typeof xl;
    /**
     * Set Global breapoints
     */
    static setBreakpoints: typeof setBreakpoints;
}
export { query, min, max, up, down, between, isTouch, isMouse, xs, sm, md, lg, xl, setBreakpoints, };
export default Media;
