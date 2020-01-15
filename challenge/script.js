const cardData = [
  {
    title: "Octavius Kraken",
    subtitle: "Escape Artist",
    content: "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
    imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Leonardo",
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

function makingAComponent(title, subtitle, content, imgsrc) {
  // 1- Create HTML markup
  const box = document.createElement("div");
  const boxImage = document.createElement("img");
  const boxName = document.createElement("h2");
  const boxSubtitle = document.createElement("p");
  const boxDescription = document.createElement("p");
  // 2- Define HTML structure
  box.append(boxImage);
  box.append(boxName);
  box.append(boxSubtitle);
  box.append(boxDescription);
  // 3- Add CSS styles using classes
  box.classList.add("card");
  boxSubtitle.classList.add('subtitle');
  boxDescription.classList.add('desc');
  
  // 4- Configure text/img content
  boxName.textContent = title;
  boxImage.src = imgsrc;
  boxSubtitle.textContent = subtitle;
  boxDescription.textContent = content;
  
  // 5- Add some dynamic functionality of your choice!
  boxName.addEventListener('mouseover', event => {
    boxName.style.backgroundColor = 'red';
  });

  return box;
}


const pleaseWork = document.querySelector(".container");
// 6- Generate new elements from data
cardData.forEach(data => {
  pleaseWork.append(
    makingAComponent(data.title, data.subtitle, data.content, data.imgsrc)
  );
});