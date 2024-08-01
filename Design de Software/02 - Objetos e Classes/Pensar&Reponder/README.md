# 🧠 Atividade: Pensar & Responder
Leia atentamente a seguinte situação de negócio.

Uma empresa de registro de certificados disponibiliza um APP para que clientes possam registrar e acompanhar um processo de validação de trabalhos. No registro do processo é importante informar o nome do autor, CPF, título do trabalho e data da produção. Os processos submetidos são analisados por um profissional, que informa a data de análise, sua matrícula e o status (deferido/indeferido).

O acompanhamento de análise é realizado pelo cliente a partir da consulta a processos de registro, informando o protocolo recebido no ato do registro do processo.

Todo profissional e cliente devem estar cadastrados como usuários, contendo as informações CPF, Nome, email e, para os profissionais, ainda a matrícula.

O cliente poderá emitir o certificado do trabalho submetido à análise em casa ou optar por se dirigir a uma empresa de registro de certificados.

Apresente duas classes e os atributos que identificam os objetos representados por elas.

## Resposta

Optei por criar 3 classes:  Usuário, Processo e Certificado

1 – Usuário:

- Atributos:

  - _cpf: Armazena o CPF do usuário.

  - _nome: Armazena o nome do usuário.

  - _email: Armazena o email do usuário.

  - _matricula: Opcional, armazena a matrícula do usuário, que é gerada automaticamente se o tipo for 'cliente'.

  - _tipo: Define se o usuário é um 'cliente' ou 'funcionario'.

- Construtor:

  - Inicializa _cpf, _nome, e _email com os valores fornecidos.

  - Define _matricula como um UUID se o tipo for 'funcionario', ou undefined se for 'cliente'.

  - Define o atributo _tipo com o valor fornecido.

- Métodos:

  - Métodos getter e setter para _cpf, _nome, _email, e _tipo.

  - O getter para _matricula lança um erro se _matricula não estiver definido, o que ocorre para usuários do tipo 'cliente'.

  - O setter para _tipo altera o tipo e define _matricula como um novo UUID se o tipo for 'funcionario'. Se o tipo for 'cliente', _matricula é definido como indefinido (undefined).

Justificativa: A classe Usuário encapsula as informações básicas de todos os usuários e gerencia a lógica de matrícula com base no tipo de usuário, garantindo que apenas funcionários tenham matrícula.



2 – Processo:

- Atributos:

  - _protocolo: Armazena um UUID único para o processo.

  - _autor: Armazena um objeto da classe Usuario que criou o processo.

  - _titulo: Armazena o título do processo.

  - _dataProducao: Armazena a data de produção do processo.

  - _dataAnalise: Opcional, armazena a data em que o processo foi analisado.

   - _matriculaAnalista: Opcional, armazena a matrícula do analista responsável pela análise.

  - _status: Opcional, armazena o status do processo, que pode ser 'deferido' ou 'indeferido'.

- Construtor:

  - Inicializa _protocolo com um UUID, o autor com um usuário, o título com o valor fornecido, e a data de produção com a data atual.



- Métodos:

  - Métodos getter e setter para _protocolo, _autor, _titulo, _dataProducao, _dataAnalise, _matriculaAnalista, e _status.

  - O método setAnalise permite definir o status e a data de análise do processo. Valida que a matrícula do analista fornecida corresponde à matrícula do analista e que o status do processo ainda não foi definido como 'deferido'. Se as condições forem atendidas, atualiza o status e a data de análise.

Justificativa: A classe Processo gerencia a criação e análise de processos de trabalho, mantendo informações sobre o autor e o status do processo.



3 – Certificado:

- Atributos:

  - _protocolo: Armazena o protocolo do certificado.

  - _dataEmissao: Armazena a data de emissão do certificado.

  - _emitidoEmCasa: Indica se o certificado foi emitido em casa.

  - _matriculaAnalista: Opcional, armazena a matrícula do analista responsável pela emissão.

- Construtor:

  - Inicializa o protocolo com o valor fornecido, a data de emissão com a data atual, se foi emitido em casa com o valor fornecido, e opcionalmente a matrícula do analista.

- Métodos:

  - Métodos getter para _protocolo, _dataEmissao, _emitidoEmCasa, e _matriculaAnalista.

Justificativa: A classe Certificado representa o certificado emitido para um processo, com informações sobre a emissão e o analista responsável.

### Codigo:
[Link](codigo.ts)
### Exemplo:
[Link](exemplo.ts)