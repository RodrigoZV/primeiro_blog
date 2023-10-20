'use client'

export default function Posts(){
    
    return(
    <section>
        <div>
            <h1>
                Meliodas
            </h1>
        </div>

        <div>
            <h2>Titúlo:Revenge Counter</h2>
            <p>Descrição: Meliodas desativa suas habilidades para que ele possa sofrer dano. Depois que Meliodas tomou bastante dano, ele carrega sua lâmina com poder e ataca seu inimigo com ela. Isto é considerado o ataque final de Meliodas e tem uma taxa de sobrevivência média de 0,2%.</p>
        </div>

        <div>
            <h2>titulo:Encantamento: Hellblaze</h2>
            <p>Descrição:uma habilidade misteriosa exibida por Meliodas que lhe permite gerar chamas negras. A técnica também tem o efeito adicional de anular a regeneração de um imortal, como mostrado quando ele usou contra o Ban.</p>
        </div>

      
   

        <div>
            <input placeholder='Nome do personagem'type="text" />
            <input placeholder='Nome da Habilidade'type="text" />
            <textarea placeholder='Descrição da Habilidade'/>

            <button>
                Adicionar
            </button>
        </div>
    </section>
    )
 
}