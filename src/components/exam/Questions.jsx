"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { PaginationComp } from "../common/Pagination";
import { Card } from "../ui/card";
import { quizData } from "@/lib/data";
import CountDown from "./CountDown";
import Thanks from "../common/Thanks";
import Instruction from "./Instruction";

function Questions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThanks, setShowThanks] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    Array(quizData.length).fill(null)
  );

  const handleOption = (questionIndex, option) => {
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[questionIndex] = option;
    setSelectedOption(newSelectedOptions);
  };

  const currentQuestion = quizData[currentIndex];

  const handleTimer = () => {
    setShowThanks(true);
  };

  const handleSubmit = () => {
    setShowThanks(true);
  };

  return (
    <>
      {showThanks ? (
        <Thanks />
      ) : (
        <>
          <Instruction />
          <div className="flex font-semibold justify-between text-sm">
            <CountDown handleTimer={handleTimer} />
            <p>
              Question{" "}
              <span>
                {currentIndex}/{quizData.length}
              </span>
            </p>
          </div>
          <Card className="flex flex-col gap-2 p-4">
            <p className="font-semibold">
              {currentIndex + 1}. {currentQuestion.question}
            </p>
            <RadioGroup
              value={selectedOption[currentIndex]}
              onValueChange={(value) => handleOption(currentIndex, value)}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`option-${currentIndex}-${index}`}
                    checked={selectedOption[currentIndex] === option}
                  />
                  <Label htmlFor={`option-${currentIndex}-${index}`}>
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>
          <div>
            <PaginationComp
              maxLength={quizData.length}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              handleSubmit={handleSubmit}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Questions;
