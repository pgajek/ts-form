import { ReactElement, useState } from "react";

export const useMultiStep = (steps: ReactElement[]) => {

const [currentStepIndex, setCurrentStepIndex] = useState(0);

function next() {
    setCurrentStepIndex(index => {
        if(index >= steps.length - 1) return index;
        return ++index;
    } )
}

function back() {
    setCurrentStepIndex(index => {
        if(index <= 0) return index;
        return --index;
    } )
}

function goTo(index: number) {
 setCurrentStepIndex(index)
}

return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
}

}