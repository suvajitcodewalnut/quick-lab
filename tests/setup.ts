import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import "@testing-library/jest-dom";

// Import mocks to ensure they are hoisted
import "../src/mocks/mock";

afterEach(() => {
	cleanup();
	vi.clearAllMocks();
});
