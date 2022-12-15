const name = "Viki";
const className = "greeting";

const user = { firstName: "Vikram", lastName: "Alone" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className={className}> Hello {fullName(user)}</h1>
    <p>Hava a nice Day!</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
