
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${loading ? '' : 'hidden'}`}>
      <div className="loader-content">
        <div className="loader-circle"></div>
        <div className="mt-4 text-lg font-medium text-gradient">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
