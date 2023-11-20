import Image from "../../src/assets/images/Group 2.png";

const UsingButton = () => {
  return (
    <>
      <div className="grid grid-cols-3  text-base ">
        <div className="col-span-2 ">
          <ol>
            <li>
              <span className="font-semibold">Waking Up the Watch:</span> Press
              the button once to wake the watch. Upon waking, the watch will
              first show the current time.
            </li>
          </ol>

          {/* <span>
                <p className="font-semibold">Waking Up the Watch:</p>
                Press the button once to wake the watch. Upon waking, the watch
                will first show the current time.
              </span> */}
        </div>

        <div className="col-span-1">
          <div className="flex flex-col  text-lg ">
            <img
              src="/src/assets/images/Group 2.png"
              alt="s"
              className="h-28 w-28 text-end"
            />
            <h2 className="font-semibold"> Image 1 </h2>

            <p>HOUR (hr): Now you can change the hour</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsingButton;

// Using the button

// Waking Up the Watch: Press the button once to wake the watch. Upon waking, the watch will first show the current time.

// Entering Reset Mode: To make adjustments to the watch settings, perform a long press and hold the button for approximately 1.5 seconds. This will take you to the RESET mode. The first thing you can reset is the HOUR.

// Adjusting the Hour:
// Once in RESET mode, the display will show “hr” (for few seconds), indicating that you can change the HOUR value (Image 1).
// Use short presses to increase the hour value. Note: The hour value will cycle back to 0 after reaching 23.
//  After you land on the desired hour value, confirm it by holding the button for approximately 1 second.

// This will now take you to the “reset minute” mode    (Image 2).

// Adjusting the Minute:
// Following the hour adjustment, the display will show “nin”. Due to the limitations of 7-segment displays, "min" for minutes is represented as “nin”.
// Use short presses to increase the minute value (just like the previous step).
// Once you've changed the desired minute value, confirm your selection with a long press by approximately pressing the button for 1 sec.

// This will now take you to the “reset seconds” mode (Image 3).

// Repeat the above steps to change the SECONDS, then DATE, MONTH, and YEAR values (Image 4, 5, 6).

// Note: If you wish to skip adjusting a particular component (e.g. the seconds, the year etc.), simply perform a long press (approx. 1 sec) to move on to the next component.

// Exiting Reset Mode: After setting the YEAR value, the watch will automatically exit the RESET mode, and your adjustments will be saved. Note: If you wish to leave the RESET mode in the middle, just press long enough (2.5 sec) and release.
// Notes:
// Year rolls over after 2100 to be easy on the fingers and the button in manual mode.
// Always make sure that you have set the correct values for each component before exiting the RESET mode.
