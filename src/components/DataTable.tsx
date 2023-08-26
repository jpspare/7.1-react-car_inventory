import { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import Background from '../assests/images/car_parking_lot.jpg';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1 },
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <div 
          style={{ backgroundImage: `url(${ Background })`}} 
          className='flex -mt-16 mx-auto bg-cover bg-center bg-fixed h-screen'>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="mt-16 flex flex-col w-screen">
                <div className='flex flex-row'>
                    <div>
                        <button
                            className="p-3 m-3 rounded bg-cyan-700 text-stone-300
                            border border-transparent  hover:border-white hover:text-white"
                            onClick={() => {
                                handleOpen();
                                setSelectionModel([]);
                            }}
                        >
                            Add New Car
                        </button>
                    </div>
                    <div>
                        {JSON.stringify(selectionModel) != '[]' ? 
                            <Button
                                onClick={handleOpen}
                                className="p-3 m-3 rounded bg-cyan-700 text-stone-300 border border-transparent  hover:border-white hover:text-white"
                            >
                                Update
                            </Button> : 
                            <div
                                className="p-3 m-3 rounded bg-zinc-700 text-stone-300 border border-transparent"
                            >
                                Update
                            </div>
                        }
                    </div>
                    <div>
                         {JSON.stringify(selectionModel) != '[]' ? 
                            <Button
                                onClick={deleteData}
                                className="p-3 m-3 rounded bg-cyan-700 text-stone-300 border border-transparent  hover:border-white hover:text-white"
                            >
                                Delete
                            </Button> : 
                            <div
                                className="p-3 m-3 rounded bg-zinc-700 text-stone-300 border border-transparent"
                            >
                                Delete
                            </div>
                        }
                    </div>
                </div>
                <div className='self-center'>
                    <div className={ open ? "hidden" : 
                        "container my-5 flex flex-col w-screen max-w-screen-lg h-[26rem]"}
                    >
                        <h2 className="p-3 bg-stone-100 bg-opacity-90 my-2 
                            rounded text-center"
                        >
                            My Car Inventory
                        </h2>
                        <DataGrid rows={contactData} columns={columns}
                        columnVisibilityModel={{id: false}}
                        pageSizeOptions={[100]}
                        checkboxSelection={true} 
                        onRowSelectionModelChange={ (item:any) => {
                            setSelectionModel(item)
                        }}
                        className='bg-stone-100 bg-opacity-90'
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataTable