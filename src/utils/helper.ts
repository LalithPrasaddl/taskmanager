export const ARCHIVE = 'Archive'
export const NOT_STARTED = 'not_started'
export const taskOptions:any = {
  type: [{
    key: 'task',
    name: 'Task'
  }, {
    key: 'bug',
    name: 'Bug'
  }, {
    key: 'feature',
    name: 'Feature'
  }],
  priority: [{
    key: 'p1',
    name: 'P1'
  }, {
    key: 'p2',
    name: 'P2'
  }, {
    key: 'p3',
    name: 'P3'
  }],
  status: [{
    key: 'not_started',
    name: 'Not Started'
  }, {
    key: 'in_progress',
    name: 'In Progress'
  }, {
    key: 'in_review',
    name: 'In Review'
  }, {
    key: 'completed',
    name: 'Completed'
  }]
}

export function getDate(date: string | number | Date) {
  const d = new Date(date)
  return (d.getMonth() + 1) + '/' +  d.getDate() + '/' + d.getFullYear()
}
