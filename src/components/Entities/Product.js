import React from 'react';

const Product = (data, ind) => (
  <div className="entitie show" key={ind}>
      <div className="entitie_image">
            <img src={data.img} alt="entitie_image" />
          {data.discountCost ? <p className="entitie_discount">sale</p> : null}
          {data.new ? <p className="entitie_new">new</p> : null}
      </div>
      <div className="entitie_text">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {!data.discountCost ?
              <div className="price">
                  <span>{`$${data.cost.toFixed(2)}`}</span>
              </div> :
              <div className="price">
                  <span>{`$${data.discountCost.toFixed(2)}`}</span>
                  <span>{`$${data.cost.toFixed(2)}`}</span>
              </div>
          }
      </div>
      <div className="entitie_buttons_container">
          <button className="entitie_add">add to cart</button>
          <button className="entitie_view">view</button>
      </div>
  </div>
);

export default Product;
