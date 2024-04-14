import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import {randomUUID} from 'node:crypto';
import '@testing-library/jest-dom/vitest'


// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});

window.crypto.randomUUID = randomUUID;
