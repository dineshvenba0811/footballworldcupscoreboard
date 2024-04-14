import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';

import Footer from "./index";

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  })
  it('renders correctly social links', async () => {
    expect(screen.getByText(/LinkedIn/i)).toBeVisible()
    expect(screen.getByText(/github/i)).toBeVisible()
  });

  it('has social links working correctly', async () => {
    expect(screen.getByText('LinkedIn').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/dineshkumarchandrasekar081094/');
    expect(screen.getByText('github').closest('a')).toHaveAttribute('href', 'https://github.com/dineshvenba0811');
  });


  it("should contain copyright info", () => {
    expect(screen.getByText(/© dineshkumarc 2024. All rights reserved./i)).toBeVisible()
  });

  it("should contain version number", () => {
    expect(screen.getByText(/v.0.0.2/i)).toBeVisible()
  });
});
