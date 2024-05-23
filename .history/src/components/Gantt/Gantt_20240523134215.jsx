import React, { Component, useEffect, useRef } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./Gantt.css";

export default function Gantt({ tasks }) {
  const ganttContainer = useRef(null);

  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.init(ganttContainer.current);
    gantt.parse(tasks);
  }, [tasks]);

  useEffect(() => {
    gantt.attachEvent("onAfterTaskDrag", function (id, mode, e) {
      //any custom logic here
      console.log("id: ", id);
      console.log("mode: ", mode);
      console.log("e: ", e);
    });
  });

  return (
    <div ref={ganttContainer} style={{ width: "100%", height: "100%" }}></div>
  );
}
