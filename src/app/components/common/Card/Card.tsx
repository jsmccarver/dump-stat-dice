import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className='w-[360px] h-[529px] pt-4 px-[21px] m-5 rounded-[10px] bg-offBrown'>
      {children}
    </div>
  );
};

Card.DisplayName = 'Card';

export default Card;
