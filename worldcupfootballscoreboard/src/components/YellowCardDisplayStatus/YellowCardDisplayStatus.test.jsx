import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import YellowCardDisplayStatus from './index.jsx';

describe('YellowCardDisplayStatus', () => {
    it('renders correctly when provided with teamData', async () => {
        const teamData = {
            yellowCardTime: [
                { time: 10, name: 'Edson' },
                { time: 20, name: 'César' },
            ],
        };
        render(<YellowCardDisplayStatus teamData={teamData} />);
        // Verify that each yellow card's time and player name are rendered
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/Edson/i)).toBeInTheDocument();
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/Edson/i)).toBeInTheDocument();

        // Verify that yellow card icon is rendered for each yellow card
        const yellowCardIcons = screen.getAllByAltText('Yellow Card');
        expect(yellowCardIcons).toHaveLength(2); // Assuming 2 yellow cards
    });

    it('renders correctly when provided with empty teamData', async () => {
        render(<YellowCardDisplayStatus teamData={{ yellowCardTime: [] }} />);
        // Verify that no yellow cards are rendered when teamData is empty
        expect(screen.queryByText(/\d+/)).not.toBeInTheDocument(); // No card time
        expect(screen.queryByText(/César/)).not.toBeInTheDocument(); // No player name
        expect(screen.queryByAltText('Yellow Card')).not.toBeInTheDocument(); // No yellow card icon
    });
});
