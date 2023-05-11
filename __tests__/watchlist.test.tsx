import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from "../src/pages/watchlist/index"

describe("watchlist exists", () => {
    it("should render the watchlist list", () => {
      render(<Home anime={[]} />);

      const watchList = screen.getByTestId("watchlist-h1");
      expect(watchList).toHaveTextContent("watchlist")
    })
})