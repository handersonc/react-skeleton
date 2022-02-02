import React from "react"
import { render, screen } from '@testing-library/react';

import Header from './Header'

test("<Header />", async () => {
  const element = render(<Header />)
  const iconButton = await element.getByTestId('header')
  expect(iconButton).toBeTruthy()
})