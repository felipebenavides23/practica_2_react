import { useState, useEffect } from 'react';

const useinitialState = (API) => {
  const [video, setVideo] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideo(data));
  }, []);

  return (video);
};

export default useinitialState;
