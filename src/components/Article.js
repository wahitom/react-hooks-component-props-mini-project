function Article(props) {
  //console.log(props.value);
  return (
    <article>
      <h3>{props.value.title}</h3>
      <small>
        {props.value.date}. {props.value.minutes} min.read
      </small>
      <p>{props.value.preview}</p>
    </article>
  );
}

export default Article;
