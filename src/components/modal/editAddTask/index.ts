import { focusElement, priorityTypes, taskTypes, taskFormFields, generateRandomNumber, getCurrentDate } from "../../../helpers/utils";
import { closeModal, data } from "../../appWrapper"
import formItem from "../../base/formitem";
import formSubmitButton from "../../base/formSubmitButton";

import './index.css';

function editAddTask() {
  let fieldValue: any = {}
  const isEditMode = data.editModalId && data.modalOpen === 'edit-task';
  if(isEditMode) {
    const selEditTask = data.tasks.filter((item: TaskItem) => Number(data.editModalId) === item.id)
    if(selEditTask && selEditTask[0]) {
      fieldValue = {...selEditTask[0]}
    }
  }
  const fieldItems = []
  for (let i = 0; i < taskFormFields.length; i++) {
      const field = taskFormFields[i];
      let value: number | string = fieldValue[field.id] || '';
      let options: any[] = []
      if(field.type === 'select') {
        value = 1;
        if(field.id === 'assignee') {
          options = data.people.map((person) => {return {id: person.id, title: person.name}});
          value = 1; // default to current logged in user.
          if(data.activePersonId) {
            value = data.activePersonId;
          }
        }
        if(field.id === 'status') {
          options = taskTypes;
          if(data.editModalId) {
            value = data.editModalId;
          }
        }
        if(field.id === 'priority') {
          options = priorityTypes;
        }
        if(field.id === 'project') {
          options = data.projects.map((project) => { return {id: project.id, title: project.title}});
          if(data.activeProjectId) {
            value = data.activeProjectId
          }
        }
      }
      value = fieldValue[field.id] || value
      if(value) {
        value = value.toString()
      }
      console.log(value, field.id)
      fieldItems.push(formItem({
        label: field.label,
        id: field.id,
        value,
        enterKeyHandler: editAddTaskSubmit,
        autofocus: i === 0,
        type: field.type,
        options
      }))
  }
  focusElement('title');
  return {
    type: 'div',
    elmAttrs: {
      className: 'task-form shadow'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'task-title font-medium font-title-enhanced',
        innerHTML: isEditMode ? 'Edit Task' : 'Add Task'
      }
    }, {
      type: 'div',
      elmAttrs: {
        className: 'task-form-wrapper',
      },
      childElms: fieldItems
    }, formSubmitButton({
      onclick: editAddTaskSubmit
    })]
  }
}

function editAddTaskSubmit() {
  let valid = true;
  const date = getCurrentDate();
  let fieldValue: any = {}
  for (let i = 0; i < taskFormFields.length; i++) {
      const field = taskFormFields[i];
      const fieldItem = document.getElementById(field.id);
      if(fieldItem?.value) {
        console.log(fieldItem?.value, field.id)
        fieldValue[field.id] = fieldItem.value
      } else {
        valid = false;
      }
  }
  if(valid) {
    if(data.editModalId && data.modalOpen === 'edit-task') {
      data.tasks.map((item: TaskItem) => {
          if(item.id === Number(data.editModalId)) {
            item.title = fieldValue.title;
            Object.keys(fieldValue).map((key: string) => {
              item[key] = fieldValue[key]
              return null;
            })
            item.updatedOn = date;
          }
          return item;
      })
    } else {
      data.tasks.push({
        ...fieldValue,
        createdOn: date,
        updatedOn: date,
        id: generateRandomNumber(500000),
      })
    }
    data.activeProjectId = Number(fieldValue.project);
    closeModal();
  }
}

export default editAddTask
