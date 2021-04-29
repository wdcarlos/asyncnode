//adicionando as fotos ao newArr
arrDetalhesProduto.forEach(async (produto, i) => {
  const indexImg = arrDetalhesProduto[i].imgs.length - 1;
  let contadorFotos = 1;    
  let removerFoto;

  arrDetalhesProduto[i].imgs[indexImg].fotos.forEach(async (foto, iFoto) => {


    await FotosEspeciais.findOne({referencia: produto.cdErp}, function(err,obj) { 
      if(obj) removerFoto = obj.categoria;
      console.log('Remover 1: '+removerFoto); 
    });


    if(contadorFotos <= 4) { // pegar apenas 4 fotos

      if(foto.vlOrdem != removerFoto){
        newArr.produtos[i].fotos[iFoto] = {
          vlOrdem: foto.vlOrdem,
          url: foto.img['loja-prod-g']
        }
      }

      contadorFotos++;
    }
  });
});
