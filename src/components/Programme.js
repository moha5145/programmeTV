const Programme = ({ item }) => {
  console.log(item);
  return (
    <div className="programme">
      <span className="time">{item.time}</span>
      <img src={item.image} alt="" />
      <div className="infos">
        <p>{item.title}</p>
        <span className="type">{item.type}</span>
        <div>
          <span className="duration">{item.duration}</span>
          <span>{item.direct ? "Direct" : null}</span>
        </div>
      </div>
    </div>
  );
};

export default Programme;
