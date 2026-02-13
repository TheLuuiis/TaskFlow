import { useEffect, useState } from 'react';
import '../style/components/EditarFormulario.css';
import TarjetaComentarios from './TarjetaComentarios';

const estadosValidos = ['pending', 'progress', 'done'];

const EditarFormulario = ({ task, onClose, onSave, onDelete }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        status: 'pending'
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        status: ''
    });

    useEffect(() => {
        if (!task || typeof task !== 'object') return;

        const updateFormData = () => {
            setFormData({
                id: task?.id ?? '',
                title: task?.title ?? '',
                description: task?.description ?? '',
                status: estadosValidos.includes(task?.status) ? task.status : 'pending'
            });
        };

        updateFormData();
    }, [task]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = { title: '', description: '', status: '' };

        if (!formData.title.trim()) {
            newErrors.title = 'El título es obligatorio.';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'La descripción es obligatoria.';
        }
        if (!estadosValidos.includes(formData.status)) {
            newErrors.status = 'Selecciona un estado válido.';
        }

        setErrors(newErrors);
        return !newErrors.title && !newErrors.description && !newErrors.status;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;

        onSave({
            id: formData.id,
            title: formData.title.trim(),
            description: formData.description.trim(),
            status: formData.status
        });
    };

    const handleDelete = () => {
        if (typeof onDelete !== 'function' || !formData.id) return;
        onDelete(formData.id);
    };

    if (!task) return null;

    return (
        <div className="container__modal__edit" style={{ display: 'flex' }}>
            <div className="container__modal__form__edit">
                <header>
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="pending">Pendiente</option>
                        <option value="progress">En proceso</option>
                        <option value="done">Finalizado</option>
                    </select>

                    <div className="options__form_modal__edit">
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation"><path fill="#242528" d="M5.75 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"></path><path fill="#242528" d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h.644l6.274-7.723.053-.058a.75.75 0 0 1 1.06 0L13.5 8.19V3a.5.5 0 0 0-.5-.5zm2.575 11H13a.5.5 0 0 0 .5-.5v-2.69l-2.943-2.943z"></path></svg>
                        <svg fill="none" viewBox="0 0 16 16" width="19" height="19" role="presentation"><path fill="#242528" d="M0 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M13 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"></path></svg>
                        <button type="button" onClick={onClose} aria-label="Cerrar modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#242528" viewBox="0 0 24 24"><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                        </button>
                    </div>
                </header>

                <main className="main__edit">
                    <div className="container__info__edit">
                        <form onSubmit={handleSubmit}>
                            <div className="title__edit">
                                <svg fill="none" viewBox="0 0 16 16" width="17" height="17" role="presentation"><path fill="#82B536" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z"></path></svg>
                                <div className="edit__input">
                                    <input
                                        style={{ display: 'flex' }}
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Título de la tarea"
                                    />
                                    {errors.title && <small>{errors.title}</small>}
                                </div>
                            </div>

                            <div className="container__description__edit">
                                <div className="description__edit">
                                    <div className="title__description">
                                        <svg width="18" height="18" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z" fill="#A9ABAF"></path></svg>
                                        <p>Descripción</p>
                                    </div>

                                    <div className="content__edit">
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Describe la tarea"
                                        ></textarea>
                                        {errors.description && <small>{errors.description}</small>}
                                    </div>
                                </div>
                                {errors.status && <small>{errors.status}</small>}
                                <div className="container__btn__edit">
                                    <button type="submit">Guardar</button>
                                    <button type="button" className="btn__delete" onClick={handleDelete}>Eliminar tarea</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="container__comments">
                        <div className="container__title__comments">
                            <div className="title__comment">
                                <svg width="17" height="17" fill="#242528" viewBox="0 0 16 16" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path fill="currentcolor" d="M0 3.125A2.625 2.625 0 0 1 2.625.5h10.75A2.625 2.625 0 0 1 16 3.125v8.25A2.625 2.625 0 0 1 13.375 14H4.449l-3.327 1.901A.75.75 0 0 1 0 15.25zM2.625 2C2.004 2 1.5 2.504 1.5 3.125v10.833L4.05 12.5h9.325c.621 0 1.125-.504 1.125-1.125v-8.25C14.5 2.504 13.996 2 13.375 2zM12 6.5H4V5h8zm-3 3H4V8h5z"></path></svg>
                                <p>Comentarios y Actividad</p>
                            </div>
                            <button type="button">Mostrar detalles</button>
                        </div>
                        <div className="input__comment">
                            <input type="text" name='comentario' placeholder='Escribe un comentario...' maxLength={50}/>
                        </div>
                        <div className="container__comments__user">
                            <TarjetaComentarios />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditarFormulario;