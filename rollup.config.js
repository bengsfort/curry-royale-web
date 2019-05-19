import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/main.ts",
  output: {
    file: "./build/js/main.js",
    format: "iife",
    name: "CurrySumo",
  },
  plugins: [typescript()],
};