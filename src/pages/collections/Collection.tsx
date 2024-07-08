
import CardList from "../../components/CardList/CardList";
import { Product } from "../../utils/interfaces";

export default function CollectionPage() {
    const cards: Product[] = [
        { id: 1, title: 'Product 1', price: 100, originalPrice: 150, reviews: 10, imageUrl: 'https://via.placeholder.com/150', condition: 'Excellent', deliveryDate: 'Monday, July 1', orderWithin: '02 Hours 31 Minutes', description: 'Description of the product goes here.' },
        { id: 2, title: 'Product 2', price: 200, originalPrice: 250, reviews: 20, imageUrl: 'https://via.placeholder.com/150', condition: 'Good', deliveryDate: 'Monday, July 1', orderWithin: '02 Hours 31 Minutes', description: 'Description of the product goes here.' },
        // Add more products as needed
      ];
    
    return <><CardList cards={cards}/></>
}