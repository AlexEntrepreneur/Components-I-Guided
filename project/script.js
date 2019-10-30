const panelData = [
  {
    title: "First Panel",
    content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne."
  },
  {
    title: "Second Panel",
    content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place."
  },
  {
    title: "Third Panel",
    content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital."
  },
  {
    title: "Fourth Panel",
    content: "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die."
  }
];

function createPanel(title, content) {
  // define new elements
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const buttonPanel = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
  const panelContent = document.createElement('div');

  // Setup structure of elements
  panel.append(panelBar);
  panel.append(panelContent);
  panelBar.append(panelTitle);
  panelBar.append(buttonPanel);
  buttonPanel.append(buttonOpen);
  buttonPanel.append(buttonClose);

  // set class names
  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  buttonPanel.classList.add('panel-buttons');
  buttonOpen.classList.add('panel-btn-open');
  buttonClose.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content');

  const open = '\u25bc';
  const close = '\u25b2';
  // set text content
  buttonOpen.textContent = open;
  buttonClose.textContent = close;
  panelContent.textContent = content;
  panelTitle.textContent = title;

  buttonPanel.addEventListener('click', event => {
    console.log('Panel detected click: ', event.target);
    // 1. toggle hide-btn on BOTH buttons
    buttonOpen.classList.toggle('hide-btn');
    buttonClose.classList.toggle('hide-btn');
    // 2. Change visibility of the content w/ 'toggle-on'
    panelContent.classList.toggle('toggle-on');
  })

  return panel;
}

const accordion = document.querySelector('.accordion');

// accordion.append(createPanel('Testing', 'We are testing our panel'));

panelData.forEach(data => {
  console.log('creating panel', data.title);
  accordion.append(createPanel(data.title, data.content));
});