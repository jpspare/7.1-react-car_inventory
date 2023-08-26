import Background from '../assests/images/car_lineup_md.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex -mt-16 mx-auto bg-cover bg-center bg-fixed h-screen justify-center'
      >
        <div className='mt-60 mx-auto container'>
            <h1 className='p-5 text-5xl bg-black bg-opacity-40 text-stone-300
                text-center sm:rounded'>
                Welcome to Your Car Inventory
            </h1>
        </div>
    </div>
  )
}

export default Home