import { useState } from "react";

export const AddTask = ({ tasks, setTasks, individualTask, setindividualTask }) => {
    // console.log(individualTask)


    // const [inputdata, setInpuData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log( e.target);
        // console.log("Task Value:", e.target.task.value);

        const getCurrentDateTime = () => {
            const now = new Date();

            const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });
            const formattedDate = now.toLocaleDateString("en-US");

            return `${formattedTime} ${formattedDate}`;
        };


        if (individualTask.id) {
            const updatedTaskList = tasks.map(item => (
                item.id === individualTask.id ? { id: individualTask.id, name: individualTask.name, time: getCurrentDateTime() } : item
            ))
            setTasks(updatedTaskList)
            setindividualTask({})
           

        } else {

            // Prevent adding an empty task
            if (!e.target.task.value.trim()) {
                // alert("Task cannot be emp
                return;
            }



            const newTask = {
                id: Math.floor(10000 + Math.random() * 90000),
                name: e.target.task.value,
                time: getCurrentDateTime()
            }

            // console.log(newTask)

            setTasks([...tasks, newTask])
            // setInpuData("")
            // e.target.task.value = ""
            setindividualTask({}) 

        }

    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={individualTask.name || "" } onChange={e => setindividualTask({ ...individualTask, name: e.target.value })} autoComplete="off" placeholder="add task" maxLength="25" />
                <button type="submit">{individualTask.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
