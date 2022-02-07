// TableAccordion.stories.ts|tsx

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MemoryRouter } from 'react-router'

import TableAccordion from './TableAccordion'
import TasksDataTable from 'components/tasks-datatable/TasksDatatable'
import { TABLE_COLUMNS } from '../../constants/TableColumns'


export default {
  title: 'TableAccordion',
  component: TableAccordion,
  subcomponents: {
    TasksDataTable
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        {Story()}
      </MemoryRouter>
    ),  
  ]
} as ComponentMeta<typeof TableAccordion>

const TableAccordionTemplate: ComponentStory<typeof TableAccordion> = (args) => <TableAccordion 
  title='Title' summaryColor='#E35C5C' columns={TABLE_COLUMNS} data={[]} />

export const Basic = TableAccordionTemplate.bind({});

