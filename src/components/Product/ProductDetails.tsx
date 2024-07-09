import React, { useState } from 'react';
import { Product } from '../../utils/interfaces';
import { Button, Chip, Collapse, Typography, Box } from '@mui/material';
import { format, addDays } from 'date-fns';
import cartStore from '../../store/CartStore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Replay30Icon from '@mui/icons-material/Replay30';

interface ProductDetailsProps {
  product: Product;
}

const qualities = [
  { label: 'Ecofriendly', adjustment: -0.1 },
  { label: 'Good', adjustment: 0 },
  { label: 'Excellent', adjustment: 0.1 },
  { label: 'New', adjustment: 0.2 }
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedQuality, setSelectedQuality] = useState(qualities[1]);
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const calculatePrice = (basePrice: number, adjustment: number) => {
    return (basePrice * (1 + adjustment)).toFixed(2);
  };

  const handleQualityChange = (quality: any) => {
    setSelectedQuality(quality);
  };

  const adjustedPrice = calculatePrice(product.price, selectedQuality.adjustment);
  const deliveryDate = format(addDays(new Date(), 3), 'EEEE, MMMM d');

  return (
    <Box flex={1} >
      <Typography variant="h3" component="h1" gutterBottom>
        {product.title} - {selectedQuality.label}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Condition: {selectedQuality.label}
      </Typography>
      <Box display="flex" alignItems="baseline" mb={4}>
        <Typography variant="h4" component="span" color="textPrimary" mr={2}>
          ${adjustedPrice}
        </Typography>
        {product.originalPrice && (
          <Typography variant="h6" component="span" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
            ${product.originalPrice}
          </Typography>
        )}
      </Box>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {product.reviews} reviews
      </Typography>
      
      <Box mb={4} display="flex" gap={2}>
        {qualities.map((quality) => (
          <Chip
            key={quality.label}
            label={quality.label}
            onClick={() => handleQualityChange(quality)}
            sx={{
              backgroundColor: selectedQuality.label === quality.label ? '#FBBF24' : undefined,
              color: selectedQuality.label === quality.label ? '#FFFFFF' : undefined
            }}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FBBF24',
          color: '#FFFFFF',
          mb: 4,
          width: "100%",
          '&:hover': {
            backgroundColor: '#F6AD10',
          }
        }}
        onClick={() => cartStore.addToCart({ ...product, price: parseFloat(adjustedPrice) })}
      >
        Add to cart
      </Button>
      <Typography variant="subtitle1" color="textSecondary" mb={2}>
        Free delivery by {deliveryDate}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={4}>
        Order within 10 Minutes
      </Typography>

      <Box mb={4} display="flex" className='space-x-2' alignItems="center" bgcolor="grey.100" p={2} borderRadius={2}>
        <CalendarMonthIcon  className="w-12 h-12 mr-4" style={{color: '#FBBF24',}}/>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">12-Month Warranty</Typography>
          <Typography variant="body2" color="textSecondary">We're so confident in our tech, we back everything with a 1-year warranty.</Typography>
        </Box>
      </Box>
      <Box mb={4} display="flex" className='space-x-2' alignItems="center" bgcolor="grey.100" p={2} borderRadius={2}>
        <Replay30Icon  className="w-12 h-12 mr-4" style={{color: '#FBBF24',}}/>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Hassle-Free Returns</Typography>
          <Typography variant="body2" color="textSecondary">If you don't love your device, our team will take it back within 30 days!</Typography>
        </Box>
      </Box>

      <Box mb={4}>
        <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center">
          Description
          <Button onClick={() => setDescriptionOpen(!descriptionOpen)}>
            {descriptionOpen ? 'Hide' : 'Show'}
          </Button>
        </Typography>
        <Collapse in={descriptionOpen}>
          <Typography variant="body2" color="textSecondary" mt={2}>
            {product.description}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
};

export default ProductDetails;
