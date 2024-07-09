import React from "react";
import { observer } from "mobx-react-lite";
import cartStore from "../../store/CartStore";
import { Product } from "../../utils/interfaces";
import { PaymentHeader } from "./style";

const OrderSummary: React.FC = observer(() => (
  <div className="checkout-summary p-4 bg-gray-100 rounded-md shadow-md">
    <PaymentHeader className="text-2xl font-bold mb-4">
      Order Summary
    </PaymentHeader>
    <ul>
      {cartStore.cart.map((product: Product, index: number) => (
        <li key={index} className="summary-item flex items-center mb-4">
          <img
            src={process.env.PUBLIC_URL + product.imageUrls[0]}
            alt={product.title}
            className="summary-image w-20 h-20 mr-4 object-cover rounded-md"
          />
          <div className="summary-details">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-600">Condition: {product.condition}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="summary-total mt-4 text-right">
      <p className="text-lg font-semibold">Subtotal: ${cartStore.total}</p>
      <p className="text-xl font-bold">Total: ${cartStore.total}</p>
    </div>
  </div>
));

export default OrderSummary;
