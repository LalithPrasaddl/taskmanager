import { focusElement, generateRandomNumber, peopleIconsList } from "../../../helpers/utils";
import { closeModal, data } from "../../appWrapper";
import formItem from "../../base/formitem";
import formSubmitBtn from "../../base/formSubmitButton";

import './index.css';

function editAddPerson() {
  let value = '';
  if(data.editModalId && data.modalOpen === 'edit-person') {
    const selEditPerson = data.people.filter(people => people.id === data.editModalId)
    if(selEditPerson && selEditPerson.length === 1) {
      value = selEditPerson[0].name;
    }
  }

  focusElement('person-name');
  const childElms = [formItem({
    label: 'Person Name',
    id: 'person-name',
    value,
    enterKeyHandler: editAddPersonSubmit,
    autofocus: true,
    type: 'input'
  }), formSubmitBtn({
    onclick: editAddPersonSubmit
  })]
  if(data.modalOpen === 'edit-person' && data.editModalId !== 1) {
    childElms.push(formSubmitBtn({
      onclick: deletePerson,
      text: 'Delete',
      className: 'color-red'
    }))
  }
  const addPerson = {
    type: 'div',
    elmAttrs: {
      className: 'add-person-wrapper shadow bg-white'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'title font-medium font-title-enhanced',
        innerHTML: data.editModalId ? 'Edit Person' : 'Add Person'
      }
    }, {
      type: 'div',
      elmAttrs: {
        className: 'form-wrapper',
      },
      childElms
    }]
  }
  return addPerson
}

function editAddPersonSubmit() {
  const personName: HTMLInputElement = document.getElementById('person-name');
  if (personName && personName.value && personName.value.length <= 15) {
    const name = personName.value;
    if(data.editModalId && data.modalOpen === 'edit-person') {
      data.people.map((person) => {
        if(person.id === data.editModalId) {
          person.name = name;
        }
        return person;
      })
      data.editModalId = null;
    } else {
      const random = generateRandomNumber(peopleIconsList.length);
      const icon = peopleIconsList[random];
      const id = data.people.length + 1;
      data.people.push({
        id,
        name,
        icon
      })
      data.activePersonId = id;
    }
    closeModal();
  }
}

function deletePerson() {
  const personIndex = data.people.findIndex((person) => person.id === data.editModalId)
  data.people.splice(personIndex, 1); // Remove the user from the list of users.
  data.tasks.map((task) => { // Re assign any tasks that were assigned to the user to the currently logged in user.
    if(data.editModalId && task.assignee.toString() === data.editModalId.toString()) {
      task.assignee = 1;
    }
    return task;
  })
  if(data.activePersonId === data.editModalId) {
    data.activePersonId = null;
  }
  closeModal();
}

export default editAddPerson
