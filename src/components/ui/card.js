function Card(props) {

  const defaultClasses = "flex flex-row justify-center flex-wrap card frost p-4 sm:p-4 w-full drop-shadow-lg mb-4";

  let useClasses = defaultClasses + ' ' + props.className;

  return (
    <div className={useClasses}>
      {props.children}
    </div>
  );
}

export default Card;
