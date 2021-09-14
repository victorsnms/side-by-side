interface IInfo {
    title : string
    content : string
}

export const infos: Array<IInfo> = [
    {
        title: 'Embalagem reciclável vs reciclada',
        content: `Antes de tudo, uma embalagem reciclável é uma embalagem que pode passar pelo processo de reciclagem e se tornar matéria-prima para indústria novamente.

        Nesse sentido, precisamos esclarecer que nem toda embalagem reciclável (que vem com aquele símbolo da reciclagem) é de fato reciclada!
        
        Acontece que existem processos de reciclagem para muitos dos tipos de materiais utilizados em embalagens. A grande questão, é que muitos desses processos são extremamente caros e acabam não justificando o valor da reciclagem.
        
        Além disso, muitas vezes, o processo de reciclagem resulta em um material de baixa qualidade, o que acaba não compensando`
    },
    {
        title: `Embalagens plásticas`,
        content: `Quando falamos das embalagens plásticas, precisamos ter em mente que existem 7 tipos de plásticos utilizados na fabricação (PET, PEAD, PEBD, PVC, PP, PS, Outros).

        Com exceção da categoria Outros, todos os demais possuem algum tipo de processo no qual é possível a reciclagem. No entanto, nem todos são reciclados por conta da baixa qualidade do material resultante ou pelo custo do processo.`
    },
    {
        title: `Embalagens recicladas`,
        content: `PET (Polietileno tereftalato): O mesmo das garrafas de refrigerante.
        Reciclagem depende do tipo de embalagem
        PVC (Policloreto de Vinila): Compõe as tubulações de água e esgoto.
        PEBD (Polietileno Baixa Densidade): Pode ser encontrado em brinquedos e peças de computadores.
        PEAD (Polietileno de Alta Densidade): Utilizado para compor as sacolas plásticas de supermercado.`
    },
    {
        title: `Embalagens não recicladas`,
        content: `PP (Propileno): Está presente em embalagens para alimentos congelados.
        PS (Poliestireno): Compõe os famosos descartáveis.
        Outros: Dentro desta categoria encontra-se o BOPP, tipo de material que compõe embalagens de alimentos laminadas como batata palha, barra de cereal, salgadinhos.`
    },
    {
        title: `Embalagens de vidro`,
        content: `O vidro por muito tempo foi considerado um material super sustentável, dada que a sua reutilização é infinita até… se quebrar!

        O vidro quebrado ainda é um desafio para cooperativas, visto que há um custo da coleta e triagem, por conta do risco de acidentes dos cooperados, que não compensa tanto ao compararmos com o valor recebido pela venda do material.`
    },
    {
        title: `Embalagens de papel`,
        content: `A taxa de reciclagem de embalagens de papel é uma das maiores dentre os materiais reciclados.

        Além disso, o papel possui um tempo de decomposição de no máximo 100 anos, um número muito menor do que quando comparado com outros grupos, onde, por exemplo, o plástico chega a 500 anos para se decompor.
        
        Ambos os fatos tornam as embalagens feitas com esse tipo de material muito mais sustentável, pelo alto nível de reciclabilidade (até caixas de pizzas podem ser recicladas) e pelo curto tempo de decomposição.`
    },
    {
        title: `Embalagens de metal`,
        content: `Dentro da categoria metal existem diversos tipos (aço, alumínio, cobre e outros). Esse tipo de material é extremamente reciclável e reciclado, por possuir um baixo custo no processo de reciclagem e por resultar em uma matéria prima de qualidade.

        Atualmente, latas de alumínio e de aço possuem uma margem de reciclagem superior a 90% e 60%, respectivamente.
        
        Esses números fazem bem não só para o meio ambiente, como também para a economia.`
    },
    {
        title: `Decomposição leva tempo!`,
        content: `Papel	De 3 a 6 meses
        Tecido	De 6 meses a 1 ano
        Filtro de cigarro	Mais de 5 anos
        Madeira pintada	Mais de 13 anos
        Náilon	Mais de 20 anos
        Metal	Mais de 100 anos
        Alumínio	Mais de 200 anos
        Plástico	Mais de 400 anos
        Vidro	Mais de 1000 anos
        Borracha	Tempo indeterminado`
    },
    {
        title: `Quais são os materiais que não podem ser reciclados?`,
        content: `Lixo Orgânico: restos de comida, cascas de legumes, frutas, cascas de ovos, etc.
        Os chamados Rejeitos: lenços, papel higiênico, absorventes e guardanapos de papel sujos, fotografias, espuma, acrílico, espelhos, cerâmica, porcelana, tijolos etc.
        Resíduos contaminantes específicos como pilhas e baterias.
        Resíduos hospitalares: algodão, seringas, agulhas, gaze, ataduras etc.
        Lixo químico ou tóxico: embalagens de agrotóxicos, latas de verniz, solventes, inseticidas, etc.`
    }
]

