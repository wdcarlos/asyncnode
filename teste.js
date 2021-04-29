arrDetalhesProduto.forEach(async (produto, i) => {
  const indexImg = produto.imgs.length - 1;
 

  const promises = produto.imgs[indexImg].fotos.slice(0,4).forEach(async (foto, iFoto) => {
    return FotosEspeciais.findOne({referencia: produto.cdErp}, function(_,obj) { 
      obj && console.log('Remover 1: '+obj.categoria); 
    });
  }); // Aqui estou retornando um array de FotosEspeciais.findOne...

  const result = await Promise.all(promises) //Aqui aguardo todos os resultados que vão chegar em forma de array
});
