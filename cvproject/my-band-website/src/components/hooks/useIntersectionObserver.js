import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach((element) => {
      if (element) observer.current.observe(element);
    });

    return () => observer.current.disconnect();
  }, [elements, options]);

  return [setElements, entries];
};

export default useIntersectionObserver;
