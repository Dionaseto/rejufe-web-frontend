import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import ModalEnquete from '../../components/Enquetes/modalEnquetes';
import { useAuth } from '../../providers/auth';
import * as managerService from '../../services/manager/managerService';
import Quizzes from '../../components/CardQuizzes/Quizzes';
import './ResultadoQuizzes.css';

function ResultadoQuizzes() {
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState([]);
  const [newQuizz, setNewQuizz] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  async function getAllAQuizzes() {
    try {
      const response = await managerService.getQuizzes();
      setQuizzes(response);
      setLoading(true);
    } catch (error) {
      history.push('/NotFound');
      toast.error('Credenciais inválidas!!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }
  useEffect(() => {
    getAllAQuizzes();
  }, [newQuizz]);

  return (
    <div className="container-cards-quizzes">
      <div className="division-cards-quizzes">
        <div className="title-cards-quizzes">
          <h1>Resultado das Enquetes</h1>
          <ModalEnquete setNewQuizz={setNewQuizz} />
        </div>
        <div className="line-table-cards-quizzes" />
        {loading ? (
          <div className="loader-cards-quizzes">
            <CircularProgress size={24} color="inherit" />
          </div>
        ) : (
          <>
            {user?.type === 'administrador' ? (
              quizzes?.map((quizz) => (
                <Quizzes quizz={quizz} />
              ))
            ) : (
              <div />
            )}
            <div />
          </>
        )}
      </div>
    </div>
  );
}

export default ResultadoQuizzes;
