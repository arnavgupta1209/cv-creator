
export default function Educard({updateinfo})  {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const school = form.school.value;
        const date = form.date.value;
        const degree = form.degree.value;
        const grade = form.grade.value;
        form.reset();
        updateinfo(school, degree, date, grade);
        
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        
    }


    return (<div className="card">
        <form onSubmit={handleSubmit}>
            <label htmlFor="school">school</label>
            <input type="text" id="school" />
            <label htmlFor="date">Start and end dates</label>
            <input type="text" id="date" />
            <label htmlFor="degree">degree</label>
            <input type="text" id="degree" />
            <label htmlFor="grade">grade</label>
            <input type="text" id="grade" />
            <div className="butdiv">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleEdit}>Edit</button>
            </div>
        </form>
    </div>);
}