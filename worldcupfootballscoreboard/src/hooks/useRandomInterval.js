import { useEffect, useRef, useCallback } from "react";
/**
 * useRandomInterval hook executes the setTimeout and clearTimeout based on the time interval.
 * it receives callback, minDelay and maxDelay from the ScoreboardsGrid component calling function..
 * this is enhanced version of the useInterval, and
 * it’s used for randomly updating the score of the games, as well as randomly starting and stopping them
 **/
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = useRef(null);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let isEnabled =
            typeof minDelay === 'number' && typeof maxDelay === 'number';
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);

    const cancel = useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);

    return cancel;
};
export default useRandomInterval;
