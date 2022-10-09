export const projectIconsList = ['category', 'place_item', 'construction', 'sports_soccer', 'science', 'biotech'];

export const peopleIconsList = ['sentiment_very_satisfied', 'sentiment_neutral', 'sentiment_satisfied']

export const taskTypes: TaskType[] = [{
  id: 1,
  title: 'Unstarted',
  previous: null,
  forward: 2
}, {
  id: 2,
  title: 'In Progress',
  previous: 1,
  forward: 3
}, {
  id: 3,
  title: 'Review',
  previous: 2,
  forward: 4
}, {
  id: 4,
  title: 'Complete',
  previous: 3,
  forward: null
}]

export const priorityTypes: Priority[] = [{
  id: 1,
  title: 'Low',
  className: 'bg-yellow',
  icon: 'low_priority'
}, {
  id: 2,
  title: 'Medium',
  className: 'bg-orange',
  icon: 'priority'
}, {
  id: 3,
  title: 'High',
  className: 'bg-red',
  icon: 'priority_high'
}]

export const taskFormFields = [{
  label: 'Title',
  type: 'text',
  id: 'title'
}, {
  label: 'Description',
  type: 'text',
  id: 'desc'
}, {
  label: 'Asignee',
  type: 'select',
  id: 'assignee'
}, {
  label: 'Status',
  type: 'select',
  id: 'status'
}, {
  label: 'Priority',
  type: 'select',
  id: 'priority'
}, {
  label: 'Project',
  type: 'select',
  id: 'project'
}]

export const taskActionItems: TaskActionItem[] = [{
  key: 'previous',
  icon: 'arrow_back'
}, {
  key: 'forward',
  icon: 'arrow_forward'
}, {
  key: 'edit',
  icon: 'edit'
}, {
  key: 'delete',
  icon: 'delete'
}];

export const infoBullets: string[] = [
  'A simple task manager.',
  'Why build one, when lot exist? Just for the fun of it.',
  'Built purely on vanilla Javascript.',
  'All of the tasks and whole app data is stored on localStorage.',
]

export const defaultData: Data = {
  modalOpen: '',
  projects: [{
    id: 1,
    title: 'Unmapped',
    icon: 'category',
    createdOn: getCurrentDate(),
    updatedOn: getCurrentDate()
  }],
  people: [{
    id: 1,
    name: 'Current User',
    icon: 'sentiment_very_satisfied',
  }],
  activeProjectId: 1,
  editModalId: null,
  activePersonId: 1, // Current User
  activePriorityId: null,
  tasks: []
}

export function getCurrentDate() {
  return new Date();
}

export function generateRandomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export function focusElement(id: string) {
  setTimeout(() => {
    const inputElm = document.getElementById(id);
    if(inputElm) {
      inputElm.focus();
    }
  }, 10);
}

export function formattedDate(str: Date) {
  if(str) {
    const date = new Date(str)
    const dateStr = [
      String(date.getDate()).padStart(2, '0'),
      String(date.getMonth() + 1).padStart(2, '0'),
      date.getFullYear()
    ].join('-')
    return dateStr
  }
  return ''
}
