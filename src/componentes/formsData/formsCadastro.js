import civilStates from '../consts/civilStates';
import brazilianStates from '../consts/brazilianStates';
import genres from '../consts/genres';
import lotacao from '../consts/lotacao';
import {
  cpfMask, cellphoneMask, phoneMask, cepMask,
} from '../masks/masks';

const formsData = [
  {
    title: 'Dados Pessoais',
    items: [
      {
        type: 'text',
        id: 'nome',
        label: 'Nome *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'user',
        label: 'Usuário *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'cargo',
        label: 'Cargo *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'nacionalidade',
        label: 'Nacionalidade *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'cpf',
        label: 'CPF *',
        field: null,
        select: false,
        required: true,
        mask: cpfMask,
      },
      {
        type: 'date',
        id: 'nascimento',
        label: 'Nascimento *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'naturalidade',
        label: 'Naturalidade *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'sexo',
        label: 'Sexo *',
        field: genres,
        select: true,
        required: true,
      },
      {
        type: 'text',
        id: 'estadoCivil',
        label: 'Estado Civil *',
        field: civilStates,
        select: true,
        required: true,
      },
      {
        type: 'text',
        id: 'conjuge',
        label: 'Cônjuge',
        field: null,
        select: false,
      },
      {
        type: 'date',
        id: 'nascimentoConjuge',
        label: 'Nascimento do cônjuge',
        field: null,
        select: false,
      },
      {
        type: 'text',
        id: 'filhos',
        label: 'Filhos',
        field: null,
        select: false,
      },
      {
        type: 'text',
        id: 'cep',
        label: 'Cep *',
        field: null,
        select: false,
        required: true,
        mask: cepMask,
      },
      {
        type: 'text',
        id: 'endereco',
        label: 'Endereço *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'number',
        id: 'numero',
        label: 'Número *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'complemento',
        label: 'Complemento *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'bairro',
        label: 'Bairro *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'cidade',
        label: 'Cidade *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'estado',
        label: 'Estado *',
        field: brazilianStates,
        select: true,
        required: true,
      },
    ],
  },
  {
    title: 'Dados Funcionais',
    items: [
      {
        type: 'text',
        id: 'lotacao',
        label: 'Lotação *',
        field: lotacao,
        select: true,
        required: true,
      },
      {
        type: 'text',
        id: 'atuacao',
        label: 'Atuação *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'cepFuncional',
        label: 'Cep *',
        field: null,
        select: false,
        required: true,
        mask: cepMask,
      },
      {
        type: 'text',
        id: 'enderecoFuncional',
        label: 'Endereço *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'number',
        id: 'numeroFuncional',
        label: 'Número *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'complementoFuncional',
        label: 'Complemento *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'bairroFuncional',
        label: 'Bairro *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'cidadeFuncional',
        label: 'Cidade *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'estadoFuncional',
        label: 'Estado *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'telefone',
        label: 'Telefone',
        field: null,
        select: false,
        mask: phoneMask,
      },
      {
        type: 'text',
        id: 'fax',
        label: 'Fax',
        field: null,
        select: false,
      },
      {
        type: 'text',
        id: 'celular',
        label: 'Celular *',
        field: null,
        select: false,
        required: true,
        mask: cellphoneMask,
      },
      {
        type: 'text',
        id: 'email',
        label: 'Email *',
        field: null,
        select: false,
        required: true,
      },
      {
        type: 'text',
        id: 'emailListaRejufe',
        label: 'Deseja receber email da lista REJUFE? Se positivo informe o email.',
        field: null,
        select: false,
      },
      {
        type: 'text',
        id: 'emailListaAscom',
        label: 'Deseja receber email da lista ASCOM? se positivo informe o email.',
        field: null,
        select: false,
      },
      {
        type: 'date',
        id: 'admissao',
        label: 'Admissão *',
        field: null,
        select: false,
        required: true,
      },
    ],
  },
];
export default formsData;
