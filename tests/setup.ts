import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { vi } from "vitest";

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
observe: vi.fn(),
unobserve: vi.fn(),
disconnect: vi.fn(),
}));
// Stub the global ResizeObserver
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});