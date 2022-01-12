const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  
  let buttonDOM = document.querySelector(".btn-container"); // Created a DOM element which is targetted on btn-container div section to creating 4 buttons.
  
  let sectionDOM = document.querySelector(".section-center"); // Created a DOM element which is targetted on section-center div section to show menu items
  
  
  // let menuCategories = ["Korea", "Japan", "China", "All"] ===> I can redesign this array with .reduce() method. If any category name is repeated than once, I have to use .includes() method to creating an array which has nonrepeated category names as array elements.
  let menuCategories = menu.reduce( 
      (value, item) => {
          if (!value.includes(item.category)) {
              value.push(item.category);
          }
          return value;
      },
      ["All"]
  );
  
  
  let ButtonFunction = () => {
      let buttons = menuCategories.map((category) => {
              return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
          }).join("");  // Array of "menuCategories" is mapped with .map() method by "category" function. This function returns HTML content s of expected buttons.
          
      buttonDOM.innerHTML = buttons;  // Buttons are assigned to DOM element.
  
      let allButtons = document.querySelectorAll(".btn-item");  // Buttons shaped with CSS 
  
  
      allButtons.forEach((every) => { // Determine event activity in here.
        every.addEventListener("click", (event) => {
              let toBeShowed = menu.filter((item) => {
                  if (event.currentTarget.dataset.id === item.category) {
                      return item;
                  }
              });
              if (event.currentTarget.dataset.id === "All") {
                mainMenu(menu);
              } else {
                mainMenu(toBeShowed);
              }
              console.log(toBeShowed);
  
              console.log(e.currentTarget.dataset.id);
          });
      });
  };
  
  let mainMenu = (param) => {  // Main menu function ==> all menu items will be printed
      let oldContainer = param.map((item) => {
          return `<div class="menu-items col-xs-12 col-sm-12 col-lg-6">
                <img
                  src=${item.img}
                  alt=${item.title}
                  class="photo"
                />
                <div class="menu-info">
                  <div class="menu-title">
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </div>
                  <div class="menu-text">
                    ${item.desc}
                  </div>
                </div>
              </div>
        `;
      });
      oldContainer = oldContainer.join("");
      sectionDOM.innerHTML = oldContainer;
  };
  
  mainMenu(menu);
  ButtonFunction();
  
  
  
  