import React, { useEffect } from 'react';
import './electronics.css';
import { useSelector, useDispatch } from 'react-redux';
import { electronicsLoading, addToCart } from '../redux/electronics/action';

const Electronics = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.electronics.data);
  const loading = useSelector((state) => state.electronics.loading);
  const error = useSelector((state) => state.electronics.error);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(electronicsLoading());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
    return (
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-4 mt-5">
            <div className="card" style={{ height: '300px' }}>
              <div className="card-body">
                <div className='text-center w-100'>
                  <img src={product.image} className="card-img-top" style={{ width: "20%", height: "50%" }} alt={product.title} />
                  <h6 className="card-title mt-3">{product.title}</h6>
                  <p className="card-text"><small className="text-muted">Price: ${product.price}</small></p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleAddToCart(product)}
                    disabled={cartItems.some(item => item.id === product.id)}
                  >
                    {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
