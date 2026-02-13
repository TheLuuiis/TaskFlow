import '../style/components/TarjetaComentarios.css';

const TarjetaComentarios = () => {
    return (  
        <div className="card__comments">
            <div className="user__comment">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="#242528" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
            </div>
            <div className="description__user">
                <span>Luis David</span>
                <div className="comment">
                    <p>Crea tu nueva tarea hoy mismo y avanza ya firme ya</p>
                </div>
                <div className="comment_edit">
                    <button className='btn__comment_blue'>Editar</button>
                    <button className='btn__comment__red'>Eliminar</button>
                </div>
            </div>
        </div>
    );
}
 
export default TarjetaComentarios;