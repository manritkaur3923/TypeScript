interface PersonProp {
  name: string;
  age: number;
  domain: string;
  isDisable?: boolean;
}
const Person = ({ name, age, domain, isDisable = false } : PersonProp) => {
  return (
    <div>
      <h2>Person Name: {name}</h2>
      <h2>Person Age: {age}</h2>
      <h2>Person Domain: {domain}</h2>
      <h2>{isDisable && <span>THIS PERSON IS SPECIALLY ABLED.</span>}</h2>
    </div>
  );
};

export default Person;
