import { getCurrentDate, priorityTypes, taskTypes } from '../../../helpers/utils';
import { data } from '../../appWrapper';
import formSubmitButton from '../../base/formSubmitButton';
import './index.css';

function appStatistics() {
  let personProjTasks: any[] = []
  let report: string[] = [];
  data.people.map((person) => {
    const personProjTaskItem: any = {
      type: 'div',
      elmAttrs: {
        className: 'summary-person border-secondary'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
          innerHTML: person.name,
          className: 'font-bolder font-body'
        }
      }]
    }
    report.push(person.name);
    const personTasks = data.tasks.filter((task) => task.assignee.toString() === person.id.toString())
    const projTasks: any = {}
    for (let i = 0; i < personTasks.length; i++) {
        const task = personTasks[i];
        if(projTasks[task.project]) {
          projTasks[task.project].push(task)
        } else {
          projTasks[task.project] = [task]
        }
    }
    const projTaskKeys = Object.keys(projTasks)
    if(projTaskKeys.length) {
      for (let i = 0; i < projTaskKeys.length; i++) {
          const projId = projTaskKeys[i];
          const selProject = data.projects.filter((pro) => pro.id.toString() === projId.toString());
          const title = selProject[0]?.title;
          const today = getCurrentDate()
          const innerHTML = [[i + 1, '.'].join(''), title, 'Project'].join(' ')
          personProjTaskItem.childElms.push({
            type: 'div',
            elmAttrs: {
              innerHTML,
              className: 'summary-person-title font-medium'
            }
          })
          report.push('       ' + innerHTML)
          const taskChild: any[] = []
          for (let j = 0; j < projTasks[projId].length; j++) {
              const eachTask: TaskItem = projTasks[projId][j];
              const priority = priorityTypes.filter((prior) => prior.id.toString() === eachTask.priority.toString())[0]?.title || '';
              const status = taskTypes.filter((ty) => ty.id.toString() === eachTask.status.toString())[0]?.title || '';
              let lapse = today.getTime() - new Date(eachTask.createdOn).getTime();
              lapse = Math.round(lapse / 86400000);
              const taskInnerHTML = [
                eachTask.title,
                [priority, 'priority'].join(' '),
                [lapse, 'days since assigned'].join(' '),
                ['with', status, 'as', 'status'].join(' ')
              ].join(', ')
              taskChild.push({
                type: 'li',
                elmAttrs: {
                  innerHTML: taskInnerHTML + '.'
                }
              })
              report.push('           ' + taskInnerHTML + '.');
          }
          const taskItems = {
            type: 'ul',
            elmAttrs: {
              className: 'summary-person-tasks-wrapper'
            },
            childElms: taskChild
          }
          personProjTaskItem.childElms.push(taskItems)
      }
    } else {
      personProjTaskItem.childElms.push({
        type: 'div',
        elmAttrs: {
          innerHTML: 'No Tasks Assigned.',
          className: 'summary-no-tasks'
        }
      })
      report.push('       No Tasks Assigned.')
    }
    personProjTasks.push(personProjTaskItem)
    return person;
  })
  return {
    type: 'div',
    elmAttrs: {
      className: 'app-statistics-wrapper shadow'
    },
    childElms: [{
      type: 'div',
      childElms: [{
        type: 'div',
        elmAttrs: {
          innerHTML: 'Summary Generator',
          className: 'font-bolder font-title-reduced title'
        }
      }]
    }, ...personProjTasks, formSubmitButton({
      onclick: () => {
        navigator.clipboard.writeText(report.join('\n\n'));
      },
      text: 'Copy Report to Clipboard'
    })]
  }
}

export default appStatistics
