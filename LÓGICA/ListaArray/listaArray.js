let nomes = ['Pedro', 'Ana', 'Thiago', 'Clara', 'João', 'Letícia', 'Gabriel', 'Paloma', 'Lucas', 'Lana']
let idades = ['16','24','15','19', '20','32','12','27','8','10']
let coresFavoritas = ['Azul', 'Roxo', 'Laranja', 'Violeta','Branco', 'Lilás', 'Preto', 'Verde', 'Amarelo', 'Dourado']

console.log(nomes, idades, coresFavoritas)

coresFavoritas.splice(1 ,1 , 'Marrom')
idades.splice(3, 1, '18')

console.log(nomes, idades, coresFavoritas)

/*

SAÍDA:

[
  'Pedro',   'Ana',
  'Thiago',  'Clara',
  'João',    'Letícia',
  'Gabriel', 'Paloma',
  'Lucas',   'Lana'
] [
  '16', '24', '15',
  '19', '20', '32',
  '12', '27', '8',
  '10'
] [
  'Azul',    'Roxo',
  'Laranja', 'Violeta',
  'Branco',  'Lilás',
  'Preto',   'Verde',
  'Amarelo', 'Dourado'
]
[
  'Pedro',   'Ana',
  'Thiago',  'Clara',
  'João',    'Letícia',
  'Gabriel', 'Paloma',
  'Lucas',   'Lana'
] [
  '16', '24', '15',
  '18', '20', '32',
  '12', '27', '8',
  '10'
] [
  'Azul',    'Marrom',
  'Laranja', 'Violeta',
  'Branco',  'Lilás',
  'Preto',   'Verde',
  'Amarelo', 'Dourado'
  */