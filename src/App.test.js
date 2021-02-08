import React from 'react';
import App from './App';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchShow, fetchShow as mockFetchShow } from './api/fetchShow';
import { res } from './data/res';

jest.mock('/api/fetchShow');
console.log("cd: App.test.js: jest.mock: api response: ", fetchShow);