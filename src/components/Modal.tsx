import ContactForm from './ContactForm'

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25'
            
        >
            <div
                className='max-w-600px w-4/5 fixed flex z-1 mt-20 bg-stone-100 bg-opacity-90 
                shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex m-3 bg-cyan-700 text-stone-300 
                        w-5 h-5 justify-center items-center rounded border 
                        border-transparent hover:border-white hover:text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                        {JSON.stringify(props.id) == '[]' ? 
                            <h1 className='container text-center m-5 text-xl'>
                                Add Your Car!
                            </h1> : 
                            <h1 className='container text-center m-5 text-xl'>
                                Update Your Car!
                            </h1>
                        }
                    </div>
                    <div>
                        <ContactForm id={ props.id } onClose={props.onClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal