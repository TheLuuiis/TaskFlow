import '../style/components/ContainerTask.css';

const ContainerTask = () => {
    return (  
        <div className="container__taks">
            <header className='header__taks'>
                <div className="view__taks">
                    <h1>Mi tablero de TaskFlow</h1>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" viewBox="0 0 24 24" ><path d="M4 18h16v2H4zm7-15v7H7l5 6 5-6h-4V3z"></path></svg>
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
                
            </div>
        </div>
    );
}
 
export default ContainerTask;