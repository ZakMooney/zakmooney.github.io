function Card(props) {

  const defaultClasses = "frost rounded-xl p-4 sm:p-6  transition-all duration-300";

  let useClasses = defaultClasses + ' ' + props.className;

  return (
    <div className={useClasses}>
      {props.children}
    </div>
  );
}

export default Card;
