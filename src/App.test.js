import React from 'react';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { res } from './data/res';

jest.mock('./api/fetchShow');
// console.log("cd: App.test.js: jest.mock: api response: ", fetchShow);

test("ensuring tht App renders", () => {
    mockFetchShow.mockResolvedValueOnce(res)
    render(<App />)
});

test("App fetched data and renders the showData", async () => {
    mockFetchShow.mockResolvedValueOnce(res);
    render(<App />);

    expect(screen.getByText(/Fetching data.../i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/select a season/i)).toBeInTheDocument());

    const selection = screen.getByText(/select a season/i);
    userEvent.click(selection);
    const season1 = screen.getByText(/season 1/i)
    userEvent.click(season1);

    expect(screen.getAllByTestId(/episodes/i)).toHaveLength(8);

    userEvent.click(screen.queryAllByText(/season 1/i)[0]);
    const season4 = screen.getByText(/season 4/i);
    userEvent.click(season4);
    expect(screen.getAllByTestId(/episodes/i)).toHaveLength(3);
})