import Card from '../../common/Card/Card';

const ProductCard = () => {
  return (
    <Card>
      <div className="bg-[url('/dice.png')] bg-no-repeat h-[318px] w-[318px] rounded-[10px] bg-cover"></div>
      <div className='text-[#DFCDEA] pt-2 text-[2rem]'>The Garden Tour</div>
      <div className='text-[#707070] text-sm pt-2 pb-4'>30.00</div>
      <div className='flex '>
        <button className='mr-2 p-3 border rounded bg-[#DFCDEA] basis-1/2'>
          Add to Cart
        </button>
        <button className='mr-2 p-3 border rounded bg-[#DFCDEA] basis-1/2'>
          Remove
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
