declare module 'react-confetti' {
    import { ComponentType } from 'react';
  
    interface ConfettiProps {
      width?: number;
      height?: number;
      numberOfPieces?: number;
      recycle?: boolean;
      colors?: string[];
      [key: string]: any; // Allow other props as any type
    }
  
    const Confetti: ComponentType<ConfettiProps>;
  
    export default Confetti;
  }
  
  const DynamicConfetti = dynamic(() => import('react-confetti'), { 
    ssr: false, 
    loading: () => <div>Loading confetti...</div> 
  });
  