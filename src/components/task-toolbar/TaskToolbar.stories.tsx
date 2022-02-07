// TaskToolbar.stories.ts|tsx

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import TaskToolbar from './TaskToolbar'


export default {
  title: 'TaskToolbar',
  component: TaskToolbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        {Story()}
      </MemoryRouter>
    ),  
  ]
} as ComponentMeta<typeof TaskToolbar>

const TaskToolbarTemplate: ComponentStory<typeof TaskToolbar> = (args) => <TaskToolbar />

export const Basic = TaskToolbarTemplate.bind({});

