import { data, renderContent } from "../../appWrapper";
import { getMaterialIcon } from "../../wrapper";

import './index.css';

type Items = Person[] | Project[] | Priority[]
function leftNavItems({
  items,
  editModalOpen,
  activeDataItem,
  editEnabled,
}: {
  items: Items;
  editModalOpen: 'edit-person' | 'edit-project' | '';
  activeDataItem: 'activePersonId' | 'activeProjectId' | 'activePriorityId';
  editEnabled: boolean;
}) {
  const leftNavItems = [];
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const classList = ['project-item', 'font-medium', 'font-body'];
      if(data[activeDataItem] === item.id) {
        classList.push('selected')
        classList.push('bg-primary')
        classList.push('color-white')
      } else {
        classList.push('color-secondary')
      }
      const icon = item.icon
      const childElms: any[] = [{
        type: 'div',
        elmAttrs: {
          className: 'project-item-content'
        },
        childElms: [getMaterialIcon(icon, 'font-body'),{
          type: 'div',
          elmAttrs: {
            innerHTML: item.name ?? item.title
          }
        }]
      }]
      if(editEnabled) {
        childElms.push({
          type: 'button',
          elmAttrs: {
            className: 'edit',
            onclick: (e: { stopPropagation: () => void; }) => {
              e.stopPropagation();
              data.editModalId = item.id;
              data.modalOpen = editModalOpen;
              renderContent();
            }
          },
          childElms: [getMaterialIcon('edit', 'font-body')]
        })
      }
      leftNavItems.push({
        type: 'button',
        elmAttrs: {
          className: classList,
          onclick: () => {
            if(data[activeDataItem] !== item.id) {
              data[activeDataItem] = item.id;
            } else {
              data[activeDataItem] = null;
            }
            renderContent();
          },
        },
        childElms
      })
  }
  return leftNavItems;
}

export default leftNavItems
