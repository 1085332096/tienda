import React from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

function Calendar () {
  return (
    <div className='m-2 md:10 p-2 md:p-10 bg-white rounded-s-none-3xl'>
      <Header category='Page' title='CALENDARIO' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 9)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
