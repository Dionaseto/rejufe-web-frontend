import { React, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './FichaUsuariosExternos.css';
import fichaAssociate from '../../components/ConsultaAssociados/FichaAssociate';
import getExternalUserById from '../../components/getAssociateById/getExternalUserById';

function FichaAssociadosExternos() {
  const history = useHistory();
  const { search } = useLocation();
  const associateId = new URLSearchParams(search).get('associateId');
  const [associate, setAssociate] = useState([]);

  useEffect(() => {
    getExternalUserById(associateId, setAssociate, history);
  }, []);

  return (
    <body>
      <table className="formsExternalAssociateTableContainer">
        <div className="formsExternalAssociateGridContainer">
          <table width="100%">
            <tr>
              <td className="formsExternalAssociateTdContainer">
                <table className="formsExternalAssociateTContainer">
                  <table width="100%">
                    <tr>
                      <td>
                        <img src="images/logoFichaAssociados.png" alt="logo" width="75%" />
                      </td>
                      <td>
                        <img src="images/FichaAssociados.png" alt="nome" width="75%" />
                      </td>
                    </tr>
                  </table>
                  {fichaAssociate?.map((ficha) => (
                    <table className="formsExternalAssociateTContainer">
                      <table width="100%">
                        <tr>
                          <td className="formsExternalAssociateTdTitle">
                            {ficha.title}
                          </td>
                        </tr>
                      </table>
                      {ficha?.lines.map((line) => (
                        <table width="100%">
                          <tr>
                            {line?.items.map((item) => (
                              <td className="formsExternalAssociateTdBox">
                                <span className="formsExternalAssociateSubtitle">
                                  {' '}
                                  {item.label}
                                  {' '}
                                </span>
                                <br />
                                <span>
                                  {' '}
                                  {associate[item.id]}
                                  {' '}
                                </span>
                              </td>
                            ))}
                          </tr>
                        </table>
                      ))}
                    </table>
                  ))}
                  <table width="100%">
                    <tr>
                      <td className="formsExternalAssociateTdTitle" height="25px" />
                    </tr>
                  </table>
                </table>
                <table />
              </td>
            </tr>
          </table>
        </div>
      </table>
    </body>

  );
}

export default FichaAssociadosExternos;
