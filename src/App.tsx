
import CardList from './components/CardList/CardList';

function App() {
  const cards = [
    { id: 1, title: 'Product 1', price: 100, originalPrice: 150, reviews: 10, imageUrl: 'https://www.plug.tech/cdn/shop/products/airpods2a_0001_2.jpg?v=1666737107&%3Bwidth=500&em-format=avif&em-width=500' },
    { id: 2, title: 'Product 2', price: 200, originalPrice: 250, reviews: 20, imageUrl: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  return (
    <div className="app">
      <h1>Магазин</h1>
      <CardList cards={cards} />
      {/* <Cart /> */}
    </div>
  );

}

export default App;
