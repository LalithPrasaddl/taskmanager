import { generateContent, getMaterialIcon } from "../wrapper";
import {data, closeModal} from '../appWrapper';
import editAddProject from './editAddProject';
import editAddPerson from "./editAddPerson";
import editAddTask from "./editAddTask";
import appInfo from "./appInfo";
import appSettings from "./appSettings";
import appStatistics from "./appStatistics";

import './index.css';

function modal() {
  const modalContent: any = [{
    type: 'button',
    elmAttrs: {
      className: 'close',
      onclick: () => {
        closeModal();
      }
    },
    childElms: [getMaterialIcon('close', 'font-large')]
  }]
  if(data.modalOpen) {
    if(data.modalOpen === 'edit-project' || data.modalOpen === 'add-project') {
      const editAddProjectContent = editAddProject()
      modalContent.push(editAddProjectContent)
    }
    if(data.modalOpen === 'edit-person' || data.modalOpen === 'add-person') {
      const editAddProjectContent = editAddPerson()
      modalContent.push(editAddProjectContent)
    }
    if(data.modalOpen === 'add-task' || data.modalOpen === 'edit-task') {
      const editAddTaskContent = editAddTask();
      modalContent.push(editAddTaskContent);
    }
    if(data.modalOpen === 'app-info') {
      const appInfoContent = appInfo();
      modalContent.push(appInfoContent)
    }
    if(data.modalOpen === 'app-settings') {
      const appSettingsContent = appSettings();
      modalContent.push(appSettingsContent);
    }
    if(data.modalOpen === 'app-statistics') {
      const appStatisticsContent = appStatistics();
      modalContent.push(appStatisticsContent);
    }
  }
  const modalDom = {
    type: 'div',
    elmAttrs: {
      className: 'modal-wrapper',
      id: 'modal-wrapper'
    },
    childElms: modalContent
  }
  const modal = generateContent(modalDom)
  return modal
}

export default modal;
