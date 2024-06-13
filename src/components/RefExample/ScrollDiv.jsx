import React, { useRef, useState } from 'react';

const ScrollDiv = () => {
  const divRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (divRef.current) {
      setScrollTop(divRef.current.scrollTop);
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        onScroll={handleScroll}
        style={{
          width: '300px',
          height: '150px',
          overflow: 'auto',
          border: '1px solid black',
          color: 'black',
        }}
      >
        <div style={{ height: '500px', backgroundColor: 'lightcoral' }}>
          Scrollable content
        </div>
      </div>
      <p>Scroll Top: {scrollTop}px</p>
    </div>
  );
};

export default ScrollDiv;
