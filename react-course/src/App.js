import logo from './logo.svg';
import './App.css';
 
const fruits = [
          {
              "id": 1,
              "title": "Banana",
              "content": "La trai chuoi co mau vang, an rat ngon",
              "image": "https://i.pinimg.com/564x/fe/ba/9f/feba9fd1079a96912d7fadb6c6166b91.jpg",
          
  },
  {
              "id": 2,
              "title": "Apple",
              "content": "La trai tao co mau do, an gion gion",
              "image": "https://i.pinimg.com/564x/4e/ff/ea/4effea8440c0099e538425e2a2b46578.jpg",
         
  },
  {
              "id": 3,
              "title": "Orange",
              "content": "La trai cam co mau cam, an rat chua",
              "image": "https://i.pinimg.com/564x/84/bf/31/84bf31a8776c4894b62220dd4623a21a.jpg",
             
  }

  ]
// function Fruit (props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <img
//       src={props.image}
//       />.
//     </div>
//   )
// }
const Fruit = ({ title, content, image } ) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
    <img src={image} alt={title} />
    


  </div>






);




function App() {
  return (
    <div className="App">
   {fruits.map(fruit => (
    <Fruit
    key={fruit.id}
    title={fruit.title}
    content={fruit.content}
    image={fruit.image}
    />
   ))}
    </div>
  );
}

export default App;
