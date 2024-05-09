import './About.css';

const someData = {
    name: 'Joseph',
    imgURL: 'https://www.treehugger.com/thmb/DaW05sIPUUrCEDOa5ht63oXp5Oo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__12__snowflake-84c87424d5734b03ab1ca695c5a423c6.jpg',
    imgSize: 90,
}

const products = [
    {title: 'banana', id:'1', isSpecial: false},
    {title: 'muffin', id:'2', isSpecial: true},
    {title: 'dates', id:'3', isSpecial: false},
]
/*
function ProductList ()
{
    const listItems = products.map(element =>
        <li key={element.id}>{element.title}</li>

    )
    return <ul>listItems</ul>
}
*/

function About()
{
    return (
        <>
        <h1 className='mystyle'>This is the about component {someData.name}</h1>
        <img 
        src = {someData.imgURL}>
        </img>
        </>
    );
}

export default About;