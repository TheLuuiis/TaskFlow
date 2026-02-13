import '../style/pages/Home.css';
import { useEffect, useState } from 'react';
import BandejaDeEntrada from '../components/BandejaDeEntrada';
import ContainerTask from '../components/ContainerTaks';
import ModalFormularioTarjeta from '../components/ModalFormularioTarjeta';
import EditarFormulario from '../components/EditarFormulario';

const STORAGE_KEY = 'taskflow_tasks';

const Home = ({ searchQuery = '' }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const handleMoveTask = (taskId, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );

        setTaskToEdit((prev) =>
            prev && prev.id === taskId ? { ...prev, status: newStatus } : prev
        );
    };

    const handleCreateTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, { ...newTask, comments: Array.isArray(newTask.comments) ? newTask.comments : [] }]);
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
    };

    const handlePatchTask = (taskId, partialData) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, ...partialData } : task
            )
        );

        setTaskToEdit((prev) =>
            prev && prev.id === taskId ? { ...prev, ...partialData } : prev
        );
    };

    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="container__home">
            <BandejaDeEntrada
                onOpenModal={() => setModalOpen(true)}
            />
            <ContainerTask
                onOpenModal={() => setModalOpen(true)}
                tasks={tasks}
                onEditTask={handleOpenEditTask}
                onMoveTask={handleMoveTask}
                searchQuery={searchQuery}
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
                    onDelete={handleDeleteTask}
                    onTaskPatch={handlePatchTask}
                />
            )}
        </div>
    );
};

export default Home;