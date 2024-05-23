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

  //   useEffect(() => {
  //     gantt.attachEvent("onAfterTaskDrag", function (id, mode, e) {
  //       //any custom logic here
  //       console.log("id: ", id);
  //       console.log("mode: ", mode);
  //       console.log("e: ", e);
  //     });

  //     gantt.templates.drag_link = function (from, from_start, to, to_start) {
  //       const sourceTask = gantt.getTask(from);

  //       let text = `From:<b> ${sourceTask.text}</b> ${
  //         from_start ? "Start" : "End"
  //       }<br/>`;
  //       console.log("text 1:", text);
  //       if (to) {
  //         const targetTask = gantt.getTask(to);
  //         text += `To:<b> ${targetTask.text}</b> ${
  //           to_start ? "Start" : "End"
  //         }<br/>`;
  //         console.log("text 2:", text);
  //       }
  //       return text;
  //     };
  //   });

  useEffect(() => {
    gantt.attachEvent("onTaskDrag", function (id, mode, task, original) {
      console.log("id: ", id);
      console.log("mode: ", mode);
      console.log("task: ", task);
      console.log("original: ", task);
    });
  });
  return (
    <div ref={ganttContainer} style={{ width: "100%", height: "100%" }}></div>
  );
}
