import useTasks from '../../hooks/useTasks'

export default function DoneTasks() {
  const {tasks} = useTasks()
  // const doneTasks = tasks.filter(elem => elem.status === true)

  return (
      {tasks}

    <div></div>
  )
}