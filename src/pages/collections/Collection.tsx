import CardList from "../../components/CardList/CardList";
import { Product } from "../../utils/interfaces";
import { productsList } from "../../utils/products";

export default function CollectionPage() {
  // return <></>
  return (
    <div className="my-5 mx-4 lg:mx-40">
      <CardList cards={productsList} />
    </div>
  );
}
