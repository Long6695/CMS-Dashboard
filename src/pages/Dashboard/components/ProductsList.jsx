import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const ProductsList = () => {
  return (
    <List sx={{ maxWidth: '600px', width: '100%' }}>
      <Typography variant="h5" ml="16px">
        Products
      </Typography>
      <ListItem>
        <Typography variant="h6">Category</Typography>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <ListItemText primary="Meat" />
        <Typography>10</Typography>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <ListItemText primary="Vegetable" />
        <Typography>10</Typography>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <ListItemText primary="Fish" />
        <Typography>10</Typography>
      </ListItem>
      <Divider variant="middle" />
    </List>
  );
};

export default ProductsList;
