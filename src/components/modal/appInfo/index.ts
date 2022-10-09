import { infoBullets } from "../../../helpers/utils";

import './index.css';

function appInfo() {
  const childElms: any[] = []
  for (let i = 0; i < infoBullets.length; i++) {
      const info = infoBullets[i];
      childElms.push({
        type: 'li',
        elmAttrs: {
          innerHTML: info,
          className: 'font-medium font-body-enhanced'
        }
      })
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'shadow app-info-wrapper'
    },
    childElms: [{
      type: 'ul',
      childElms
    }]
  }
}

export default appInfo;
