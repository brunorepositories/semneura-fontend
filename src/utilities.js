function replaceMoney(valor){
   let valor1 = valor.replace(/R\$ /, '')
   let valor2 = valor1.replace(/\./g, '')
   let valor3 = valor2.replace(/\,/, '.');
   return valor3
}

export default { replaceMoney }