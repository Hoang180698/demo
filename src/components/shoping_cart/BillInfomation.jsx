import React from "react";

function BillInfomation({subtotal}) {
  return (
      <div className="col-md-4">
        <div className="bill">
          <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">Tạm tính:</span>
            <span className="text-primary" id="sub-total-money">
              {subtotal} VND
            </span>
          </div>
          <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">VAT (10%):</span>
            <span className="text-primary" id="vat-money">
              {subtotal / 10} VND
            </span>
          </div>
          <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">Thành tiền:</span>
            <span className="text-primary" id="total-money">
              {subtotal + subtotal / 10} VND
            </span>
          </div>
        </div>
      </div>
  );
}

export default BillInfomation;
