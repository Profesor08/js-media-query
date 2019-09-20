import Media, {
  down,
  isMouse,
  isTouch,
  lg,
  max,
  md,
  min,
  query,
  sm,
  up,
  xl,
  xs,
} from "./Media";

if (window !== undefined) {
  // @ts-ignore
  window.Media = Media;
}

export default Media;
export { query, min, max, up, down, isTouch, isMouse, xs, sm, md, lg, xl };
