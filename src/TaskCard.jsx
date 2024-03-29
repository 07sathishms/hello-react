import './TaskCard.css'
const TaskCard = (props) => {
  console.log(props)
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.name}</p>
    </div>
  )
}

export default TaskCard;