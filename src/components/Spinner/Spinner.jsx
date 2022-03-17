import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useSelector } from 'react-redux';

// reselector
import { isLoadingSelector } from 'state/app/appSelector';

export default function Spinner() {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
