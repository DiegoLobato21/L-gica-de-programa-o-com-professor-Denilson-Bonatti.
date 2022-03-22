programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media,total

		cadeia nomeVendedor

		escreva("Qual seu nome? ")
		leia(nomeVendedor)

		escreva("valor de  vendas de janeiro?")
		leia(janeiro)

		escreva("valor de vendas de fevereiro?")
		leia(fevereiro)

		escreva("valor de vendas de março?")
		leia(marco)

		escreva("valor de vendas de Abril?")
		leia(abril)

		total= janeiro+fevereiro+marco+abril

		media=total/4

		escreva(nomeVendedor + ", seu total de  vendas foi de: " + total + " e sua média de vendas foi de " + media +" por mês.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 564; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */