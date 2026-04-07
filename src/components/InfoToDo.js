const InfoToDo = ({ total, completed }) => {
  return (
    <div>
      <p>Всього задач: {total}</p>
      <p>Всього виконано: {completed}</p>
    </div>
  );
};

export default InfoToDo;
