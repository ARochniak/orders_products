// functions for getters
let getOrderTitle;
let getProducts;

const store = {
  productList: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Processors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 1,
      date: '2017-06-30 12:09:33'
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 2',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 3',
      type: 'Memory',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 4,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 4',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 3,
      date: '2017-04-29 12:09:33'
    },
    {
      id: 5,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 5',
      type: 'Processors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 3,
      date: '2017-06-25 12:09:33'
    },
    {
      id: 6,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 6',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: '$', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 3,
      date: '2017-06-29 12:09:33'
    }
    // Adding getters to every product
  ].map(product => {
    Object.defineProperty(product, 'orderTitle', {
      get: () => getOrderTitle(product.order)
    });
    return product;
  }),
  activeOrder: null,
  ordersList: [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    }
    // Adding getters to every order
  ].map(order => {
    Object.defineProperty(order, 'products', {
      get: () => getProducts(order.id)
    });
    return order;
  })
};

getProducts = id => {
  const products = [];
  store.productList.forEach(product => {
    if (product.order === id) {
      products.push(product);
    }
  });
  return products;
};

getOrderTitle = id => {
  const order = store.ordersList.find(ord => id === ord.id);
  return order.title;
};

export default store;
