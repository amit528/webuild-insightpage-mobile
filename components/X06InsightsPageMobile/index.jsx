import React from "react";
import Frame145 from "../Frame145";
import InsightsCard from "../InsightsCard";
import InsightsCard2 from "../InsightsCard2";
import InsightsCard3 from "../InsightsCard3";
import InsightsCard4 from "../InsightsCard4";
import InsightsCard5 from "../InsightsCard5";
import InsightsCard6 from "../InsightsCard6";
import InsightsCard7 from "../InsightsCard7";
import Group2122 from "../Group2122";
import "./X06InsightsPageMobile.css";

function X06InsightsPageMobile(props) {
  const {
    insights,
    rectangle76,
    text155,
    frame145Props,
    insightsCardProps,
    insightsCard2Props,
    insightsCard3Props,
    insightsCard4Props,
    insightsCard5Props,
    insightsCard6Props,
    insightsCard7Props,
    group2122Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x06-insights-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <div className="insights valign-text-middle typographyheadlineh4-extrabold-24">{insights}</div>
        <img className="rectangle-76" src={rectangle76} />
        <p className="text-3 typography-body-smalltext-14-regular">{text155}</p>
        <div className="frame-1635">
          <InsightsCard
            x1600I27322861202={insightsCardProps.x1600I27322861202}
            text2={insightsCardProps.text2}
            button8Props={insightsCardProps.button8Props}
          />
          <InsightsCard2
            x1600I27322862202={insightsCard2Props.x1600I27322862202}
            propertyTaxI27322={insightsCard2Props.propertyTaxI27322}
            button8Props={insightsCard2Props.button8Props}
          />
          <InsightsCard3
            x1600I27322864202={insightsCard3Props.x1600I27322864202}
            propertyTaxI27322={insightsCard3Props.propertyTaxI27322}
            button8Props={insightsCard3Props.button8Props}
          />
          <InsightsCard4
            x1600I27322865202={insightsCard4Props.x1600I27322865202}
            propertyTaxI27322={insightsCard4Props.propertyTaxI27322}
            button8Props={insightsCard4Props.button8Props}
          />
          <InsightsCard5
            x1600I27322867202={insightsCard5Props.x1600I27322867202}
            propertyTaxI27322={insightsCard5Props.propertyTaxI27322}
            button8Props={insightsCard5Props.button8Props}
          />
          <InsightsCard6
            x1600I27322868202={insightsCard6Props.x1600I27322868202}
            propertyTaxI27322={insightsCard6Props.propertyTaxI27322}
            button8Props={insightsCard6Props.button8Props}
          />
          <InsightsCard7
            x1600I27322869202={insightsCard7Props.x1600I27322869202}
            propertyTaxI27322={insightsCard7Props.propertyTaxI27322}
            button8Props={insightsCard7Props.button8Props}
          />
        </div>
        <Group2122
          group862Props={group2122Props.group862Props}
          group872Props={group2122Props.group872Props}
          group322Props={group2122Props.group322Props}
          frame5Props={group2122Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X06InsightsPageMobile;
