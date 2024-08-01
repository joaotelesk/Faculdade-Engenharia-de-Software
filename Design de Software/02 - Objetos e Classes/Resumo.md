# 🧠 Resumo

## Objetos e Classes

### 🔹Conceitos Básicos da Orientação a Objetos:
A Programação Orientada a Objetos (OO) organiza o software em termos de objetos, permitindo que os programas sejam desenvolvidos de maneira mais natural, semelhante ao mundo real. Em vez de focar em algoritmos, a OO concentra-se em criar objetos que se comunicam entre si.
- Classes:
Uma classe é um modelo ou conjunto de instruções para construir um tipo específico de objeto. Ela define como um objeto se comporta e o que ele contém. Em Java, a sintaxe para definir uma classe é:
```bash
class NomeDaClasse {
    atributos;
    métodos;
}
```
- Objetos:
Um objeto é uma instância de uma classe, contendo métodos e propriedades que o tornam útil. Por exemplo, um objeto pode representar uma cor, uma mesa ou um latido. Para criar um objeto, usamos a sintaxe:
```bash
NomeDaClasse variavelRepresentaObjeto = new NomeDaClasse();
```
Objetos são projetados como hierarquias de classes e possuem um local de memória alocado. Eles incluem estruturas de dados, variáveis ou funções.

Comunicação entre Objetos
Objetos se comunicam através de mensagens, que consistem em três elementos:

1. Receptor da mensagem (o objeto destinatário)
2. Nome do método a ser executado
3. Lista de parâmetros necessários para o método (se houver)

Por exemplo, se um objeto da classe Dono envia uma mensagem para um objeto da classe Cachorro com a instrução "sentar", o cachorro executará o método sentar conforme definido em sua classe.

#### Resumo dos Conceitos
Objeto: Representação computacional de um elemento ou processo do mundo real, possuindo estado, identidade e comportamento.
Classe: Modelo que define os campos e métodos de um objeto.
### 🔹Elementos de um Objeto:
- Estado: Valores correntes dos atributos do objeto.
- Comportamento: Funções que podem ser executadas pelo objeto, representadas pelos métodos.
- Identidade: Unicidade do objeto, mesmo que seu estado seja idêntico ao de outro.

