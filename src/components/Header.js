import blogData from "../data/blog";

const heading = blogData.name;
console.log(heading);

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>;
    </div>
  );
}

export default Header;
