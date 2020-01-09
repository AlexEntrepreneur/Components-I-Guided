const cardData = [
  {
    title: "Octavius Kraken",
    subtitle: "Escape Artist",
    content: "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
    imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Leonardo ",
    subtitle: "Surfer / Pizza lover",
    content: "Super Powers: Decelerated Aging, Dermal Armor/Shell Formation, Enhanced Durability, Enhanced Endurance, Retractable Head, Night Vision, Speed Swimming.",
    imgsrc: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Captain Nemo",
    subtitle: "Comedian",
    content: "Super Powers: Live in a sea anenome away from predators. Has a slimy mucus covering his body that protects him from the sea anemone. Tells good dad jokes.",
    imgsrc: "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
];

// reusuable card component with parameters we will use to pull in our data
// 0- Create component function
function createCard(title, subtitle, content, imgsrc) {
  // 1- Create HTML markup
  const card = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardSubtitle = document.createElement('p');
  const cardContent = document.createElement('p');
  const cardImg = document.createElement('img');
  
  
  
  // 2- Define HTML structure
  card.append(cardImg);
  card.append(cardTitle);
  card.append(cardSubtitle);
  card.append(cardContent);
  
  // 3- Add CSS styles using classes
  card.classList.add('card');
  cardSubtitle.classList.add('subtitle');
  cardContent.classList.add('desc');
  
  // 4- Configure text/img content
  cardContent.textContent = content;
  cardTitle.textContent = title;
  cardSubtitle.textContent = subtitle;
  cardImg.src = imgsrc;
  
  // 5- Add dynamic functionality
  
  return card;
}

// Grabbing our container so we can append the card component to it.
const container = document.querySelector('.container');

// container.append(createCard('hi rosie', 'best cat award'));


// looping through our data to create multiple card components and appending to the container
// 6- Generate new elements from data
cardData.forEach(data => {
  console.log('creating panel:', data.title);
  container.append(createCard(data.title, data.subtitle, data.content, data.imgsrc));
});