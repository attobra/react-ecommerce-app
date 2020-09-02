import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
// CONTEXT API

const ProductContext= React.createContext()
//it comes with 2 components Provider AND Consumer

class ProductProvider extends Component {
    state={
        products: [],
        detailProduct: detailProduct
    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts = ()=> {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]

        })
        this.setState(()=>{
            return {products: tempProducts}
        })
    }

    handleDetail = () => {
        console.log('hello from detail')
    }

    addToCart = (id) => {
        console.log(`id is ${id}`)
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
