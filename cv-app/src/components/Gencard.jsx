export default function Gencard({updateinfo})  {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        updateinfo(name);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        updateinfo(name);
    }









    return (<div className="card">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" />
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
            <div className="butdiv">
            <button type="submit" id="gensubmit" >Submit</button>
            <button type="button" id="genedit" onClick={handleEdit}>Edit</button>
            </div>
        </form>
    </div>);
}