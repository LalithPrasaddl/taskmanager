import { formattedDate, priorityTypes, taskActionItems, taskTypes } from '../../../helpers/utils';
import { data, renderContent } from '../../appWrapper';
import { getMaterialIcon } from '../../wrapper';

import './index.css';

function taskItems() {
  const taskTypesList = []
  const filterTasks: TaskItem[] = getFilterTasks();
  for (let i = 0; i < taskTypes.length; i++) {
      const taskType = taskTypes[i];
      const tasks = filterTasks.filter((task) => +task.status === taskType.id)
      const currTaskItems: any[] = tasks.map((task) => taskItem({task, taskType}));
      taskTypesList.push({
        type: 'div',
        elmAttrs: {
          className: 'task-type-wrapper bg-white'
        },
        childElms: [taskTypeHead({
          taskType,
          taskCount: tasks.length
        }), ...currTaskItems]
      })
  }

  return {
    type: 'div',
    elmAttrs: {
      className: 'task-items-wrapper bg-whitesmoke'
    },
    childElms: taskTypesList
  }
}

function taskTypeHead({
  taskType,
  taskCount
}: {
  taskType: TaskType,
  taskCount: number;
}) {
  return {
    type: 'div',
    elmAttrs: {
      className: 'task-type-head bg-whitesmoke'
    },
    childElms: [{
      type: 'div',
      childElms: [{
        type: 'div',
        elmAttrs: {
          className: 'color-black font-bolder',
          innerHTML: taskType.title
        }
      }, {
        type: 'div',
        elmAttrs: {
          innerHTML: taskCount,
          className: 'bg-primary color-white font-body-reduced'
        }
      }]
    }, {
      type: 'button',
      elmAttrs: {
        className: '',
        onclick: () => {
          data.modalOpen = 'add-task';
          data.editModalId = taskType.id;
          renderContent();
        }
      },
      childElms: [getMaterialIcon('add', 'font-body color-black')]
    }]
  }
}

function taskItem({
  task,
  taskType
}: {
  task: TaskItem;
  taskType: TaskType;
}){
  const priorityItem = priorityTypes.filter((item) => item.id === +task.priority)
  const priority = priorityItem[0].title || 'Priority'
  const userItem = data.people.filter((item) => item.id === +task.assignee)
  const user = userItem[0]?.name;
  const userChars = user?.split(' ').map((item) => item.charAt(0)).join('') || 'NA'
  const dateStr = formattedDate(task.createdOn)
  const actionBtns: any[] = [];
  for (let i = 0; i < taskActionItems.length; i++) {
      const item = taskActionItems[i];
      let addItem = true;
      if(!taskType.forward && item.key === 'forward') {
        addItem = false;
      }
      if(!taskType.previous && item.key === 'previous') {
        addItem = false;
      }
      if(addItem) {
        actionBtns.push({
          type: 'button',
          elmAttrs: {
            onclick: () => taskItemAction({item, task, taskType})
          },
          childElms: [getMaterialIcon(item.icon, 'font-body')]
        })
      }
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'task-item bg-whitesmoke'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'priority-action-wrapper'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
        innerHTML: priority,
        className: `task-priority bg-black color-white font-body-reduced ${priorityItem[0].className}`
        }
      }, {
        type: 'div',
        childElms: actionBtns,
      }]
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: task.title,
        className: 'task-item-title font-body-enhanced font-bold'
      }
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: task.desc,
        className: 'task-desc'
      }
    }, {
      type: 'div',
      elmAttrs: {
        className: 'task-dets'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
          innerHTML: userChars,
          className: 'bg-primary color-white font-body-reduced'
        }
      }, {
        type: 'div',
        elmAttrs: {
          innerHTML: dateStr,
          className: 'font-body-reduced font-bolder'
        }
      }]
    }]
  }
}

function taskItemAction({
  item,
  task,
  taskType
}: {
  item: TaskActionItem;
  task: TaskItem;
  taskType: TaskType
}) {
  const key = item.key
  if(key === 'previous' || key === 'forward') {
    data.tasks.map((x: TaskItem) => {
      if(x.id === task.id) {
        if(key === 'previous' && taskType.previous) {
          x.status = taskType.previous
        }
        if(key === 'forward' && taskType.forward) {
          x.status = taskType.forward
        }
      }
      return x;
    })
  } else if(key === 'delete') {
    const taskIndex = data.tasks.findIndex((x: TaskItem) => x.id === task.id)
    data.tasks.splice(taskIndex, 1);
  } else if(key === 'edit') {
    data.modalOpen = 'edit-task';
    data.editModalId = task.id;
  }
  renderContent();
  return null;
}

function getFilterTasks() {
  let tasks = [...data.tasks];
  if(data.activeProjectId) {
    tasks = tasks.filter((task) => data.activeProjectId && task.project.toString() === data.activeProjectId.toString());
  }
  if(data.activePersonId) {
    tasks = tasks.filter((task) => data.activePersonId && task.assignee.toString() === data.activePersonId.toString());
  }
  if(data.activePriorityId) {
    tasks = tasks.filter((task) => data.activePriorityId && task.priority.toString() === data.activePriorityId.toString());
  }
  return tasks;
}

export default taskItems
