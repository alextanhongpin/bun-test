import { sum } from "./math.ts";

export default {
  port: 3000,
  fetch(request) {
    const total = sum(10, 20);
    return new Response(`Welcome to bun: ${total}`);
  },
};
