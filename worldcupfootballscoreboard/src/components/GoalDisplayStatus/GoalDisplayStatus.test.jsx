import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import GoalDisplayStatus from "./index"

describe('GoalDisplayStatus', () => {
    it('renders correctly when provided with teamData', async () => {
        const teamData = {
            goalScoredTime: [
                { time: 10, name: 'Edson' },
                { time: 20, name: 'Héctor' },
            ],
        };
        render(<GoalDisplayStatus teamData={teamData} />);
        // Verify that each goal's time and player name are rendered
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/Edson/i)).toBeInTheDocument();
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/Héctor/i)).toBeInTheDocument();
        // Verify that football logo is rendered for each goal
        const footballLogos = screen.getAllByAltText('Football');
        expect(footballLogos).toHaveLength(2); // Assuming 2 goals
    });

    it('renders correctly when provided with empty teamData', async () => {
        render(<GoalDisplayStatus teamData={{ goalScoredTime: [] }} />);
        // Verify that no goals are rendered when teamData is empty
        expect(screen.queryByText(/\d+/)).not.toBeInTheDocument(); // No goal time
        expect(screen.queryByText(/Edson/)).not.toBeInTheDocument(); // No player name
        expect(screen.queryByAltText('Football')).not.toBeInTheDocument(); // No football logo
    });
});