import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'd8as9d',
      label:'Components in React',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam iure temporibus, perferendis unde modi porro ut repellendus ea excepturi corporis dicta velit mollitia officiis, ad perspiciatis, voluptates odio nostrum molestias at qui. Nam modi aut ipsum aliquam molestias? Molestiae dolore unde atque laborum reiciendis nostrum aliquam quasi nam porro.'
    },
    {
      id: 'a2j290',
      label:'Learning HTML5 and CSS3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque id mollitia, corporis cum consectetur ducimus sed magni similique nobis!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque id mollitia, corporis cum consectetur ducimus sed magni similique nobis!'
    },
    {
      id: 'f012ejs',
      label:'The trick parts of Next.js',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ea, repellat deserunt inventore voluptates nam, asperiores illum magnam corporis consectetur reprehenderit ipsum aliquid quae voluptatum. Ex, repellat quo eligendi cupiditate nam debitis facere dignissimos voluptatibus assumenda eius? Aut, nesciunt maxime?'
    },
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App
