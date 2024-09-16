import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addtoCart, removeSingleCart } from '../store/slices/addToCartSlice';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Cards({ title, img, desc, product, removeCart, quantity }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, minHeight: 400, marginBottom: 2 }}>
      <CardMedia sx={{ height: 160 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc.slice(0, 99)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
        {removeCart ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Quantity: {quantity}</Typography>
          </Box>
        ) : (
         <Button
            onClick={() => dispatch(addtoCart(product))}
            size="small"
            variant="contained"
          >
            Add to Cart
          </Button>
        )}

        {removeCart && (
          <Button
            onClick={() => dispatch(removeSingleCart(product))}
            size="small"
            variant="contained"
            color="error"
          >
            Remove
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
