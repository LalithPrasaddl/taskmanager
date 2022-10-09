// START Generic functions
export function createElement(type, attributes) {
  if (!type) {
    return null
  }
  let elm = document.createElement(type)
  if (attributes && Object.keys(attributes).length > 0) {
    var attrKeys = Object.keys(attributes)
    for (var i = 0; i < attrKeys.length; i++) {
      var attr = attrKeys[i]
      if (attr === 'style') {
        appendStylesToElm(elm, attributes[attr])
      } else if (attr === 'className') {
        appendClassNamesToElm(elm, attributes[attr])
      } else {
        if (attr.indexOf('data-') > -1) {
          elm.setAttribute(attr, attributes[attr])
        } else {
          elm[attr] = attributes[attr]
        }
      }
    }
  }
  return elm
}

function appendClassNamesToElm(elm, classNames) {
  if (classNames) {
    const attrType = typeof classNames
    let classList = attrType === 'string' ? classNames.split(' ') : classNames;
    for (let j = 0; j < classList.length; j++) {
      elm.classList.add(classList[j])
    }
  }
}

/*
function removeClassNamesFromElm(elm, classNames) {
  if (classNames) {
    const attrType = typeof classNames
    let classList = attrType  === 'string' ? classNames.split(' ') : classNames
    for (let j = 0; j < classList.length; j+=1) {
      elm.classList.remove(classList[j])
    }
  }
}
*/

function appendStylesToElm(elm, styles) {
  if (!elm) {
    return null
  }
  if (styles && Object.keys(styles).length > 0) {
    var stylePropKeys = Object.keys(styles)
    for (var i = 0; i < stylePropKeys.length; i++) {
      var styleAttr:any = stylePropKeys[i]
      elm.style[styleAttr] = styles[styleAttr]
    }
  }
}

export function generateContent(data) {
  if (!data.type) {
    return null
  }
  var elm = createElement(data.type, data.elmAttrs)
  if (data.elmAttrs && data.elmAttrs.id) {
    var existingElm = document.getElementById(data.elmAttrs.id)
    if (existingElm) {
      existingElm.innerHTML = ''
      elm = existingElm
    }
  }
  if (data.childElms) {
    for (var i = 0; i < data.childElms.length; i++) {
      var childData = data.childElms[i]
      if (childData.onlyAppend) {
        elm.append(childData.content)
      } else {
        var childElm: HTMLElement = generateContent(childData)
        elm.append(childElm)
      }
    }
  }
  return elm
}

export function getMaterialIcon(icon, className) {
  let classList = 'material-symbols-outlined color-black'
  if (className) {
    classList += ' ' + className;
  }
  return {
    type: 'span',
    elmAttrs: {
      className: classList,
      innerHTML: icon
    }
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
});

// END Generic functions
