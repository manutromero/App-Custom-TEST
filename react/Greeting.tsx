/* eslint-disable no-console */
import React from 'react'
import { useProduct } from 'vtex.product-context'

function Greeting() {
  const productContextValue = useProduct()

  console.log('productContextValue', productContextValue)

  return <div>Hey, Manuel</div>
}

export default Greeting
