import '../style/pages/Home.css';
import BandejaDeEntrada from '../components/BandejaDeEntrada';
import ContainerTask from '../components/ContainerTaks';

const Home = () => {
    return (  
        <div className="container__home">
            <BandejaDeEntrada />
            <ContainerTask />
        </div>
    );
}
 
export default Home;