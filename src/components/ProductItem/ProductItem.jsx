import React from 'react';
import './productItem.css'

const ProductItem = (props) => {
  const {
    product,
    onAdd,
    className
  } = props

  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <div className={"product-item" + className}>
      <img src={product.img} alt="" className="img"/>
      <b className="title">{product.title}</b>
      <p className="description">{product.description}</p>

      <div className="price">
        <span>Стоимость: <b>{product.price}</b></span>
      </div>

      <button
        className={'add-btn'}
        onClick={onAddHandler}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductItem;
