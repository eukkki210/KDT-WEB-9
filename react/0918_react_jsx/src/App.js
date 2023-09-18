import logo from './logo.svg';
import './App.css';

function App() {
  const flag = false;
  let txt = '';

  if (flag) {
    txt = 'true 입니다'
  } else {
    txt = 'false 입니다'
  }

  const styles = {
    backgroundColor: 'black',
    color: 'white'
  };

  // map함수
  const lists = ['k', 'd', 't', 'w', 'e', 'b'];

  // filter함수
  const animals = ['dog', 'cat', 'rabbit'];
  const newAnimals = animals.filter((value) => {
    return value.includes('a');
  })
  console.log(newAnimals);

  // 단축평가
  // &&연산자
  const result = false && "Hello";
  console.log(result);
  // ||연산자
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  return (
    <>
      <h1 style={styles}>Hello React</h1>
      <div>리액트 시작</div>
      <input />
      <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
      <div>{txt}</div>
      {lists.map((value, index) => {
        return (
          <div key={index}>
            <p>Hello {value}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
