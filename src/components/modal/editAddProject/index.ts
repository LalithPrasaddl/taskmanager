import { focusElement, generateRandomNumber, getCurrentDate, projectIconsList } from "../../../helpers/utils";
import { closeModal, data } from "../../appWrapper";
import formItem from "../../base/formitem";
import formSubmitButton from "../../base/formSubmitButton";

import './index.css';

function editAddProject() {
  let value = '';
  if(data.editModalId && data.modalOpen === 'edit-project') {
    const selEditProject = data.projects.filter(project => project.id === data.editModalId)
    if(selEditProject && selEditProject.length === 1) {
      value = selEditProject[0].title;
    }
  }

  focusElement('project-name');
  const childElms = [formItem({
    label: 'Project Name',
    id: 'project-name',
    value,
    enterKeyHandler: editAddProjectSubmit,
    autofocus: true,
    type: 'input'
  }), formSubmitButton({
    onclick: editAddProjectSubmit
  })]
  if(data.modalOpen === 'edit-project' && data.editModalId !== 1) {
    childElms.push(formSubmitButton({
      onclick: deleteProject,
      className: 'color-red',
      text: 'Delete'
    }))
  }
  const addProject = {
    type: 'div',
    elmAttrs: {
      className: 'add-projects-wrapper shadow'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'title font-medium font-title-enhanced',
        innerHTML: data.editModalId ? 'Edit Project' : 'Add Project'
      }
    }, {
      type: 'div',
      elmAttrs: {
        className: 'form-wrapper',
      },
      childElms
    }]
  }
  return addProject
}

function editAddProjectSubmit() {
  const projectName: HTMLInputElement = document.getElementById('project-name');
  if (projectName && projectName.value && projectName.value.length <= 15) {
    const title = projectName.value;
    const date = getCurrentDate()
    if(data.editModalId && data.modalOpen === 'edit-project') {
      data.projects.map((project) => {
        if(project.id === data.editModalId) {
          project.title = title;
          project.updatedOn = date;
        }
        return project;
      })
      data.editModalId = null;
    } else {
      const random = generateRandomNumber(projectIconsList.length);
      const icon = projectIconsList[random];
      const id = data.projects.length + 1;
      data.projects.push({
        id,
        title,
        icon,
        updatedOn: date,
        createdOn: date
      })
      data.activeProjectId = id;
    }
    closeModal()
  }
}

function deleteProject() {
  const projIndex = data.projects.findIndex((project) => project.id === data.editModalId);
  if(projIndex) {
    data.projects.splice(projIndex, 1);
  }
  data.tasks.map((task) => {
    if(task.project === data.editModalId) {
      task.project = 1;
    }
    return task;
  })
  if(data.activeProjectId === data.editModalId) {
    data.activeProjectId = null;
  }
  closeModal()
}

export default editAddProject
