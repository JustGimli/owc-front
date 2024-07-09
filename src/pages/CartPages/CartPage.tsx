import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import cartStore from '../../store/CartStore';
import { Product } from '../../utils/interfaces';

const CartPage: React.FC = observer(() => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Typography variant="h4" className="mb-4">Your Cart</Typography>
      <ul>
        {cartStore.cart.map((product: Product, index: number) => (
          <li key={index} className="flex items-center mb-4">
            <img src={product.imageUrls[0]} alt={product.title} className="w-24 h-auto mr-4" />
            <div className="flex-1">
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">${product.price}</Typography>
            </div>
            <IconButton onClick={() => cartStore.removeFromCart(product)} className="ml-4">
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right">
        <Typography variant="h6">Total Items: {cartStore.count}</Typography>
        <Typography variant="h6">Total Price: ${cartStore.total}</Typography>
        <Link to="/checkout">
          <Button  sx={{
          backgroundColor: '#FBBF24',
          color: '#FFFFFF',
          mb: 4,
          width: "100%",
          '&:hover': {
            backgroundColor: '#F6AD10',
          }
        }} variant="contained" className="mt-4 bg-orange-500 hover:bg-orange-600" disabled={cartStore.cart.length == 0}>
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
});

export default CartPage;
