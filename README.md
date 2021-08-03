# Templatr
Um construtor de template básico para escrever HTML usando objetos e arrays javaScript

## Sintaxe 
  Use strings e objetos para construir HTML 

EX: templatr({ div: { id: 'root' } });

* Caso sejam tags vazias, use strings para criá-las. Ex: templatr('main');
* Caso precise de atributos, use objetos aninhados. Ex: templatr({ main: { class: 'flex' } });

## Exemplo de site básico: 
templatr('header', { div: { id: 'root' } }, 'footer');  