import './App.css';
import { useState, useEffect } from 'react'
function App() {
  return (
    <div className="super_container">
      <header className="header" style={{ display: 'none' }}>
        <div className="header_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <div className="custom_dropdown">
                          <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li><a className="clc" href="#">All Categories</a></li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="single_product">
        <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '75px' }}>
          <div className="row">
            {/* <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="https://i.imgur.com/21EYMGD.jpg"><img src="https://i.imgur.com/21EYMGD.jpg" alt="" /></li>
                <li data-image="https://i.imgur.com/DPWSNWd.jpg"><img src="https://i.imgur.com/DPWSNWd.jpg" alt="" /></li>
                <li data-image="https://i.imgur.com/HkEiXfn.jpg"><img src="https://i.imgur.com/HkEiXfn.jpg" alt="" /></li>
              </ul>
            </div> */}
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="image_selected"><img src="https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg" alt="" /></div>
            </div>
            <div className="col-lg-8 order-3">
              <div className="product_description">
                {/* <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Products</a></li>
                    <li className="breadcrumb-item active">Accessories</li>
                  </ol>
                </nav> */}
                <div className="product_name">JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language</div>
                {/* <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star" /> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div> */}
                <div> <span className="product_price">$ 32.33</span> <strike className="product_discount"> <span style={{ color: 'black' }}>$69.99<span> </span></span></strike> </div>
                <div> <span className="product_saved">In Stock</span> <span style={{ color: 'black' }}><span> </span></span></div>
                <hr className="singleline" />
                {/* <div>
                  <span className="product_info lh-2">Warranty: 6 months warranty<span><br />
                    <span className="product_info">7 Days easy return policy<span><br />
                      <span className="product_info">In Stock: 25 units sold this week<span><br />
                        <span className="product_info">Ships from and sold by Amazon.com<span><br />
                          <span className="product_info">Available at a lower price from other sellers that may not offer free Prime shipping</span>
                        </span></span></span></span></span></span></span></span>
                </div> */}
                <div className="row row-underline">
                  <div className="col-md-6"> <span className=" deal-text">Description</span> </div>
                  <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
                </div>
                <div className="row lh-35">
                  <div className='col-md-12'>
                    <p>JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.
                      This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.</p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className='col-md-12'>
                      <p>JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.</p>
                      <p>This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.</p>
                    </div>
                  </div>
                </div> */}
                {/* <div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="br-dashed">
                        <div className="row">
                          <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                          <div className="col-md-9 col-xs-9">
                            <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7"> </div>
                  </div> */}
                {/* <div className="row" style={{ marginTop: '15px' }}>
                    <div className="col-xs-6" style={{ marginLeft: '15px' }}> <span className="product_options">RAM Options</span><br /> <button className="btn btn-primary btn-sm">4 GB</button> <button className="btn btn-primary btn-sm">8 GB</button> <button className="btn btn-primary btn-sm">16 GB</button> </div>
                    <div className="col-xs-6" style={{ marginLeft: '55px' }}> <span className="product_options">Storage Options</span><br /> <button className="btn btn-primary btn-sm">500 GB</button> <button className="btn btn-primary btn-sm">1 TB</button> </div>
                  </div> */}
              </div>
              <hr className="singleline " />
              <div className="order_info d-flex flex-row">
                <form action="#">
                </form></div>
              <div className="row">
                <div className="col-xs-6" style={{ marginLeft: '13px' }}>
                  <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                    <div className="quantity_buttons">
                      <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                      <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6"> <button type="button" className="btn btn-success shop-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row row-underline">
            <div className="col-md-6"> <span className=" deal-text">Product details</span> </div>
            <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="col-md-12">
                <tbody>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Publisher : </span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>O'Reilly Media; 7th edition (June 9, 2020)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Language : </span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>English</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Paperback : </span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>706 pages</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Item Weight :</span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>2.65 pounds</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Dimensions :</span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>6.93 x 1.5 x 8.9 inches</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4"><span className="p_specification">Best Sellers Rank :</span> </td>
                    <td className="col-md-8">
                      <ul>
                        <li>#4,554 in Books</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        {/* <div className="row row-underline">
          <div className="col-md-6"> <span className=" deal-text">Description</span> </div>
          <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
        </div>
        <div className="row">
          <div className='col-md-12'>
            <p>JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.
              This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App
