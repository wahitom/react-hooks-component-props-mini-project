function Article(props) {
  //console.log(props.value);
  return (
    <article>
      <h3>{props.value.title}</h3>
      <small>{props.value.date}</small>
      <p>{props.value.preview}</p>
      <p>{props.value.minutes}</p>
    </article>
  );
}

export default Article;
