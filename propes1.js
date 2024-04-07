export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}





// we can reuse the  contact by just providing the inputs

import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 

                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                // these properties are called props 

                // we can use any properties in the contact 
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App


///


import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}



///i this i are suing proes which have image also

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

//MAP IN JS

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
e here
const squares = nums.map(function(num) {
    return num * num
})


*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)


 import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

export default [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]


import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

 // using map  to fetch data from database
export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]


export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}

///  use simple item
import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })    