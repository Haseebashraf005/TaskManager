export const ShowTasks = ({ tasks, setTasks, setindividualTask }) => {

    const handleDelete = (e) => {
        // console.log(e.id)

        const updatedTaskList = tasks.filter((item) =>  item.id !== e.id )
        setTasks(updatedTaskList)

    }


    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasks.length}</span>
                </div>   
                <button className="clearAll" onClick={() => setTasks([])}>Clear All</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={()=> setindividualTask(task)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task)}></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}
