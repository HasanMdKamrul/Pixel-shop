// ** load data 

const dataLoader = async()=>{
  try {
      const response = await fetch('../data.json');
      response.ok ? console.log("Successful") : console.log('failed');
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error);
  }
};

// ** display the data in ui

const dataDisplay = async()=>{
  // ** where to display
  const cardContainer = document.getElementById('card-container');
  // ** data loaded
  const phones = await dataLoader();
  // console.log(phones)
  // ** get the individual phones

  phones.forEach(phone => {
      const {id,price,img,name} = phone;

      const div = document.createElement('div');

      div.classList.add('w-full','max-w-sm','rounded-lg','shadow-md','dark:bg-gray-800','dark:border-gray-700')

      div.innerHTML = `
      <a href="#">
      <img
        class="p-8 rounded-t-lg"
        src="${img}"
        alt="product image"
      />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          ${name}
          <div class='flex gap-3'>
              <img class='w-5' src="../heart.png" alt="" />
              <img class='w-5' src="../recycle.png" alt="" />
          </div>
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Third star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fourth star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fifth star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >5.0</span
        >
      </div>
      <div class="flex justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >$${price}</span
        >
        <label onclick="loadPhones('${id}')" for="my-modal" class="btn modal-button">Details</label>
        <button
          onclick="addToCart('${id}')"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Add to cart</
        button>
      </div>
    </div>

      `;

      cardContainer.appendChild(div);

      displayAddToCart();

  })
};
// ** Add to cart functionality

let count=0;
// const products = [];

const addToCart = async(productId)=>{


// ** load data
const phones = await dataLoader();
// **
const item = phones.find(phone => productId === phone.id);

// products.push(item);

count ++;
// ** set count value to ls
localStorage.setItem('count',JSON.stringify(count));

// ** set the data to localStorage
setLocalStorageData(item)
displayAddToCart();

};

// ** display product count

const productCounter = ()=>{
const counterContainer = document.getElementById('drawer-right-label');
// ** get the counter value
const newCount = localStorage.getItem('count')
counterContainer.innerHTML = `Products: ${newCount}`
}





// ** get the data from local storage

const getLocalStorageData = ()=>{
const savedProducts = JSON.parse(localStorage.getItem('cart'));
let products = [];
savedProducts && (products = savedProducts)
return products;
};

// ** set data to localStorage

const setLocalStorageData = (item)=>{
const savedProducts = getLocalStorageData();
if (savedProducts.length === 0) {
  const newProducts = [
    item
  ]
    localStorage.setItem('cart', JSON.stringify(newProducts))
} else{
  const newProducts = [
    ...savedProducts,
    item
  ];
  localStorage.setItem('cart',JSON.stringify(newProducts))
}
}

const displayAddToCart = ()=>{
// ** display add to cart
let newPrice = 0;
let tax;
let totalPriceOfProducts;
// ** get the value from ls
const savedProducts = getLocalStorageData();
// console.log(savedProducts)
// ** where to display
const cartContainer = document.getElementById('cart-products');
// ** calculation display
const calculationContainer = document.getElementById('cart-calculation')
cartContainer.textContent = ``;
savedProducts.forEach((product,index) => {
  const {price,img,id,name} = product;
  // console.log(price)
  newPrice = newPrice+price;
  tax = newPrice * 10/100;
  totalPriceOfProducts = newPrice + tax;

  const li = document.createElement('li');
  li.classList.add('flex','space-x-3');
  li.innerHTML = `
   <!-- Icon -->
          <span
            class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
            >${name.slice(0,10)}</span
          >
          <p>${price}</p>
          <img class='w-6' src=${img} alt="" />
          <button onclick="deleteButton(${index})"><i class="fa-solid fa-trash"></i></button>
  `;

  cartContainer.appendChild(li);

  // ${newPrice.toFixed(2)}
  // Net price:${newPrice.toFixed(2)}
  // Tax:${tax.toFixed(2)
  // ${totalPriceOfProducts.toFixed(2)
  // Clear products bitton

  calculationContainer.innerHTML = `

  <div>
    <p id="netprice">Net price:${newPrice ? newPrice.toFixed(2): 0}</p>
    <p id="taxprice">Tax:${tax ? tax.toFixed(2) : 0}</p>
    <p id="grandtotal">Total:${totalPriceOfProducts ? totalPriceOfProducts.toFixed(2): 0} </p>
    <button onclick="clearProducts()" class="px-3 py-2 bg-blue-500 rounded-xl text-white">Clear products</button>
  </div>

  `

});
productCounter();
};

const getInnerText = id => parseFloat(document.getElementById(id).innerText);

const deleteButton = (index)=>{
  // ** previous calculation value

  let netPrice = getInnerText('netprice');
  let taxprice = getInnerText('taxprice');
  let grandtotal = getInnerText('grandtotal');



  const countSaved = localStorage.getItem('count');

  const newCount = countSaved - 1;

  // ** update count

  localStorage.setItem('count',JSON.stringify(newCount))


// ** get the value from localStorage
const savedCart = getLocalStorageData();

const deleteValue = savedCart.splice(index,1);

const {price} = deleteValue[0];

netPrice = netPrice-price;
taxprice = netPrice * 10/100;
grandtotal = netPrice - taxprice;

if (isNaN(netPrice) ) {
  netPrice = 0;
 
}

if (isNaN(taxprice)) {
  taxprice = 0;
 
}


if (isNaN(grandtotal)) {
  grandtotal = 0;
  
}
document.getElementById('taxprice').innerText = taxprice;
document.getElementById('netprice').innerText = netPrice;
document.getElementById('grandtotal').innerText = grandtotal;





document.getElementById('grandtotal');

// ** set data to ls

localStorage.setItem('cart',JSON.stringify(savedCart));

// ** calculation update



displayAddToCart();

}



// ** clear products func

const clearProducts = ()=>{
 // ** calculation display
 const calculationContainer = document.getElementById('cart-calculation')
// ** localStorage remove

localStorage.removeItem('cart');
localStorage.removeItem('count');
calculationContainer.textContent = ``;
displayAddToCart()

}


// ** load individual phone details

const loadPhones = async(productId)=>{
  // ** load all products data

  const phones = await dataLoader();

  const phone = phones.find(phone => phone.id === productId);

  phoneDisplay(phone);
};

// ** display individual phone on modal
const phoneDisplay = phone=>{
// ** Where to display

const phoneContainer = document.getElementById('modal-body');

const {id,name,img,price} = phone;

phoneContainer.textContent = ``

phoneContainer.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl image-full">
<><figure>
    <img src="${img}" alt="Shoes" />
  </figure><div class="card-body">
      <h2 class="card-title text-5xl text-cyan-600">Product: ${name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <h2 class="card-title">Price:<span class="text-3xl text-blue-500">${price}</span> </h2>
    </div></>
</div>
<div class="modal-action">
  <label for="my-modal" class="btn">Yay!</label>
</div>

`;

}

dataDisplay()