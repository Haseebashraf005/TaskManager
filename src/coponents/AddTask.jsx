import { useState } from "react";

export const AddTask = ({ tasks, setTasks , individualTask }) => {
    console.log(individualTask)


    // const [inputdata, setInpuData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log( e.target);
        // console.log("Task Value:", e.target.task.value);

         // Prevent adding an empty task
         if (!e.target.task.value.trim()) {
            // alert("Task cannot be empty!");
            return ;
        }

        const getCurrentDateTime = () => {
            const now = new Date();
        
            const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });
            const formattedDate = now.toLocaleDateString("en-US");
        
            return `${formattedTime} ${formattedDate}`;
        };


        const newTask = {
            id: Math.floor(10000 + Math.random() * 90000),
            name: e.target.task.value,
            time: getCurrentDateTime()
        }

        // console.log(newTask)

        setTasks([...tasks, newTask])
        // setInpuData("")
        e.target.task.value = ""

    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25"   />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}
