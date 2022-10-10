import moment from 'moment'
import { helpers } from 'vuelidate/lib/validators'


export const isDate = helpers.withParams(
    {type: 'isDate'},
    (value) => moment(value, 'DD/MM/YYYY', true).isValid()
)

export const isBeforeToday = helpers.withParams(
    {type: 'isBeforeToday'},
    (value) => !moment(value, 'DD/MM/YYYY', true).isValid() || moment().format('YYYYMMDD') > moment(value, 'DD/MM/YYYY', true).format('YYYYMMDD')
)


export const isValidCpf = helpers.withParams(
    {type: 'cpfValidator'},
    (cpf) => isValidCPF(cpf));

export const isValidCnpj = helpers.withParams(
    {type: 'cnpjValidator'},
    (cnpj) => isValidCNPJ(cnpj));


export const isValidCpfCnpj = (param) => helpers.withParams(
    {type: 'cpfCnpjValidator' },
    (data) => {
        console.log(data, param)
        if(!data)
            return true;
        switch(param){
            case 'CPF': return isValidCPF(data);
            case 'CNPJ': return isValidCnpj(data);
            default: return false;
        }
        
    });

const isValidCPF = (cpf) => {  
    if(!cpf || cpf.length == 0)
        return true

    if( cpf.length < 11)
        return false;

    let soma = 0;
    let resto;
    cpf = cpf.replace(/[^\d]+/g,''); // Somente os numeros
    if( cpf.length != 11 || cpf == '00000000000')
        return false;

    for (let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(cpf.substring(9, 10)) ) return false;
    
    soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;

}

const isValidCNPJ = (cnpj) => {
 
    if(!cnpj || cnpj.length == 0)
        return true;
    if(cnpj.length < 11)
        return false;
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let     pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
}
