const menu = [
    {
      id: 1,
      title: "Beef Fajitas",
      category: "dinner",
      price: 22.99,
      img: "./images/img1.jpg",
      desc: `Sizzling hot strips of marinated beef cooked with bell peppers and onions. Served with warm tortillas, guacamole, sour cream, and salsa for a customizable and flavorful Tex-Mex experience `,
    },
    {
      id: 2,
      title: "Vegetable Curry with Basmati Rice",
      category: "lunch",
      price: 19.99,
      img: "./images/img2.jpg",
      desc: `A fragrant blend of spices cooked with a variety of vegetables such as carrots, bell peppers, peas, and potatoes in a flavorful curry sauce. `,
    },
    {
      id: 3,
      title: "Spaghetti Bolognese",
      category: "dinner",
      price: 29.99,
      img: "./images/img3.jpg",
      desc: `A beloved Italian pasta dish consisting of al dente spaghetti noodles topped with a hearty meat sauce. The sauce is simmered to perfection. `,
    },
    {
      id: 4,
      title: "Classic Beef Burger",
      category: "lunch",
      price: 15.99,
      img: "./images/img4.jpg",
      desc: `A juicy grilled beef patty served on a toasted bun with lettuce, tomato, onion, and a choice of toppings. Served with a side of crispy French fries. `,
    },
    {
      id: 5,
      title: "Blueberry Pancakes",
      category: "breakfast",
      price: 11.99,
      img: "./images/img5.jpg",
      desc: `Delightful pancakes bursting with fresh blueberries in every bite. The pancake batter is infused with vanilla and cooked until golden. `,
    },
    {
      id: 6,
      title: "Fluffy Buttermilk Pancakes",
      category: "breakfast",
      price: 12.99,
      img: "./images/img6.jpg",
      desc: ` Classic breakfast pancakes made with a light and fluffy batter containing buttermilk. Cooked on a griddle until golden brown and served in a stack.  `,
    },
];

const menuItems = document.querySelector('.menu-items')
const btnContainer = document.querySelector(".buttons");

// Load Items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(items){
    let displayMenu = items.map(function(item){
        return ` 
        <div class="menu-item">
            <img src=${item.img} class="image">            
            <div class="item-info">
                <h4>${item.title} </h4>
                <p>${item.desc}</p>
                <span>Price: ${item.price}$</span>
            </div>
        </div>`
    });
    displayMenu = displayMenu.join('')
    menuItems.innerHTML = displayMenu
}

function displayMenuButtons() {

    // Buttons
    const categories = menu.reduce(
        function (values, item) {
            if(!values.includes(item.category)) {
                values.push(item.category)
            }
            return values
        }, ['all']
    );

    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" data-id="${category}">${category}</button>`
    }).join('')

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn')

    // Filter

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if(menuItem.category === category) {
                    return menuItem
                }
            });

            if(category === 'all') {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }
        });
    });
}

