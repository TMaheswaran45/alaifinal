import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../store/actions/cartActions';
import QuickView from './QuickView';

class Items extends Component {

    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    };

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({ 
            modalImage: image, 
            price: price,
            idd: id
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen } = this.state;
        return (
            <section className="shop-area ptb-80">
                <ToastContainer />
                <div className="container">
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-md-7">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1-5 of 5 results</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5">
                                <div className="woocommerce-topbar-ordering">
                                    <select className="form-control">
                                        <option value="1">Sort by Popularity</option>
                                        <option value="2">Sort by Average Rating</option>
                                        <option value="0">Sort by Latest</option>
                                        <option value="3">Sort by price: Low to High</option>
                                        <option value="4">Sort by price: High to Low</option>
                                        <option value="5">Sort by New</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                    {products.map((data, idx) => (
                        <div className="col-lg-3 col-md-6" key={idx}>
                            <div className="single-products">
                                <div className="products-image">
                                    <img src={data.image} alt="image" />

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a 
                                                    onClick={e => {
                                                            e.preventDefault(); 
                                                            this.openModal();
                                                            this.handleModalData(data.image,data.price,data.id)
                                                        }
                                                    }
                                                >
                                                    <Icon.Search />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#"><Icon.Heart /></a>
                                        </li>
                                        <li>
                                            <Link href="/product-details">
                                                <a>
                                                    <Icon.Link />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">{data.title}</a></h3>
                                    <span>${data.price}</span>

                                </div>
                            </div>
                        </div>
                    ))}


                    </div>
                </div>

                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items)