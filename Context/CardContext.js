//Context para cards y carrito//
"use client";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { uptime } from "process";
// import { cardsArray } from "@/Components/organismos/arrayCards";

export const CardContext = createContext();

// updateQuote();

const shoppingInitialState = {
  cardsArray: [],
  items: [],
};

function shoppingCartReducer(state, action) {
  // console.log(cardsArray);
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = cardsArray.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        title: product.title,
        precio: product.precio,
        quantity: 1,
        imageUrl: product.imageUrl,
        description: product.description,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "READ_STATE") {
    return {
      ...state,
      cardsArray: action.payload.cardsArray,
      items: action.payload.items,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export default function CardContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    shoppingInitialState
  );
  const { cardsArray, items } = shoppingCartState;
  const readState = async () => {
    const ENDPOINT = {
      cardsArray: "http://localhost:5000/cervezas",
      items: "http://localhost:5000/items",
    };
    

    async function fetchData() {
      try {
        const responseProducts = await axios.get(ENDPOINT.cardsArray);
        // const responseCart = await axios.get(ENDPOINT.items);

        const cardsList = responseProducts.data;
        // const itemsList = responseCart.data;

        console.log('respuesta backend', cardsList); 

        shoppingCartDispatch({
          type: "READ_STATE",
          payload: {
            cardsArray: cardsList.items,
            items: [],
          },
        });
        // console.log(itemsList);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    fetchData();
  };

  useEffect(() => {
    readState();
  }, []);

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    cardsArray
  };
  // useEffect(() => {
  //   updateQuote(shoppingCartDispatch);
  // }, []);

  return (
    <CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
  );
}
