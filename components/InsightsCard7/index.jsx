import React from "react";
import Button8 from "../Button8";
import "./InsightsCard7.css";

function InsightsCard7(props) {
  const { x1600I27322869202, propertyTaxI27322, button8Props } = props;

  return (
    <div className="insights-card-6">
      <div className="group-69-6">
        <div className="x1600-i27323160202 valign-text-middle typographyheadlineh3-extrabold-30">
          {x1600I27322869202}
        </div>
        <div className="property-tax-i27323-5 valign-text-middle typography-body-smalltext-14-regular">
          {propertyTaxI27322}
        </div>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard7;
