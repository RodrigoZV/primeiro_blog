export default function Posts(){
    
    let power = [
        {
            name:"Full Counter",
            desc:"Full Counter de Meliodas permite que o usuário possa refletir ataques direcionados a ele, apenas ataques mágicos, que utilizam magia, de volta para o inimigo, mas com muito mais poder; portanto, quanto mais forte os poderes do oponente, mais forte o poder refletor do usuário se torna."
        }
            
    ]

    return(
    <section>
        <div>
            <h1>
                Meliodas
            </h1>
        </div>

        {power.map((powers) =>

        <div>
            <h1>Titúlo:{powers.name}</h1>
            <p>Descrição: {powers.desc}</p>
        </div>

        
        )}




        



        



    </section>
    )
 
}