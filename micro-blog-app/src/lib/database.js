import { useEffect, useRef } from "react";

const url =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

export function getTweets() {
  return fetch(url);
}
//funtion to do Fetch Post
export function postTweets(inputdata) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputdata),
  });
}

//this function was created by Dan Abramov and is available here: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
