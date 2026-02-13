import '../style/pages/Home.css';
import { useState } from 'react';
import BandejaDeEntrada from '../components/BandejaDeEntrada';
import ContainerTask from '../components/ContainerTaks';
import ModalFormularioTarjeta from '../components/ModalFormularioTarjeta';
import EditarFormulario from '../components/EditarFormulario';

const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTask] = useState([]);

    const handleCreateTask = (newTaks) => {
        setTask((prevTaks) => [...prevTaks, newTaks]);
        setModalOpen(false);
    }

    return (  
        <div className="container__home">
            <BandejaDeEntrada />
            <ContainerTask onOpenModal={() => setModalOpen(true)} tasks={tasks} />
            {modalOpen && (
                <ModalFormularioTarjeta
                    onClose={() => setModalOpen(false)}
                    onCreateTask={handleCreateTask}
                />
            )}
            <EditarFormulario />
        </div>
    );
}
 
export default Home;