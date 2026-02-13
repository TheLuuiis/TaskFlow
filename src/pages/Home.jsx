import '../style/pages/Home.css';
import { useState } from 'react';
import BandejaDeEntrada from '../components/BandejaDeEntrada';
import ContainerTask from '../components/ContainerTaks';
import ModalFormularioTarjeta from '../components/ModalFormularioTarjeta';
import EditarFormulario from '../components/EditarFormulario';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleCreateTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setModalOpen(false);
    };

    const handleOpenEditTask = (task) => {
        setTaskToEdit(task);
        setEditModalOpen(true);
    };

    const handleCloseEditTask = () => {
        setEditModalOpen(false);
        setTaskToEdit(null);
    };

    const handleSaveTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
        handleCloseEditTask();
    };

    return (
        <div className="container__home">
            <BandejaDeEntrada />

            <ContainerTask
                onOpenModal={() => setModalOpen(true)}
                tasks={tasks}
                onEditTask={handleOpenEditTask}
            />

            {modalOpen && (
                <ModalFormularioTarjeta
                    onClose={() => setModalOpen(false)}
                    onCreateTask={handleCreateTask}
                />
            )}

            {editModalOpen && taskToEdit && (
                <EditarFormulario
                    task={taskToEdit}
                    onClose={handleCloseEditTask}
                    onSave={handleSaveTask}
                />
            )}
        </div>
    );
};

export default Home;