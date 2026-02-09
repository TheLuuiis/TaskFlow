import '../style/components/ModalFormularioTarjeta.css';
import ImageModal from '../assets/image/logo-form.svg';

const ModalFormularioTarjeta = () => {
    return (  
        <div className="container__modal__tarjeta">
            <div className="container__modal__form">
                <header>
                    <span>TaskFlow</span>
                    <div className="options__form_modal">
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#242528" d="M5.75 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"></path><path fill="#242528" d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h.644l6.274-7.723.053-.058a.75.75 0 0 1 1.06 0L13.5 8.19V3a.5.5 0 0 0-.5-.5zm2.575 11H13a.5.5 0 0 0 .5-.5v-2.69l-2.943-2.943z"></path></svg>
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#242528" d="M0 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M13 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#242528" viewBox="0 0 24 24" ><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                    </div>
                </header>
                <main className="info__modal__form">
                    <div className="container__form">
                        <form action="#">
                            <div className="title__form">
                                <h1>Crea tu nueva tarea ya, ¿qué esperas?</h1>
                                <p>
                                    Organiza tus ideas, define lo que debes hacer  
                                    y convierte tus pendientes en acciones claras.  
                                    Cada tarea empieza con una buena decisión.
                                </p>
                            </div>
                            <div className="container__inputs">
                                <div className="inputs">
                                    <input type="text" name='tarea' placeholder='Introduce un título o pega un enlace'/>
                                </div>
                                <div className="inputs">
                                    <textarea name="description" placeholder='Introduce una descripción'></textarea>
                                </div>
                                <div className="states">
                                    <span>Etiqueta</span>
                                      <select id="status" name="status">
                                        <option value="pending">🕒 Pendiente</option>
                                        <option value="progress">En proceso</option>
                                        <option value="done">Finalizado</option>
                                    </select>
                                </div>
                                <button type="submit">Crear tarea</button>
                            </div>
                        </form>
                    </div>
                    <div className="container__description__form">
                        <img src={ImageModal} alt="imagen__modal" />
                        <div className="description__form">
                            <h6>Integraciones</h6>
                            <h2>
                                Simplifica tu flujo de trabajo y mantente al tanto de tus tareas pendientes fácilmente.
                            </h2>
                            <p>
                                Intégralo fácilmente con las aplicaciones y los servicios con los que trabaja tu equipo, como Slack, Microsoft Teams, Outlook, Gmail y Confluence, entre otros.
                            </p>
                            <p>
                                Y, si usas Jira, puedes sincronizar y gestionar tus tareas sin obstáculos desde Trello mediante las listas de Jira.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default ModalFormularioTarjeta;