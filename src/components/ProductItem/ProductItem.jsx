import React from 'react';
import './productItem.css'
import Button from "../Button/Button";

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

      <Button
        className={'add-btn'}
        onClick={onAddHandler}
      >
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
