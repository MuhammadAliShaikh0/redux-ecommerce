import { Grid, Button, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Card';
import Header from './Header';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { addtoCart, isLoading } = useSelector((state) => state.addToCartReducer);

  const groupedCart = addtoCart.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          groupedCart.map((e, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              {/* Pass the quantity and enable remove button */}
              <Cards
                removeCart={true}
                product={e}
                title={e.title}
                desc={e.description}
                img={e.image}
                quantity={e.quantity}  // Show the quantity in the cart
              />
            </Grid>
          ))
        )}
      </Grid>

      {/* Back to Home Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Link to="/">
          <Button variant="outlined">Back to Home</Button>
        </Link>
      </Box>
    </>
  );
};

export default Cart;
