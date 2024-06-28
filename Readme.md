
## React
**JSX** 

`JSX` = Javascript + XML
`XML` là viết tắt của từ eXtensible Markup Language, hay còn gọi là ngôn ngữ đánh dấu mở rộng do W3C đề nghị với mục đích tạo ra các ngôn ngữ đánh dấu khác

Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript

**DOM element**
```JavaScript
  const h1 = document.createElement('h1');
  h1.innerText="LEO HELLO";
  h1.className="heading";
  
  document.body.appendChild(h1);

```
```JavaScript
   const ul = document.createElement('ul'); 
for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.innerText = `Item ${i} : 1`;
  li.className = 'list-item';
  li.style.color = 'green'; 
  ul.appendChild(li);
    document.body.appendChild(ul);
}


```
```JavaScript
const fruit = ['banana', 'apple','orange'];
const list = document.createElement('ul');

fruit.forEach((item,index) => {
  const li = document.createElement('li');
  li.innerText = item ;
  li.className = 'list-fruit';
  li.style.color = 'red';
  li.style.listStyle='none';
  list.appendChild(li);
})
document.body.appendChild(list);
 
```
**React element**
React.createElement(type,prop,children)
Virtual DOM là một phiên bản của giao diện người dùng được lưu giữ trong bộ nhớ và được đồng bộ với DOM thật.

Vì vậy, React.createElement() trả về một đối tượng thay vì phần tử DOM vì điều này cho phép React tối ưu hóa hiệu suất (như Virtual DOM).

```JavaScript
const h1React = React.createElement('h1',{
  title: 'Hello',
  className:'heading'
}, 'LEO HELLO');

  root.render(h1React)
```
```JavaScript
    const listReact = React.createElement(
  'ul',
  null,
  React.createElement('li',null,'banana'),
  React.createElement('li',null,'apple'),
  React.createElement('li',null,'orange'),

)
root.render(listReact);
```
```JavaScript
    const fruit =[ 'banana', 'apple','orange'];
const listReact = React.createElement(
  'ul',
  null,
  fruit.map((item,index) => 
    React.createElement('li',{key:index},item),
  )
)
root.render(listReact);
```


**Rendering components**
```JavaScript
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>HELLO 123</h1>;
root.render(element);
```
**Component**
 là một đối tượng JavaScript được sử dụng để tạo các thành phần giao diện người dùng. Nó giúp tách một ứng dụng thành các phần nhỏ hơn, dễ quản lý và tái sử dụng
 ```JavaScript
 
function Animal () {
  return (
    <div>
      <h1>Leon</h1>
      <p>La mot con su tu</p>
    </div>
  )
}
function Fruit () {
  return (
    <div>
      <h1>Banana</h1>
      <p>La cay an qua</p>

    </div>
  )
}
function App() {
  return (
    <div className="App">
    // function animal va fruit la component
        <Fruit/>
        <Animal/>
    </div>
  );
}

 ```

**Props**
  sử dụng props để gửi dữ liệu đến component.
```JavaScript
function Fruit (props) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img
      src={props.image}
      />.
    </div>
  )
}
function Animal ({
  title,
  content,
  image
      }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <img
      src={image}
      />
    </div>
  )
}
function App() {
  return (
    <div className="App">
        <Fruit
        title="Banana "
        content="La mot qua chuoi"
        image="https://media.istockphoto.com/id/1184344821/vi/anh/chu%E1%BB%91i.jpg?s=1024x1024&w=is&k=20&c=nrWmUIROXj5hEte41pTDQ-rLaLkxU0QFpFuelkc5db0="
        />
        <Animal
        title="Leon"
        content= "La mot con su tu"
        image="https://media.istockphoto.com/id/1446582616/vi/anh/b%E1%BA%A3n-v%E1%BA%BD-c%E1%BB%A7a-tr%E1%BA%BB-em-s%C6%B0-t%E1%BB%AD.jpg?s=2048x2048&w=is&k=20&c=QiMrGWnTlX5ORvcxU-pDPf7j6OHwiaCjwP74ugeKAT8="/>
        
    </div>
  );
}
 ```     
 ```JavaScript
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
 ```  
**useState hook**
```JavaScript 
const[counter, setCounter] = useState(1)
  const handleIncrease = () => {
    setCounter(counter +1);
  }
  return (
    <div className="App">

      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase </button>
   
    </div>
  );
```
```JavaScript
function App() {
const [liked, setLiked] = useState(true);
 const handleChange = (e) => {
    setLiked(e.target.checked)
 }
  return (
    <div className="App">
      <label>

      
      <input
      type='checkbox'
      checked={liked}
      onChange={handleChange}
      />
      I like you
      </label>
      <p>You {liked ? 'liked' : 'did not like'} you</p>
    </div>
  );
}

```
```JavaScript
function App() {
const [name, setName] = useState('Anh Quoc');
const [ age, setAge ] = useState(18);

const handleChangeName = (e) => {
  setName(e.target.value)
}
const handleIncreaseAge= () => {
  setAge(age + 1);
}
 
  return (
    <div className="App">
      <input
          value={name}
          onChange={handleChangeName}
      />
      <button
      onClick={handleIncreaseAge}
      >
        Increase Age
      </button>
      <p>Hello, My name is {name}, I am {age} year old</p>
    </div>
  );
}
```
**useEffect hook**
1. useEffect(callback)
Gọi callback mỗi khi component re-render
Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback,[])
Chỉ gọi callback 1 lần sau khi component mounted

