import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i273231522022185TimelineData);
  }, []);

  return (
    <div className="i27323152-2022185 component component-wrapper not-ready">
      <div className="master-button-xNmCxX">
        <div className="button-i2732315220-yif20o valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i273231522022185TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i27323152-2022185",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button8;
