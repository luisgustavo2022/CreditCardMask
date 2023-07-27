## Projeto - Função Maskify

### Descrição

O projeto consiste na implementação da função `maskify`, que tem como objetivo ocultar informações sensíveis, como números de cartão de crédito, números de telefone ou respostas a perguntas secretas, substituindo todos os caracteres, exceto os últimos quatro, por '#'. Essa técnica é conhecida como "mascaramento" e é amplamente utilizada para proteger informações confidenciais de serem visualizadas por terceiros.

### Como usar

A função `maskify` recebe um parâmetro `cc`, que é uma string contendo o número a ser mascarado. Exemplo de uso:

```javascript
const ccNumber = "1234-5678-9876-5432";
const maskedNumber = maskify(ccNumber);
console.log(maskedNumber); // Output: "####-####-####-5432"
```

###Nota
Essa função oferece uma camada básica de segurança para proteger dados em exibições públicas ou compartilhadas, mas não deve ser a única medida de segurança para dados sensíveis. Em cenários de produção, é recomendável implementar medidas mais robustas, como criptografia e armazenamento seguro de dados.

Lembrando que, ao usar o arquivo README.md em um repositório real, é melhor formatá-lo com seções e títulos apropriados para facilitar a leitura e navegação. No entanto, para atender à solicitação de um único bloco de código, essa versão compacta foi fornecida.
