
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlice';
import Modal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddTodo: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => setIsModalOpen(true); 
     const closeModal = () => setIsModalOpen(false);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadLine, setDeadLine] = useState('');
    const dispatch = useDispatch();

    const handleSumbit = (e: React.FormEvent) => {
        closeModal();
        console.log("handle submit");
        e.preventDefault();
        if(title && description && deadLine){
            console.log("IF WORKS");
            const newTodo = {
                id: Date.now(),
                title,
                description,
                done: false,
                deadLine: new Date(deadLine),
                createdDate: new Date(),

            };
            console.log("id - ", newTodo.id);
            console.log("\ntitle - ", newTodo.title);
            console.log("\ndescription - ", newTodo.description);
            console.log("\ndeadLine - ", newTodo.deadLine);
            console.log("\ndone - ", newTodo.done);
            console.log("\ncreated date - ", newTodo.createdDate);
            dispatch(addTodo(newTodo));
            
            setTitle('');
            setDescription('');
            setDeadLine('');

        }

    };

    return(
        <div>
            

{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
            {/* <button onClick={openModal}> Add Todo</button>
            {isModalOpen &&(
                <div>
                    <button onClick={closeModal}>Close</button>
                    <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={e => {setTitle(e.target.value);}}
            />

            <input
            type='text'
            placeholder='Description'
            value={description}
            onChange={e => {setDescription(e.target.value)}}
            />
            
            <input
            type='date'
            value={deadLine}
            onChange={e => {setDeadLine(e.target.value)}}
            />
            <button onClick={handleSumbit}>Add</button>
                </div>
            ) } */}
        <button onClick={openModal} className="button btn bg-black text-light">Add a task</button>
        <Modal isVisible={isModalOpen} onClose={closeModal}>
          <h3>Fill the form</h3>
          <br />
            <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={e => {setTitle(e.target.value);}}
            />

            <input
            type='text'
            placeholder='Description'
            value={description}
            onChange={e => {setDescription(e.target.value)}}
            />
            
            <input
            type='date'
            value={deadLine}
            onChange={e => {setDeadLine(e.target.value)}}
            />
            <br />
             <button className="button btn bg-secondary float-end" onClick={handleSumbit}>Add</button>
        </Modal>

        </div>
    )
    
}

export default AddTodo;
