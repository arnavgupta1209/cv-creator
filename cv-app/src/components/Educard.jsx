export default function Educard()  {
    return (<div className="card">
        <form>
            <label htmlFor="institution">Institution</label>
            <input type="text" id="institution" />
            <label htmlFor="edudates">Start and end dates</label>
            <input type="text" id="edudates" />
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" />
            <label htmlFor="grade">Grade</label>
            <input type="text" id="grade" />
            <div className="butdiv">
            <button type="button" id="edusubmit">Submit</button>
            <button type="button" id="eduedit">Edit</button>
            </div>
        </form>
    </div>);
}