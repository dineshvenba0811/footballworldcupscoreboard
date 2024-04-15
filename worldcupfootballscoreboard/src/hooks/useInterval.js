import { useEffect, useRef } from "react";


/**
 * useInterval hook executes the setInterval and clearInterval based on the time interval.
 * it receives callback and delay from the ScoreboardsGrid component calling function..
 *  this is based on the built-in JavaScript setInterval function and
 *  it's used for initial count down, before the games start
 **/
const useInterval = (callback, delay) => {
    const intervalRef = useRef(null);
    const savedCallback = useRef(callback);

    // this useEffect function used to update the callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // The setInterval() method calls a function at specified intervals (in milliseconds).
    // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
    // this useEffect function used to update the delay
    useEffect(() => {
        const tick = () => savedCallback.current();
        if (typeof delay === 'number') {
            intervalRef.current = window.setInterval(tick, delay);
            return () => window.clearInterval(intervalRef.current);
        }
    }, [delay]);
    return intervalRef;
}
export default useInterval;
