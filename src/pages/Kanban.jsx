/* eslint-disable no-unused-vars */
import React from 'react'
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective
} from '@syncfusion/ej2-react-kanban'
import { Header } from '../components'
import { kanbanData, kanbanGrid } from '../data/dummy'

function kanban () {
  return (
    <div className='m-2 md:10 p-2 md:p-10 bg-white rounded-s-none-3xl'>
      <Header
        category='Page'
        title='Tablero kanban'
      />
      <KanbanComponent
        id='Kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default kanban
