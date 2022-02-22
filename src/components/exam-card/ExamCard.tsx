const ExamCard = () => {
    return (
        <div className="container--exams">
            <div className="container--exams__header">
                <h3>Assesment Final Test</h3>
            </div>
            <div className="container--exams__body">
                <div className="block--data"> <i className="fas fa-book-open"></i><span className="subtitle">10 Minutes ago</span>
                    <h4>58% Rate</h4>
                </div>
            </div>
                <button className="button button--with-icons container--exams__button">
                    <i className="fas fa-edit"> </i>
                </button>
                <button className="button button--primary container--exams__button">Ver Reporte</button>
            <ul className="container--exams__menu">
                <li><a>Visualizar</a></li>
                <li><a>Editar </a></li>
                <li><a>Desactivar Supervisión </a></li>
                <li><a>Ver Reporte </a></li>
                <li><a>Duplicar </a></li>
                <li><a>Eliminar</a></li>
            </ul>
        </div>
    );

}

export default ExamCard;