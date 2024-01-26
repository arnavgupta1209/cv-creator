export default function Gencard()  {
    return (<div className="card">
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" />
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
            <div className="butdiv">
            <button type="button" id="gensubmit" >Submit</button>
            <button type="button" id="genedit">Edit</button>
            </div>
        </form>
    </div>);
}