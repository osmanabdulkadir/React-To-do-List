const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label >task</label>
                <input type="text" placeholder="Add Task" />


                <div className='form-control'>
                <label >Day & time</label>
                <input type="text" placeholder="Add Day & time" />
                </div>

                <div className='form-control'>
                <label >Set Reminder</label>
                <input type="checkbox"  />
                </div>

            </div>

            <input type="submit" value='Save Task'></input>

        </form>
    )
}