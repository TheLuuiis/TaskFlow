import '../style/components/EditarFormulario.css';

const EditarFormulario = () => {
    return (  
        <div className="container__modal__edit">
            <div className="container__modal__form__edit">
                <header>
                    <select name="states">
                        <option value="pending">Pendiente</option>
                        <option value="progress">En proceso</option>
                        <option value="done">Finalizado</option>
                    </select>
                    <div className="options__form_modal__edit">
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#242528" d="M5.75 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"></path><path fill="#242528" d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h.644l6.274-7.723.053-.058a.75.75 0 0 1 1.06 0L13.5 8.19V3a.5.5 0 0 0-.5-.5zm2.575 11H13a.5.5 0 0 0 .5-.5v-2.69l-2.943-2.943z"></path></svg>
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#242528" d="M0 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M13 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#242528" viewBox="0 0 24 24" ><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                    </div>
                </header>
                <main className="main__edit">
                    <div className="container__info__edit">
                        <div className="title__edit">
                            <svg fill="none" viewBox="0 0 16 16" width="17" height="17" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="#82B536" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z"></path></svg>
                            <a href="#">Tarea 1</a>
                        </div>
                        <div className="container__description-edit">
                            <div className="container__labels__edit">
                                <div className="labels__edit">
                                    <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="#fcfcfd"></path></svg>
                                    <p>Añadir</p>
                                </div>
                                <div className="labels__edit">
                                    <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.1213 2.80762C12.3403 2.02657 11.0739 2.02657 10.2929 2.80762L3.92891 9.17158C1.19524 11.9052 1.19524 16.3374 3.92891 19.0711C6.66258 21.8047 11.0947 21.8047 13.8284 19.0711L20.1924 12.7071C20.9734 11.9261 20.9734 10.6597 20.1924 9.87869L13.1213 2.80762ZM18.7782 11.2929L11.7071 4.22183L5.34313 10.5858C3.39051 12.5384 3.39051 15.7042 5.34313 17.6569C7.29575 19.6095 10.4616 19.6095 12.4142 17.6569L18.7782 11.2929ZM10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14ZM12 14C12 15.6569 10.6569 17 9 17C7.34315 17 6 15.6569 6 14C6 12.3431 7.34315 11 9 11C10.6569 11 12 12.3431 12 14Z" fill="#fcfcfd"></path></svg>
                                    <p>Etiqeutas</p>
                                </div>
                                <div className="labels__edit">
                                    <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z" fill="currentColor"></path><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#fcfcfd"></path></svg>
                                    <p>Fechas</p>
                                </div>
                                <div className="labels__edit">
                                    <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V18H6V6L16 6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H6ZM8.73534 10.3223C8.36105 9.91618 7.72841 9.89038 7.3223 10.2647C6.91619 10.639 6.89039 11.2716 7.26467 11.6777L10.8768 15.597C11.4143 16.1231 12.2145 16.1231 12.7111 15.6264L13.0754 15.2683C13.3699 14.9785 13.6981 14.6556 14.0516 14.3075C15.0614 13.313 16.0713 12.3169 17.014 11.3848L17.0543 11.3449C18.7291 9.68869 20.0004 8.42365 20.712 7.70223C21.0998 7.30904 21.0954 6.67589 20.7022 6.28805C20.309 5.90022 19.6759 5.90457 19.2881 6.29777C18.5843 7.01131 17.3169 8.27244 15.648 9.92281L15.6077 9.96263C14.6662 10.8937 13.6572 11.8889 12.6483 12.8825L11.8329 13.6851L8.73534 10.3223Z" fill="#fcfcfd"></path></svg>
                                    <p>Crhecklist</p>
                                </div>
                                <div className="labels__edit">
                                    <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.44777 7.61532 10.7518 8.59871 11.6649C5.31433 13.0065 3 16.233 3 20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19H5.07089C5.55612 15.6077 8.47353 13 12 13ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" fill="#fcfcfd"></path><path d="M17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17V14Z" fill="#fcfcfd"></path></svg>
                                    <p>Miembros</p>
                                </div>
                            </div>
                            <div className="description__edit">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint ab sunt quo a! Odio placeat vitae repellendus dolorum reprehenderit corrupti iure illo dolores, aliquam quo incidunt? Vero, eos asperiores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container__comments">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default EditarFormulario;