import './App.css';

function App() {
  const flag = (3 + 5 == 8);

  const name = '봄이';
  const animal = '강아지';

  const title = 'Hello World';

  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  const newUsers = users.filter((value) => {
    return value.vip === true;
  })

  newUsers.map((value, index) => {
    console.log('-' + value.name);
  })

  const isLogin = false;

  return (
    <>
      {isLogin && <>
        <div>
          이것은 div입니다
          <h3>이것은 div안에 있는 h3태그 입니다</h3>
        </div>
        {flag ? (<h3>정답입니다!</h3>) : (<h3>오답입니다!</h3>)}

        <h2>
          제 반려 동물의 이름은 <u>{name}</u>입니다.
          <br />
          <u>{name}</u>는 <u>{animal}</u>입니다.
        </h2>

        <div className='test'>
          {title}
        </div>
        <div className='input'>
          아이디:<input className='input' />
          <br />
          비밀번호:<input className='input' />
        </div>

        <div className='rainbow'>
          <div className="red" />
          <div className="orange" />
          <div className="yellow" />
          <div className="green" />
          <div className="blue" />
          <div className="navy" />
          <div className="purple" />
        </div>

        {newUsers.map((value, index) => {
          return (
            <div key={index}>
              <p>- {value.name}</p>
            </div>
          );
        })}
      </>}

    </>
  );
}

export default App;
