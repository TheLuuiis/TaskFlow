import '../style/components/ContainerTask.css';
import AñadirTarjeta from './AñadirTarjeta';
import Task from './Task';

const ContainerTask = () => {
    return (  
        <div className="container__taks">
            <header className='header__taks'>
                <div className="view__taks">
                    <h1>Mi tablero de TaskFlow</h1>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" viewBox="0 0 24 24"><path d="M12 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4m-2 16h4v-5h2V9c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4h2z"></path><path d="M16 14.3v2.03c2.63.47 4 1.3 4 1.66 0 .51-2.75 2-8 2s-8-1.49-8-2c0-.36 1.37-1.2 4-1.66V14.3c-3.31.52-6 1.72-6 3.7 0 2.75 5.18 4 10 4s10-1.25 10-4c0-1.98-2.69-3.18-6-3.7"></path></svg>
                </div>
                <div className="acount__taks">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </header>
            <div className="taks">
                <ul>
                    <li>
                        <Task />
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <AñadirTarjeta />
        </div>
    );
}
 
export default ContainerTask;