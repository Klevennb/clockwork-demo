import { useLocation } from 'react-router-dom';

export const urlParser = (): number => {
    const location = useLocation().pathname;
  
    switch (true) {
      case location.includes('day-planner'):
        return 1;
      case location.includes('writing-assistant'):
        return 2;
      case location.includes('library'):
        return 3;
      default:
        return 0;
    }
  };