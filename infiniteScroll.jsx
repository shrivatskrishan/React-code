import React, { useEffect, useState } from "react";

function throttle(fn, delay) {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
}

const ThrottledInfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
      setLoading(false);
      if (items.length >= 100) setHasMore(false);
    }, 1000);
  };

  const handleScroll = throttle(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
      loadMore();
    }
  }, 300); // throttle delay = 300ms

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <h2>Infinite Scroll (Throttled)</h2>
      {items.map((_, index) => (
        <div key={index} style={{ padding: 20, border: "1px solid #ccc" }}>
          Item #{index + 1}
        </div>
      ))}
      {loading && <p style={{ textAlign: "center" }}>Loading more...</p>}
      {!hasMore && <p style={{ textAlign: "center" }}>🎉 No more items</p>}
    </div>
  );
};

export default ThrottledInfiniteScroll;
