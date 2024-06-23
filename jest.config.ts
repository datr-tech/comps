import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};

export default config;
