## Dados

Utilizaremos AsyncStorage para armazenar nossos baralhos e flashcards. Redux é opcional para este projeto.

Utilizando AsyncStorage, você manuseará um objeto cujo formato é similar a este:

    {
        React: {
    	    title: 'React',
    	    questions: [
    		    {
    		    question: 'What is React?',
    		    answer: 'A library for managing user interfaces'
    		    },
    		    {
    		    question: 'Where do you make Ajax requests in React?',
    		    answer: 'The componentDidMount lifecycle event'
    		    }
    	    ]
    	},

        JavaScript: {
    	    title: 'JavaScript',
    	    questions: [
    		    {
    		    question: 'What is a closure?',
    		    answer: 'The combination of a function and the lexical 			 		environment within which that function was declared.'
    		    }
    	    ]
        }
    }

Perceba que cada baralho cria uma nova chave no objeto. Cada baralho possui um title e uma chave questions. title é o título para o baralho em específico e questions é uma array de perguntas e respostas para aquele baralho.

## Dica

Para manusear a base de dados **`AsyncStorage`**, você certamente irá querer criar quatro métodos auxiliares diferentes.

- getDecks: retorna todos os baralhos com seus títulos, perguntas, e
  respostas.
- getDeck: dado um único argumento id, ele retorna o baralho associado
  àquele id.

- saveDeckTitle: dado um único argumento title, ele adiciona-o aos  
  baralhos.

- addCardToDeck: dado dois argumentos, title e card, ele adiciona o  
  cartão à lista de perguntas ao baralho com o título associado.
