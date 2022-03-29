import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error_404 = () => {
    let message = "Product does not exist";

    useEffect(() => {
        const error = alert(message);
    }, []);

  return (
      <>
        <h1>Error_404</h1>
        <img src="https://c.tenor.com/FcVg5W9zZJQAAAAC/error.gif" alt="" />
      </>
  )
}

export default Error_404;