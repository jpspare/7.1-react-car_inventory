import Background from '../assests/images/cars_in_field_md.jpg'

function About() {
    return (
        <div 
          style={{ backgroundImage: `url(${ Background })`}} 
          className='flex -mt-16 mx-auto bg-cover bg-center bg-fixed h-screen 
          justify-center'>
            <div className='mt-40 mx-auto sm:px-5 md:px-10 lg:px-20 max-w-screen-lg'>
                <h1 className='text-2xl bg-black bg-opacity-40 text-stone-300
                    text-center sm:rounded-t border-b'>
                    About Us
                </h1>
                <div className='px-10 py-3 text-l bg-black bg-opacity-40 text-stone-300
                    sm:rounded-b'>
                    <p className='pb-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Fugiat sed eius accusantium minima incidunt perspiciatis ad
                        doloribus recusandae rem, saepe, sunt culpa sequi ullam
                        aliquid consectetur dolorem eveniet id natus.
                    </p>
                    <p className='pb-3'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis quos laborum possimus fugit ratione aliquam ea
                        aut amet, delectus aperiam nihil odio voluptas perspiciatis 
                        quis nam totam atque harum dolorum asperiores qui. 
                        Consequuntur asperiores numquam natus voluptates officia 
                        ab eius sequi reprehenderit excepturi temporibus? Ratione 
                        expedita ad, deleniti natus quas deserunt laboriosam. 
                        Inventore, soluta unde!
                    </p>
                    <p>
                        Repudiandae quas voluptatibus doloremque consequatur 
                        excepturi ea iure quidem recusandae commodi autem tempore 
                        voluptatem nobis sit, officia impedit repellat earum magni 
                        aut vel nam. Voluptate quos optio laborum atque eum? 
                        Voluptate hic quisquam ad asperiores accusantium eos 
                        voluptatibus deserunt, ullam harum illo.
                    </p>
                </div>
            </div>
        </div>
      )
}

export default About
