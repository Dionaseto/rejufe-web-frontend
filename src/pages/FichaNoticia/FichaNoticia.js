/* eslint-disable no-unused-vars */
import {
  useRef, React, useEffect, useState,
} from 'react';
import './FichaNoticia.css';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useReactToPrint } from 'react-to-print';
import fichaNews from '../../components/NewsQuery/FichaNoticias';
import getNewsById from '../../components/getNewsById/getNewsById';
import * as managerService from '../../services/manager/managerService';

// eslint-disable-next-line react/prefer-stateless-function
// class ComponentToPrint extends React.Component {
//   render() {
//     const { news } = this.props;

//     return (

//     );
//   }
// }

function FichaNoticia() {
  const { search } = useLocation();
  const newsId = new URLSearchParams(search).get('newsId');
  const [news, setNews] = useState([]);
  console.log('🚀 ~ file: FichaNoticia.js ~ line 30 ~ FichaNoticia ~ news', news);
  const [image, setImage] = useState(news?.photos);

  // eslint-disable-next-line react/no-unstable-nested-components
  function Example() { return image ? <img src={`data:image/jpeg;base64,${image}`} alt="" /> : null; }

  async function getImage(id) {
    console.log('🚀 ~ file: FichaNoticia.js ~ line 36 ~ getImage ~ id', id);
    try {
      const response = await managerService.getImageById(id);
      setImage(response);
    } catch (error) {
      toast.error('Não foi possível obter imagem', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
    }
  }

  useEffect(() => {
    getNewsById(newsId, setNews);
  }, []);

  useEffect(() => {
    if (news?.photos) {
      getImage(news?.photos);
    }
  }, [news]);

  const handleWindowClose = () => {
    window.close('/imprimir');
  };

  // const tableNews = useRef(null);
  // console.log('🚀 ~ file: FichaAtas.js ~ line 88 ~ FichaMinutes ~ tableMinutes', tableNews);

  // const handlePrint = useReactToPrint({
  //   content: () => tableNews?.current,
  // });

  return (
    <body className="forms-minutes-body">
      <div className="forms-minutes-Container">
        <div className="forms-minutes-Container">
          <div className="header-print-associates-icon">
            <button
              type="button"
              className="print-associates-button"
            >
              <PrintRoundedIcon sx={{ fontSize: 20, marginRight: 1 }} />
              Imprimir
            </button>
            <button
              type="button"
              className="return-print-associates-button"
              onClick={handleWindowClose}
            >
              <BackspaceIcon sx={{ fontSize: 20, marginRight: 1 }} />
              Fechar
            </button>
          </div>
          <div className="print-associates-table">
            <div>
              <table className="forms-minutes-table-container">
                <div className="forms-minutes-grid-container">
                  <table width="100%">
                    <tr>
                      <td className="forms-minutes-td-container">
                        <table className="forms-minutes-t-container">
                          {fichaNews?.map((ficha) => (
                            <table className="forms-minutes-t-container">
                              <table width="100%">
                                <div className="forms-minutes-title">
                                  <td className="forms-minutes-td-title">
                                    {ficha.title}
                                  </td>
                                </div>
                              </table>
                              {ficha?.lines.map((line) => (
                                <table width="100%">
                                  <tr>
                                    {line?.items.map((item) => (
                                      <div className="forms-minutes-td-box">
                                        {item.label === 'Imagem' ? (
                                          <>
                                            <span className="forms-minutes-subtitle">
                                              {' '}
                                              {item.label}
                                              {' '}
                                            </span>
                                            {image && Example()}
                                            <br />
                                          </>
                                        ) : (
                                          <>
                                            <span className="forms-minutes-subtitle">
                                              {' '}
                                              {item.label}
                                              {' '}
                                            </span>
                                            <br />
                                            <span className="forms-minutes-value">
                                              {' '}
                                              {news[item.id]}
                                              {' '}
                                            </span>

                                          </>
                                        )}
                                      </div>
                                    ))}
                                  </tr>
                                </table>
                              ))}
                            </table>
                          ))}
                          <table width="100%">
                            <tr>
                              <td className="forms-minutes-td-title" height="25px" />
                            </tr>
                          </table>
                        </table>
                        <table />
                      </td>
                    </tr>
                  </table>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>

  );
}

export default FichaNoticia;
