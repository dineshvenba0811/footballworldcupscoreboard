import { useEffect, useRef } from "react";

/**
 * useTimeout hook executes the setTimeout and clearTimeout based on the time interval.
 * it receives callback and delay from the ScoreboardsGrid component calling function..
 * this is based on the built-in JavasScript setTimeout function and
 * it’s used for deciding when to stop the playing time of the games and start finalizing them
 **/
const useTimeout = (callback, delay) => {
    const timeoutRef = useRef(null);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();

        if (typeof delay === 'number') {
            timeoutRef.current = window.setTimeout(tick, delay);
            return () => window.clearTimeout(timeoutRef.current);
        }
    }, [delay]);

    return timeoutRef;
};
export default useTimeout;
