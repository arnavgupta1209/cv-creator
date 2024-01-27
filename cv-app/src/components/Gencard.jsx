export default function Gencard({updateinfo})  {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        form.reset();
        updateinfo(name, email, phone, address);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        
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