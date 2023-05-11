import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimeList from '~/components/AnimeList';
import { format, compareAsc } from "date-fns";

let week = [
    { id: 1, day: "Mondays" },
    { id: 2, day: "Tuesdays" },
    { id: 3, day: "Wednesdays" },
    { id: 4, day: "Thursdays" },
    { id: 5, day: "Fridays" },
    { id: 6, day: "Saturdays" },
    { id: 7, day: "Sundays" },
  ];

describe("Anime List on the Homepage", () => {
  it('should the current day', () => {
    let today = format(new Date(), "EEEE");
    render(<AnimeList week={week} anime={[]} today={today} />);

    const dayTitle = screen.getByTestId("h2-element");
    expect(dayTitle).toHaveTextContent(today);
    
  })
})