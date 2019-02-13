import React, { useEffect, useRef, useState } from 'react';

import styles from './Logo.module.css';
import logos from './logos';

const useSpinAnimation = (steps: any[]) => {
  const ref = useRef<any>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleAnimationEnd = () => {
      setIndex(state => {
        const newIndex = state + 1;
        return newIndex < steps.length ? newIndex : 0;
      });
    };
    ref.current.addEventListener('animationend', handleAnimationEnd);
    return () => ref.current.removeEventListener('animationend', handleAnimationEnd);
  }, [index]);
  return React.cloneElement(steps[index], { ref, className: styles.spin });
};

const Logo: React.FunctionComponent = () => {
  const logo = useSpinAnimation(logos);
  return <div className={styles.root}>{logo}</div>;
};

export default Logo;
