import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Product } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';
import ProductDetails from '../../components/Product/ProductDetails';
import ProductImages from '../../components/Product/ProductImages';
import AnimatedText from '../../components/Product/AnimatedText';
import StarReviews from '../../components/Product/StarReviews';
import { productsList } from '../../utils/products';
import { when } from 'mobx';
import { user } from '../..';



const ProductPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const product = productsList.find(product => product.id.toString() === id);

  when(
    () => !user.ip.length,
    () => {
      user.fetchIp();
    }
  );



  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex flex-col space-y-5'>
    <div className="flex flex-wrap p-4">
    
    <ProductImages imageUrls={product.imageUrls} />
    <ProductDetails product={product} />
   
    </div>
    <AnimatedText />
    <StarReviews rating={Math.round(4.9)} totalReviews={product.reviews} />
    </div>
  );
});

export default ProductPage;
