import './index.css';

function formSubmitBtn({
  onclick,
  className = 'bg-primary color-white font-medium font-body',
  text = 'Submit'
}: {
  onclick: Function;
  className?: string;
  text?: string;
}) {
  return {
    type: 'div',
    elmAttrs: {
      className: 'form-button-wrapper'
    },
    childElms: [{
      type: 'button',
      elmAttrs: {
        innerHTML: text,
        className,
        onclick: (): void => {
          onclick()
        }
      }
    }]
  }
}

export default formSubmitBtn
