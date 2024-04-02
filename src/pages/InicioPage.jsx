import { useDispatch } from "react-redux";
import { setFiltro } from "../store/slices/tareaSlice";
import { useNavigate } from "react-router-dom";


export const InicioPage = () => {
  //Constantes**********************************************
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Funciones***********************************************
  const aNuevaTarea = () => {
    navigate("/nueva");
  };

  const aListaDeTareas = (nuevoFiltro) => {
    dispatch(setFiltro(nuevoFiltro));
    navigate("/lista");
  };

  //Efectos*************************************************

  return (
    <>
      <h1>Gestión de Pendientes</h1>
      <div className="containerInicio">
        <div
          className="todas"
          colSpan="4"
          onClick={() => {
            const nuevoFiltro = "todas";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Todas
        </div>
        <div
          className="escuela"
          colSpan="4"
          onClick={() => {
            const nuevoFiltro = "escuela";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Escuela
        </div>
        <div
          className="casa"
          colSpan="4"
          onClick={() => {
            const nuevoFiltro = "casa";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Casa
        </div>
      </div>
      {/* linea siguiente *************************************/}
      <div className="containerInicio">
        <div
          className="personal"
          colSpan="4"
          onClick={() => {
            const nuevoFiltro = "personal";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Personal
        </div>

        <div
          className="salud"
          onClick={() => {
            const nuevoFiltro = "salud";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Salud
        </div>
        <div
          className="diversion"
          onClick={() => {
            const nuevoFiltro = "diversion";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Diversión
        </div>
      </div>
      {/* linea siguiente *************************************/}
      <div className="containerInicio">
        <div
          className="tesis"
          colSpan="4"
          onClick={() => {
            const nuevoFiltro = "tesis";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Tesis
        </div>

        <div
          className="familia"
          onClick={() => {
            const nuevoFiltro = "familia";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Familia
        </div>
        <div
          className="juntos"
          onClick={() => {
            const nuevoFiltro = "juntos";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          YG
        </div>
      </div>
      <div className="containerInicio">
        <button className="nuevaTarea" onClick={aNuevaTarea}>Nueva Tarea</button>
      </div>
    </>
  );
};
