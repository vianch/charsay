import gradient from "gradient-string";

/**
 * This method returns `undefined`.
 */
function noop() {
  // No operation performed.
}

/**
 * 
 * Using varargs
 * let coolGradient = gradient('red', 'green', 'blue');
 *
 * Using array
 * let coolGradient = gradient(['#FF0000', '#00FF00', '#0000FF']);
 * 
 * Colors: cristal, teen, mind, morning, vice, passion, fruit, instagram, atlas, retro, summer, pastel, rainbow
 */
function print(message, color = "pastel") {
  console.log(gradient[color](message));
}

const defaultLogger = {
  debug: noop,
  error: noop,
  info: noop,
  logException: noop,
  warn: noop,
};

export const Logger = {
  ...defaultLogger,
  ...console,
  print,
};

export default Logger;
