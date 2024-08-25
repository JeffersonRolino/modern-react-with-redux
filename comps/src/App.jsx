import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'd8as9d',
      label:'Components in React',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error?'
    },
    {
      id: 'a2j290',
      label:'Learning HTML5 and CSS3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque id mollitia, corporis cum consectetur ducimus sed magni similique nobis!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque id mollitia, corporis cum consectetur ducimus sed magni similique nobis!'
    },
    {
      id: 'f012ejs',
      label:'The trick parts of Next.js',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero libero blanditiis quos harum praesentium inventore fugiat ducimus quidem. Repellendus, qui.'
    },
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App
