export const simulateLatency = () =>
  new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (800 - 300 + 1)) + 300))
