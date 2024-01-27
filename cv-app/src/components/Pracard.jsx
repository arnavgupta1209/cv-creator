

export default function Pracard({updateinfo})  {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const company = form.company.value;
        const date = form.date.value;
        const title = form.title.value;
        const desc = form.desc.value;
        form.reset()
        updateinfo(company, title, date, desc);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        
    }









    return (<div className="card">
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
            <label htmlFor="date">Start and end dates</label>
            <input type="text" id="date" />
            <label htmlFor="title">title</label>
            <input type="text" id="title" />
            <label htmlFor="desc">description</label>
            <input type="text" id="desc" />
            <div className="butdiv">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleEdit}>Edit</button>
            </div>
        </form>
    </div>);
}