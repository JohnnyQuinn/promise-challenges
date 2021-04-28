/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *      The order of outputs would be Step 1, then Step 3, and finally Step 2. 
 *      This is because the function of Step 2 has a delay of 2 seconds since it is being put in as an arguement for snooze(). The other steps output ASAP.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    Step1, Step3, then Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *      Since the output of Step 2 would no longer have a delay, the new order would be Step1, Step2, and Step3. 
 *      After re-running the code with a delay time of 0, my expectation was incorrect. Step 2 still being outputted after Step 3 could be because 
 *      setTimeout() still waits for the other code to execute before executing itself. 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

