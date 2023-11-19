import { Link } from "react-router-dom";
import { useStore } from "../Store/Index";

const Results = () => {
    const {correct_questions} = useStore();

  return (
    <div className="box__results">
        <h2>Has Terminado!</h2>
        <h3>Total De Respuestas Correctas : {correct_questions}</h3>
        <Link to="/">Empezar Nuevamente!</Link>
    </div>
  )
}

export default Results