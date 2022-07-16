// import logo from './logo.svg';
import './App.css';
import { PostList } from './component/PostList';
import { PostForm } from './component/PostForm';
// import { Form } from './component/Form';
// import { NameList } from './component/NameList';
// import { UserGreeting } from './component/UserGreetings';
// import { Greet } from './component/Greet';
// import { Message } from './component/Message';
// import { ClickHandler } from './component/ClickHandler';
// import { ParentComponent } from './component/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Jahid" heroName="Superman" />
      <Greet name="Happy" heroName="Wonder Women" />
      <Greet name="Razu" heroName="Batman">
        <h4>I am very impressive</h4>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Form /> */}

      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
