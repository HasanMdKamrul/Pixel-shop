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
    console.log(phones)
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

        cardContainer.appendChild(div)

    })
};
// ** Add to cart functionality

const products = [];
let count=0;

const addToCart = async(productId)=>{
  // ** load data
  const phones = await dataLoader();
  // **
  const item = phones.find(phone => productId === phone.id);

  products.push(item);

  count ++;
  
  displayAddToCart(products);
};

// ** display product count

const productCounter = ()=>{
  const counterContainer = document.getElementById('drawer-right-label');
  counterContainer.innerHTML = `Products: ${count}`
}



// ** display add to cart

const displayAddToCart = (products)=>{
  let newPrice = 0;
  let tax;
  let totalPriceOfProducts;
  // ** where to display
  const cartContainer = document.getElementById('cart-products');
  // ** calculation display
  const calculationContainer = document.getElementById('cart-calculation')
  cartContainer.textContent = ``;
  products.forEach(product => {
    const {price,img,id,name} = product;

    newPrice = newPrice+price;
    tax = newPrice * 10/100;
    totalPriceOfProducts = newPrice + tax;

    const li = document.createElement('li');
    li.classList.add('flex','space-x-3');
    li.innerHTML = `
     <!-- Icon -->
           
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
              >${name}</span
            >
            <p>${price}</p>
            <img class='w-6' src=${img} alt="" />

    `;

    cartContainer.appendChild(li);

    calculationContainer.innerHTML = `
    
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Net price:${newPrice.toFixed(2)}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tax:${tax.toFixed(2)}</p>
          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Total Price: ${totalPriceOfProducts.toFixed(2)}
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <button onclick="clearProducts()" href="#" class="inline-flex mt-5 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Clear products
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>

    
    `

  })
  productCounter();
}

// ** clear products func

const clearProducts = ()=>{
   // ** where to display
   const cartContainer = document.getElementById('cart-products');
   // ** calculation display
   const calculationContainer = document.getElementById('cart-calculation')

   cartContainer.textContent = ``;
   calculationContainer.textContent = ``;

   location.reload()
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
  <figure>
    <img src="${img}" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-5xl text-cyan-600">Product: ${name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <h2 class="card-title">Price:<span class="text-3xl text-blue-500">${price}</span> </h2>
  </div>
</div>
<div class="modal-action">
    <label for="my-modal" class="btn">Yay!</label>
</div>
  
  `;

}

dataDisplay()