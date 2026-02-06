import '../style/components/BandejaDeEntrada.css';
import chorme from '../assets/image/chorme.svg';
const BandejaDeEntrada = () => {
    return (  
        <div className="container__bandeja">
            <div className="title__bandeja">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F1F21" viewBox="0 0 24 24"><path d="M21.55 8.17 19 6.47V5.01c0-.55-.45-1-1-1h-2.7l-2.75-1.83c-.34-.22-.77-.22-1.11 0L8.69 4.01h-2.7c-.55 0-1 .45-1 1v1.46l-2.55 1.7c-.28.19-.45.5-.45.83v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-.33-.17-.65-.45-.83ZM7 6h10v4.46l-5 3.33-5-3.33zM4 20v-9.13l1.45.96 6 4c.17.11.36.17.55.17s.39-.06.55-.17l6-4 1.45-.96V20z"></path></svg>
                <h2>Bandeja de entrada</h2>
            </div>
            <div className="card__bandeja">
                <button>Añade una tarjeta</button>
            </div>
            <div className="container__tareas">
                <div className="title__tareas">
                    <h2>
                        Consolida tus tareas por hacer
                    </h2>
                    <p>
                        Habla, envíalo por correo electrónico y reenvíalo: sin importar cómo llegue, pásalo a Trello rápidamente.
                    </p>
                </div>
                <div className="options__tareas">
                    <div className="option__tareas blue">
                        <svg width="30" height="30" fill="#1d7afc" viewBox="0 0 16 16" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="##1d7afc" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v.529L8 8.128l6.5-3.6V4a.5.5 0 0 0-.5-.5zm12.5 2.743L8.363 9.641a.75.75 0 0 1-.726 0L1.5 6.243V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5z"></path></svg>
                    </div>
                    <div className="option__tareas chorme">
                        <img src={chorme} alt="chorme" />
                    </div>
                    <div className="option__tareas yellow">
                        <svg width="30" height="30" fill="#EED12B" viewBox="0 0 16 16" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#EED12B" d="M2.5 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2zm2-.5A.5.5 0 0 0 4 2v12a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5zM10 13H6v-1.5h4z"></path></svg>
                    </div>
                    <div className="option__tareas green">
                        <svg width="30" height="30" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="SlackColorIcon"><path d="M9.86632 4C8.98186 4.00065 8.26606 4.71698 8.26671 5.59967C8.26606 6.48236 8.98251 7.1987 9.86697 7.19935H11.4672V5.60033C11.4679 4.71764 10.7514 4.0013 9.86632 4C9.86697 4 9.86697 4 9.86632 4ZM9.86632 8.26667H5.60026C4.7158 8.26732 3.99935 8.98365 4 9.86634C3.99869 10.749 4.71515 11.4654 5.59961 11.4667H9.86632C10.7508 11.466 11.4672 10.7497 11.4666 9.86699C11.4672 8.98365 10.7508 8.26732 9.86632 8.26667Z" fill="#36C5F0"></path><path d="M19.9998 9.86634C20.0004 8.98365 19.284 8.26732 18.3995 8.26667C17.5151 8.26732 16.7986 8.98365 16.7993 9.86634V11.4667H18.3995C19.284 11.466 20.0004 10.7497 19.9998 9.86634ZM15.7331 9.86634V5.59967C15.7337 4.71764 15.0179 4.0013 14.1335 4C13.249 4.00065 12.5326 4.71698 12.5332 5.59967V9.86634C12.5319 10.749 13.2484 11.4654 14.1328 11.4667C15.0173 11.466 15.7337 10.7497 15.7331 9.86634Z" fill="#2EB67D"></path><path d="M14.1335 20C15.0179 19.9994 15.7344 19.2831 15.7337 18.4004C15.7344 17.5177 15.0179 16.8013 14.1335 16.8007H12.5332V18.4004C12.5325 19.2824 13.249 19.9987 14.1335 20ZM14.1335 15.7327H18.4002C19.2846 15.7321 20.0011 15.0157 20.0004 14.133C20.0017 13.2503 19.2853 12.534 18.4008 12.5327H14.1341C13.2497 12.5334 12.5332 13.2497 12.5339 14.1324C12.5332 15.0157 13.249 15.7321 14.1335 15.7327Z" fill="#ECB22E"></path><path d="M4 14.1331C3.99935 15.0158 4.7158 15.7321 5.60026 15.7328C6.48472 15.7321 7.20118 15.0158 7.20052 14.1331V12.5334H5.60026C4.7158 12.5341 3.99935 13.2504 4 14.1331ZM8.26671 14.1331V18.3998C8.2654 19.2825 8.98186 19.9988 9.86632 20.0001C10.7508 19.9995 11.4672 19.2831 11.4666 18.4004V14.1344C11.4679 13.2517 10.7514 12.5354 9.86697 12.5341C8.98186 12.5341 8.26606 13.2504 8.26671 14.1331Z" fill="#E01E5A"></path></svg>
                    </div>
                    <div className="option__tareas white">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1F1F21" viewBox="0 0 24 24"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93M11 4.07V11H4.07A8 8 0 0 1 11 4.07M4.07 13H11v6.93A8 8 0 0 1 4.07 13M13 19.93V13h6.93A8 8 0 0 1 13 19.93"></path></svg>
                    </div>
                </div>
                <div className="me__bandeja">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F1F21" viewBox="0 0 24 24" ><path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9h-5v-2.28c.59-.35 1-.99 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2a2 2 0 0 0 1 1.72V20H6z"></path></svg>
                    <p>
                        La bandeja de entrada solo es visible para ti
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default BandejaDeEntrada;