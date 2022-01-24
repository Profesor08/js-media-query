interface IBreapoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

type MediaEventType = "in" | "out" | "changed";
type MediaCallback = () => void;
type MediaEventAction = () => boolean;

interface MediaEvent {
  media: () => boolean;
  callback: () => void;
  value: boolean;
}

type IGlobalEvents = {
  [key in MediaEventType]: MediaEvent[];
};

const defaultBreakpoints: IBreapoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export class Media {
  private breakpoints: IBreapoints = defaultBreakpoints;

  private events: IGlobalEvents = {
    in: [],
    out: [],
    changed: [],
  };

  /**
   * Media object constructor
   */
  constructor(breakpoints: IBreapoints = defaultBreakpoints) {
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
   * Match Media query
   */
  private media = (mediaQueryString: string): boolean => {
    return window.matchMedia(mediaQueryString).matches;
  };

  /**
   * Check media query
   */
  public query = (mediaQuery: string): boolean => {
    return this.media(mediaQuery);
  };

  /**
   * Minimum breakpoint width
   */
  public min = (breakpoint: number) => {
    return this.query(`(min-width: ${breakpoint}px)`);
  };

  /**
   * Maximum breakpoint width
   */
  public max = (breakpoint: number) => {
    return this.query(`(max-width: ${breakpoint}px)`);
  };

  /**
   * Minimum breakpoint width
   */
  public up = (breakpoint: number): boolean => {
    return this.min(breakpoint);
  };

  /**
   * Maximum breakpoint width
   */
  public down = (breakpoint: number): boolean => {
    return this.max(breakpoint);
  };

  /**
   * Check if screen between the from and to breakpoints
   */
  public between = (from: number, to: number): boolean => {
    return this.query(`(min-width: ${from}px) and (max-width: ${to}px)`);
  };

  /**
   * Check if is touck device
   */
  public isTouch = () => {
    return this.query(`(pointer: coarse)`);
  };

  /**
   * Check if is non-touch device
   */
  public isMouse = () => {
    return this.query(`(pointer: fine)`);
  };

  /**
   * Check if screen is bigger or equal to xs breapoint
   */
  public xs = () => {
    return this.up(this.breakpoints.xs);
  };

  /**
   * Check if screen is bigger or equal to sm breapoint
   */
  public sm = () => {
    return this.up(this.breakpoints.sm);
  };

  /**
   * Check if screen is bigger or equal to md breapoint
   */
  public md = () => {
    return this.up(this.breakpoints.md);
  };

  /**
   * Check if screen is bigger or equal to lg breapoint
   */
  public lg = () => {
    return this.up(this.breakpoints.lg);
  };

  /**
   * Check if screen is bigger or equal to xl breapoint
   */
  public xl = () => {
    return this.up(this.breakpoints.xl);
  };

  /**
   *
   * @param {string} event Event name ex: "activated" | "deactivated" | "changed"
   * @param {function} callback Function what will be executed if event is triggered
   * @param {function} media Function what returns media query result: true/false
   */
  public on = (
    event: MediaEventType,
    callback: () => void,
    media: () => boolean,
  ) => {
    if (callback instanceof Function) {
      this.events[event].push({
        media,
        callback,
        value: media(),
      });
    }

    this.initEvents();
  };

  public off = (
    ...args: [MediaEventType, MediaCallback?, MediaEventAction?]
  ): void => {
    const [event, callback, media] = args;

    if (callback === undefined) {
      this.events[event] = [];
    } else if (media === undefined) {
      this.events[event] = this.events[event].filter(
        (mediaEvent) => !(mediaEvent.callback === callback),
      );
    } else {
      this.events[event] = this.events[event].filter(
        (mediaEvent) =>
          !(mediaEvent.callback === callback && mediaEvent.media === media),
      );
    }

    this.initEvents();
  };

  private resize = () => {
    for (const eventType in this.events) {
      const events: MediaEvent[] = this.events[eventType as MediaEventType];
      for (const event of events) {
        const value = event.media();

        if (event.value !== value) {
          if (eventType === "changed") {
            event.callback();
          } else if (eventType === "in") {
            if (value === true) {
              event.callback();
            }
          } else if (eventType === "out") {
            if (value === false) {
              event.callback();
            }
          }

          event.value = value;
        }
      }
    }
  };

  private initEvents = () => {
    for (const eventType in this.events) {
      if (this.events[eventType as MediaEventType].length) {
        window.addEventListener("resize", () => {
          this.resize();
        });
        return;
      }
    }

    window.removeEventListener("resize", this.resize);
  };
}

const media = new Media();

const query = media.query;
const min = media.min;
const max = media.max;
const up = media.up;
const down = media.down;
const between = media.between;
const isTouch = media.isTouch;
const isMouse = media.isMouse;
const xs = media.xs;
const sm = media.sm;
const md = media.md;
const lg = media.lg;
const xl = media.xl;
const setBreakpoints = media.setBreakpoints;

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

export default media;
