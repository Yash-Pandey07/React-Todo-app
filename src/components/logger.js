// logger.js
export function createLogger() {
    return {
      log: (message) => console.log(`LOG: ${message}`),
      error: (message) => console.error(`ERROR: ${message}`),
      warn: (message) => console.warn(`WARN: ${message}`)
    };
  }
  