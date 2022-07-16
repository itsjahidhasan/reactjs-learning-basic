import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent ${childName}`);
  };
  return <ChildComponent greet={greetParent} />;
};
