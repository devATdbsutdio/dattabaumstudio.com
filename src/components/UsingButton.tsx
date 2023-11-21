const UsingButton = () => {
  return (
    <>
      <div className="grid grid-cols-3  gap-4">
        <div className="col-span-2 ">
          <ol className="list-inside space-y-4">
            <li className="mr-12 grid-cols-3 text-lg">
              <span className="col-span-1"> 1. </span>
              <span className="gap-6 font-semibold">Waking Up the Watch:</span>
              Press the button once to wake the watch. Upon waking, the watch
              will first show the current time.
            </li>
            <li className="mr-12  text-lg">
              2 .
              <span className="gap-6 font-semibold">Entering Reset Mode:</span>
              To make adjustments to the watch settings, perform a long press
              and hold the button for approximately 1.5 seconds. This will take
              you to the RESET mode. The first thing you can reset is the HOUR.
              <ol className="mt-2 space-y-1 ps-5" type="A">
                <li>
                  a .{" "}
                  <span className="gap-6 font-semibold">
                    Adjusting the Hour:
                  </span>
                  <ul className="mt-2 gap-7 space-y-1 ps-5">
                    <li className="space-x-2">
                      <span className="gap-6 font-semibold">i.</span>
                      Once in RESET mode, the display will show “hr” (for few
                      seconds), indicating that you can change the HOUR value
                      (Image 1 )
                    </li>
                    <li className="space-x-2">
                      <span className="gap-6 font-semibold">ii.</span>
                      Use short presses to increase the hour value.{" "}
                      <span className="font-semibold"> Note: </span> The hour
                      value will cycle back to 0 after reaching 23.
                    </li>
                    <li className="space-x-2">
                      <span className="gap-6 font-semibold">iii.</span>
                      After you land on the desired hour value, confirm it by
                      holding the button for approximately 1 second.
                    </li>
                  </ul>
                  <li>
                    b .
                    <span className="gap-6 font-semibold">
                      Adjusting the Hour:
                    </span>
                    This will now take you to the “reset minute” mode. (Image 2)
                  </li>
                  <li>
                    c.
                    <span className="gap-6 font-semibold">
                      Adjusting the Minute
                    </span>
                    <ul className="mt-2 gap-7 space-y-1 ps-5">
                      <li className="space-x-2">
                        <span className="gap-6 font-semibold">i.</span>
                        Once in RESET mode, the display will show “hr” (for few
                        seconds), indicating that you can change the HOUR value
                        (Image 1 )
                      </li>
                      <li className="space-x-2">
                        <span className="gap-6 font-semibold">ii.</span>
                        Use short presses to increase the hour value.{" "}
                        <span className="font-semibold"> Note: </span> The hour
                        value will cycle back to 0 after reaching 23.
                      </li>
                      <li className="space-x-2">
                        <span className="gap-6 font-semibold">iii.</span>
                        Once you've changed the desired minute value, confirm
                        your selection with a long press by approximately
                        pressing the button for 1 sec.
                      </li>
                    </ul>
                  </li>
                  <li>
                    d.This will now take you the "reset seconds" mode{" "}
                    <span className="font-semibold">(Image 3)</span>
                  </li>
                  <li>
                    e. Repeat the above steps to change the SECONDS, then DATE,
                    MONTH, and YEAR values (Image 4, 5, 6).
                  </li>
                </li>
              </ol>
            </li>
            <li className="text-lg">
              3.
              <span className="text-lg font-semibold">
                {" "}
                Exiting Reset Mode{" "}
              </span>
              After setting the YEAR value, the watch will automatically exit
              the RESET mode, and your adjustments will be saved. Note: If you
              wish to leave the RESET mode in the middle, just press long enough
              (2.5 sec) and release.
            </li>
            <li className="text-lg">
              <span className="text-lg font-semibold"> Note : </span>If you wish
              to skip adjusting a particular component (e.g. the seconds, the
              year etc.), simply perform a long press (approx. 1 sec) to move on
              to the next component.
            </li>

            <li className="mr-12  text-lg">
              1. Year rolls over 2100 to be easy on the fingers and the button
              in manual mode
            </li>
            <li className="mr-12  text-lg">
              2. Always make sure that you have set the correct values for each
              component before exiting the RESET mode.
            </li>
          </ol>
        </div>

        <div className="col-span-1 space-y-12">
          <div className="flex  flex-col items-end text-sm ">
            <img
              src="/src/assets/images/Group 2.png"
              alt="step1"
              className="h-44 w-44 "
            />
            <div className="w-44">
              <h2 className="font-semibold"> Image 1 </h2>

              <p className="  ">HOUR (hr): Now you can change the hour</p>
            </div>
          </div>
          <div className="flex  flex-col items-end text-sm ">
            <img
              src="/src/assets/images/Group 3.png"
              alt="step1"
              className="h-44 w-44 "
            />
            <div className="w-44">
              <h2 className="font-semibold "> Image 1 </h2>

              <p className="  ">HOUR (hr): Now you can change the hour</p>
            </div>
          </div>
          <div className="flex  flex-col items-end text-sm ">
            <img
              src="/src/assets/images/Group 4.png"
              alt="step1"
              className="h-44 w-44 "
            />
            <div className="w-44">
              <h2 className="font-semibold "> Image 1 </h2>

              <p className="  ">HOUR (hr): Now you can change the hour</p>
            </div>
          </div>
          <div className="flex  flex-col items-end text-sm ">
            <img
              src="/src/assets/images/Group 5.png"
              alt="step1"
              className="h-44 w-44 "
            />
            <div className="w-44">
              <h2 className="font-semibold "> Image 1 </h2>

              <p className="  ">HOUR (hr): Now you can change the hour</p>
            </div>
          </div>
          <div className="flex  flex-col items-end text-sm ">
            <img
              src="/src/assets/images/Group 6.png"
              alt="step1"
              className="h-44 w-44 "
            />
            <div className="w-44">
              <h2 className="font-semibold "> Image 1 </h2>

              <p className="  ">HOUR (hr): Now you can change the hour</p>
            </div>
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
