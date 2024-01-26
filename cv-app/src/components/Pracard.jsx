
export default function Pracard()  {
    return (<div className="card">
        <form>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
            <label htmlFor="dates">Start and end dates</label>
            <input type="text" id="dates" />
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
            <div className="butdiv">
            <button type="button" id="prasubmit">Submit</button>
            <button type="button" id="praedit">Edit</button>
            </div>
        </form>
    </div>);
}
