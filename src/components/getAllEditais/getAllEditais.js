import * as managerService from '../../services/manager/managerService';

// eslint-disable-next-line camelcase
function createData(number, description) {
  return {
    number, description,
  };
}

function createId(_id) {
  return _id;
}

async function getAllEditais(setId, setAllEditais, history, setUse, setArchive1Id, setArchive2Id) {
  const auxEdicts = [];
  const edictsId = [];
  const archive1Code = [];
  const archive2Code = [];

  try {
    const allEditais = await managerService.getEditais();
    allEditais.sort();

    allEditais.filter((editais) => editais.type.toLowerCase() !== 'atas').forEach((object) => {
      auxEdicts.push(createData(
        object.number,
        object.description,
      ));
      archive1Code.push(object.archive_1);
      archive2Code.push(object.archive_2);
    });
    allEditais.forEach((object) => {
      edictsId.push(createId(
        object._id,
      ));
    });

    setAllEditais(auxEdicts);
    setId(edictsId);
    setArchive1Id(archive1Code);
    setArchive2Id(archive2Code);
    setUse(false);
  } catch (error) {
    history.push('/NotFound');
  }
}

export default getAllEditais;
