import { Usuario, Processo, Certificado } from "./codigo"

// Criando um usuário do tipo 'funcionario'
const funcionario = new Usuario('12345678901', 'João Silva', 'joao@example.com', 'funcionario');

// Criando um usuário do tipo 'cliente'
const cliente = new Usuario('09876543210', 'Maria Oliveira', 'maria@example.com', 'cliente');

console.log(`Funcionario: ${funcionario.nome}, Matricula: ${funcionario.matricula}`);
console.log(`Cliente: ${cliente.nome}, Tipo: ${cliente.tipo}`);

try {
  console.log(`Matricula do cliente: ${cliente.matricula}`);
} catch (error) {
  console.error(error.message); // Esperado: usuario do tipo cliente não tem matricula
}

// Criando um processo
const processo = new Processo(cliente, 'Reclamação sobre o serviço X');
console.log(`Processo criado com protocolo: ${processo.protocolo}, Autor: ${processo.autor.nome}`);


// Definindo a análise do processo
try {
  processo.setAnalise({
    matriculaUsuario: funcionario.matricula,
    status: 'deferido',
  });
} catch (error) {
  console.error(error.message); // Esperado: matricula do analista incorreta
}

// Corrigindo a matricula do analista e definindo a análise
processo.matriculaAnalista = funcionario.matricula;
try {
  processo.setAnalise({
    matriculaUsuario: funcionario.matricula,
    status: 'deferido',
  });
  console.log(`Processo analisado em: ${processo.dataAnalise}, Status: ${processo.status}`);
} catch (error) {
  console.error(error.message);
}

// Criando um certificado para o processo deferido
const certificado = new Certificado(processo.protocolo, true, funcionario.matricula);
console.log(`Certificado emitido com protocolo: ${certificado.protocolo}, Data de emissão: ${certificado.dataEmissao}`);
console.log(`Emitido em casa: ${certificado.emitidoEmCasa}, Analista: ${certificado.matriculaAnalista}`);
