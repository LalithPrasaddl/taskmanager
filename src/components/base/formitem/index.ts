import './index.css';

type OptionItem = {
  id: number;
  title: string;
}
function formItem({
  label,
  id,
  value,
  autofocus = false,
  type = 'input',
  options = [],
  enterKeyHandler,
}: {
  label: string;
  id: string;
  value: string | number;
  autofocus?: boolean;
  type: string;
  options?: OptionItem[];
  enterKeyHandler?: Function;
}) {
  let fieldItem: any = {
    type: 'input',
    elmAttrs: {
      className: 'border-secondary',
      id,
      autocomplete: 'off',
      autofocus,
      value,
      onkeyup: (e: any) => {
        if(e.which === 13 && enterKeyHandler) {
          enterKeyHandler()
        }
      }
    }
  }
  if(type === 'select') {
    const childElms = []
    for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        console.log(opt.id, value)
        childElms.push({
          type: 'option',
          elmAttrs: {
            value: opt.id,
            innerHTML: opt.title,
            selected: opt.id.toString() === value
          }
        })
    }
    fieldItem = {
      type: 'select',
      elmAttrs: {
        className: '',
        id,
        value,
        selected: value
      },
      childElms
    }
  }
  const formItem = {
    type: 'div',
    elmAttrs: {
      className: 'form-item',
    },
    childElms: [{
      type: 'label',
      elmAttrs: {
        innerHTML: label,
        className: 'color-secondary font-body-reduced'
      }
    }, fieldItem]
  }
  return formItem
}

export default formItem
