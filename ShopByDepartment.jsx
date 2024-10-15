import React from 'react';
import '../styles/ShopByDepartment.scss';

const ShopByDepartment = () => {
  return (
    <div className="shop-department-wrapper">

      <div className="department-grid">
        <div className="department-item">
          <img src="/images/Group.png" alt="Popular" />
          <span>Popular</span>
        </div>
        <div className="department-item">
          <img src="/images/ic_chair_24px.png" alt="Chair" />
          <span>Chair</span>
        </div>
        <div className="department-item highlighted">
          <img src="/images/Group 272.png" alt="Table" />
          <span>Table</span>
        </div>
        <div className="department-item">
          <img src="/images/ic_sofa_24px.png" alt="Sofa" />
          <span>Sofa</span>
        </div>
        <div className="department-item">
          <img src="/images/ic_cupboard_24px.png" alt="Cupboard" />
          <span>Cupboard</span>
        </div>
        <div className="department-item">
          <img src="/images/Frame 278.png" alt="Lamp" />
          <span>Lamp</span>
        </div>
      </div>
    </div>
  );
};

export default ShopByDepartment;
