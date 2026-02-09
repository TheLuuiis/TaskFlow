import '../style/pages/Home.css';
import BandejaDeEntrada from '../components/BandejaDeEntrada';
import ContainerTask from '../components/ContainerTaks';
import ModalFormularioTarjeta from '../components/ModalFormularioTarjeta';

const Home = () => {
    return (  
        <div className="container__home">
            <BandejaDeEntrada />
            <ContainerTask />
            <ModalFormularioTarjeta />
        </div>
    );
}
 
export default Home;