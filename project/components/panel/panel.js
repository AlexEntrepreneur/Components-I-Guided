// 0- Create component function
function createPanel(title, content) {
  // 1- Create HTML markup
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const panelButtons = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
  const panelContent = document.createElement('div');
  
  // 2- Define HTML structure
  panel.append(panelBar);
  panel.append(panelContent);
  panelBar.append(panelTitle);
  panelBar.append(panelButtons);
  panelButtons.append(buttonOpen);
  panelButtons.append(buttonClose);

  // 3- Add CSS styles using classes
  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  buttonOpen.classList.add('panel-btn-open', 'hide-btn');
  buttonClose.classList.add('panel-btn-close');
  panelContent.classList.add('panel-content');

  // 4- Configure text/img content
  panelTitle.textContent = title;
  panelContent.textContent = content;
  buttonClose.textContent = '\u25BA';
  buttonOpen.textContent = '\u25BC';
  
  // 5- Add dynamic functionality
  panelButtons.addEventListener('click', event => {
    console.log('Click detected on panel', event.target);

    // 1. toggle hide-btn class on buttons
    buttonOpen.classList.toggle('hide-btn');
    buttonClose.classList.toggle('hide-btn');
    // 2. toggle the toggle-on class on the content
    panelContent.classList.toggle('toggle-on');
  });

  return panel;
}
