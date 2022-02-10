// React Imports

// Custom Imports
import { TABLE_COLUMNS } from 'constants/TableColumns'
import { GLOBAL_TASKS_LIST } from 'constants/TaskMockData'

import TableAccordion from 'components/table-accordion/TableAccordion'


const MyTasksPage = () => {

  return (
    <div>
      <TableAccordion
        title={'Urgent Tasks'}
        summaryColor={'#E35C5C'}
        columns={TABLE_COLUMNS}
        data={GLOBAL_TASKS_LIST}
      />
      <TableAccordion
        title={'Active Tasks'} 
        summaryColor={'#63B0F3'}
        columns={TABLE_COLUMNS}
        data={GLOBAL_TASKS_LIST}
      />
      <TableAccordion
        title={'Snoozed Tasks'}
        summaryColor={'#FBD250'}
        columns={TABLE_COLUMNS}
        data={GLOBAL_TASKS_LIST}
      />
    </div>
  )
}

export default MyTasksPage
