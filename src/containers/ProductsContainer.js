import React, { Component } from 'react'
import Products from '../components/Products'
import Product from '../components/Product'
import {connect} from 'react-redux'
import {actDeleteTask} from '../actions/index'


class ProductsContainer extends Component {

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    render() {
        return (
            <Products>
                {this.showProduct(this.props.products)}
            </Products>
        )
    }

    showProduct = products => {
        let result = null
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <Product name={product.name} index={index} status={product.status} key={index} onDelete={this.props.onDelete} />
                )
            })
        }
        return result
    }

}

const mapStateToProps = state => {
    return {
        products : state.productReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: id => {
            dispatch(actDeleteTask(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)