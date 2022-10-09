import { defaultData } from '../../../helpers/utils';
import { closeModal, data } from '../../appWrapper';
import formSubmitButton from '../../base/formSubmitButton';

import './index.css';

function appSettings() {
  return {
    type: 'div',
    elmAttrs: {
      className: 'shadow app-settings-wrapper'
    },
    childElms: [formSubmitButton({
      onclick: resetAppData,
      text: 'Reset App Data',
    })]
  }
}

// TODO: Need to revisit for a better way to reset data.
function resetAppData(): void {
  const keys = Object.keys(data) as Array<keyof Data>;
  for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[key] = defaultData[key]
  }
  closeModal()
}

export default appSettings
