import { data, renderContent } from "../appWrapper";
import { generateContent, getMaterialIcon } from "../wrapper"
import taskItems from './taskItems';

import './index.css';

function rightNav(): HTMLElement | null {
  let title: {type: 'font-title-reduced' | 'font-body', text: string}[] = [];
  if(data.activeProjectId) {
    let item: Project[] = data.projects.filter((project) => project.id === data.activeProjectId)
    title.push({type: 'font-title-reduced', text: item[0]?.title})
    title.push({type: 'font-title-reduced', text: 'project'})
  }
  if(title.length === 0) {
    title.push({type: 'font-body', text: 'All'})
  }
  title.push({type: 'font-title-reduced', text: 'tasks'})
  const titleChildElms: any[] = []
  for (let i = 0; i < title.length; i++) {
      const item = title[i];
      const className = item.type === 'font-title-reduced' ? 'font-title-reduced font-medium' : item.type
      titleChildElms.push({
        type: 'div',
        elmAttrs: {
          innerHTML: item.text,
          className: className
        }
      })
  }
  const rightNavDom = {
    type: 'div',
    elmAttrs: {
      className: 'right-nav bg-white',
      id: 'right-nav'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'right-top-nav border-tertiary'
      },
      childElms: [{
        type: 'div',
        childElms: [{
          type: 'div',
          elmAttrs: {
            className: 'right-title-wrapper'
          },
          childElms: titleChildElms
        }]
      }, {
        type: 'div',
        elmAttrs: {
          className: 'right-button-items-wrapper'
        },
        childElms: [{
          type: 'input',
          elmAttrs: {
            placeholder: 'Search'
          },
        }, {
          type: 'button',
          elmAttrs: {
            onclick: () => {
              data.modalOpen = 'app-info';
              renderContent();
            }
          },
          childElms: [
            getMaterialIcon('info'),
          ]
        }, {
          type: 'button',
          elmAttrs: {
            onclick: () => {
              data.modalOpen = 'app-settings';
              renderContent();
            }
          },
          childElms: [
            getMaterialIcon('settings')
          ]
        }]
      }]
    }, taskItems()]
  }
  const rightNav = generateContent(rightNavDom)
  return rightNav
}

export default rightNav
