export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {

    //Delay
    await delay(5000);
    const id = context.params.id;

    return{
        props: {
            id: id
        }
    }
}

function Produtos(props) {

    return(
        <div>
            Id do Produto: {props.id}
        </div>
    )
}

export default Produtos;


//Delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
} 