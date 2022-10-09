import leftNav from './leftNav';
import rightNav from './rightNav';
import modal from './modal';

import '../index.css';
import { getCurrentDate } from '../helpers/utils';

export function renderContent(): void {
  const app = document.getElementById('root')
  const leftNavPage = leftNav();
  const rightNavPage = rightNav();
  if (app) {
    app.classList.add('font-body');
    app.classList.add('color-black');
    if(leftNavPage) {
      app.append(leftNavPage)
    }
    if(rightNavPage) {
      app.append(rightNavPage);
    }
    if(data.modalOpen) {
      const modalPage = modal();
      if(modalPage) {
        app.append(modalPage);
      }
    } else {
      const modal = document.getElementById('modal-wrapper')
      if(modal) {
        modal.remove();
      }
    }
  }
}

export function closeModal() {
  data.modalOpen = '';
  data.editModalId = null;
  renderContent();
}

export let data: Data = {
  modalOpen: '',
  projects: [{
    id: 1,
    title: 'Un Assigned',
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

const sessionData = window.localStorage.getItem('data')
if(sessionData) {
  const savedData = JSON.parse(sessionData)
  if(savedData) {
    data = {
      ...savedData
    }
  }
}

//when the window is closed
window.addEventListener("unload", function() {
  window.localStorage.setItem('data', JSON.stringify(data));
})

document.addEventListener('keyup', function(e) {
  if(e.which === 27 && data.modalOpen) {
    closeModal()
  }
})
