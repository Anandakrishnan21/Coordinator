import React from "react";
import { Card } from "../ui/card";

function Instruction() {
  return (
    <div>
      <h3 className="font-semibold text-2xl">Instructions</h3>
      <div className="p-4 text-sm">
        <ul className="list-disc">
          <li>Total duration for the examination is 5 min.</li>
          <li>Number of questions: 5min</li>
          <li>The test consists of multiple-choice questions</li>
          <li>
            You can navigate between questions using the “Next” and “Previous”
            buttons
          </li>
          <li>Monitor the timer displayed on the screen</li>
          <li>
            If you encounter any technical problems, use the "Help" button to
            contact support
          </li>
          <li>Click the "Submit" button to finalize your test</li>
        </ul>
      </div>
    </div>
  );
}

export default Instruction;
