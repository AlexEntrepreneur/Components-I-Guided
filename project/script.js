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
  buttonOpen.classList.add('panel-btn-open');
  buttonClose.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content');

  // 4- Configure text/img content
  panelTitle.textContent = title;
  panelContent.textContent = content;
  buttonClose.textContent = '\u25BA';
  buttonOpen.textContent = '\u25BC';

  return panel;
}

const accordion = document.querySelector('.accordion');

accordion.append(createPanel('Testing the title', 'Testing the content inside my new component'));






// 5- Add dynamic functionality

// 6- Generate new elements from data