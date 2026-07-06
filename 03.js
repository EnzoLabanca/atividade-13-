let f = 0;
for (let i = 1; i <= 10; i++){
    let preco = Number(prompt("Digite o preço dos produtos "+ i+ ":"));
     f = f + preco;
    
    console.log(`Produto ${i}: R$ ${preco.toFixed(2)}`);
    
}
    console.log("o valor total sera de: R$"+ f);

