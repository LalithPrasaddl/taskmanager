import { generateContent, getMaterialIcon } from "../wrapper"
import {renderContent, data} from '../appWrapper';
import leftNavItems from "./leftNavItems";
import { priorityTypes } from "../../helpers/utils";

import './index.css';

function leftNav(): HTMLElement | null {
  const leftNavDom = {
    type: 'div',
    elmAttrs: {
      className: 'left-nav bg-white border-tertiary',
      id: 'left-nav'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'logo-wrapper color-primary font-bolder font-title',
        innerHTML: 'kaarya'
      },
    },
    {
      type: 'div',
      elmAttrs: {
        className: 'left-project-wrapper border-tertiary'
      },
      childElms: [leftNavHead({
        title: 'Priority',
        modalType: 'add-project',
        addEnabled: false
      }), ...leftNavItems({
        items: priorityTypes,
        activeDataItem: 'activePriorityId',
        editModalOpen: '',
        editEnabled: false,
      })]
    },
    {
      type: 'div',
      elmAttrs: {
        className: 'left-project-wrapper border-tertiary'
      },
      childElms: [leftNavHead({
        title: 'Projects',
        modalType: 'add-project'
      }), ...leftNavItems({
        items: data.projects,
        activeDataItem: 'activeProjectId',
        editModalOpen: 'edit-project',
        editEnabled: true,
      })]
    }, {
      type: 'div',
      elmAttrs: {
        className: 'left-project-wrapper border-tertiary'
      },
      childElms: [leftNavHead({
        title: 'People',
        modalType: 'add-person'
      }), ...leftNavItems({
        items: data.people,
        activeDataItem: 'activePersonId',
        editModalOpen: 'edit-person',
        editEnabled: true
      })]
    }]
  }
  const leftNav = generateContent(leftNavDom)
  return leftNav
}

function leftNavHead({
  title,
  modalType,
  addEnabled = true
}: {
  title: string;
  modalType: ModalOpen;
  addEnabled?: boolean;
}) {
  const childElms: any[] = [{
    type: 'div',
    elmAttrs: {
      innerHTML: title
    }
  }]
  if(addEnabled) {
    childElms.push({
      type: 'button',
      elmAttrs: {
        className: 'btn',
        onclick: () => {
          data.modalOpen = modalType;
          data.editModalId = null;
          renderContent()
        }
      },
      childElms: [getMaterialIcon('add_circle', 'font-body')]
    })
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'left-project-head font-medium',
    },
    childElms
  }
}

export default leftNav
