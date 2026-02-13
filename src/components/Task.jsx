import '../style/components/Task.css';

const statusLabel = {
    pending: 'Pendiente',
    progress: 'En proceso',
    done: 'Finalizado'
};

const Task = ({ task, onEditTask, onDragStart, onDragEnd, isDragging }) => {
    const { title, status } = task;

    return (
        <div
            className={`card__task ${isDragging ? 'is-dragging' : ''}`}
            draggable
            onDragStart={(event) => onDragStart(event, task.id)}
            onDragEnd={onDragEnd}
        >
            <div className="title__card">
                <span>{statusLabel[status] || 'Pendiente'}</span>
                <svg fill="none" viewBox="0 0 16 16" width="16" height="16" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi">
                    <path fill="#A9ABAF" d="M0 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M13 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"></path>
                </svg>
            </div>

            <div className="container__task__card">
                <div className="content__task__card">
                    <svg fill="none" viewBox="0 0 16 16" width="17" height="17" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi">
                        <path fill="#82B536" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z"></path>
                    </svg>
                    <a href="#">{title}</a>
                </div>
            </div>

            <div className="container__edit__card">
                <div
                    className="edit__card"
                    onClick={() => onEditTask(task)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            onEditTask(task);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#A9ABAF" viewBox="0 0 24 24">
                        <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
                        <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                    </svg>
                    <p>Editar</p>
                </div>
                <svg width="17" height="17" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="#A9ABAF"></path>
                    <path d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="#A9ABAF"></path>
                    <path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="#A9ABAF"></path>
                    <path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="#A9ABAF"></path>
                    <path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="#A9ABAF"></path>
                    <path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="#A9ABAF"></path>
                </svg>
            </div>
        </div>
    );
};

export default Task;