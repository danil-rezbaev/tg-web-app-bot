import React, { useState, useCallback, useEffect  } from 'react';
import './productList.css'
import ProductItem from "../ProductItem/ProductItem";
import { productsData } from "./data/productsData";
import { useTelegram } from "../../hooks/useTelegram";

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const {tg, queryId} = useTelegram()


  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId
    }

    fetch('https://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }, [addedItems, queryId])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)

    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => acc + +item.price, 0)
  }

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems;

    if(alreadyAdded){
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className="product-list">
      {
        productsData?.map(item => (
          <ProductItem
            key={item.id}
            product={item}
            onAdd={onAdd}
            className="item"
          />
        ))
      }
    </div>
  );
};

export default ProductList;
