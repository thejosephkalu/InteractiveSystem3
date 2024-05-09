import './About.css'
const someData = {
    name: 'Joseph',
    imgURL: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    imgSize: 90,
}

const products = [
    {title: 'banana', id:'1', isSpecial: false},
    {title: 'muffin', id:'2', isSpecial: true},
    {title: 'dates', id:'3', isSpecial: false},
]

function ProductList()
{
    const listItems = products.map(element =>
        <li 
        key={element.id}
        style = {{color: element.isSpecial? "red": "green"}}
        >
            {element.title}
        </li>

    )
    return (<ul>{listItems}</ul>);
}

function About()
{
    return (
        <>
            <h1 className='mystyle'>This is the about {someData.name}</h1>
            <img 
                src = {someData.imgURL} 
                alt = "This is an image"
                style = {{width: someData.imgSize,height: someData.imgSize}}
            >
            </img>
           <ProductList/>
        </>
    );
}

export default About;