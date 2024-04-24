"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Tenzin Tsering
   Date:   
   
   Filename: tc_cart.js
	
*/

let orderTotal = 0;
let cartHTML = `<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>`;

for (let i = 0; i < item.length; i++) {
  let itemCost = itemPrice[i] * itemQty[i];
  cartHTML += `<tr>
  <td><img src='tc_item${item[i]}.png' alt='item ${item[i]}' /></td>
  <td>${itemDescription[i]}</td>
  <td>$${itemPrice[i].toFixed(2)}</td>
  <td>${itemQty[i]}</td>
  <td>$${itemCost.toFixed(2)}</td>
  </tr>`;
  orderTotal += itemCost;
}
cartHTML += `<tr><td colspan='4'>Subtotal</td><td>$${orderTotal.toFixed(2)}</td></tr></table>`;

document.getElementById('cart').innerHTML = cartHTML;

