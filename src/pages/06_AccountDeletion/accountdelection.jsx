import "./accdel.css"


export default function AccountDeletion() {
    return (
        <div>
            <div className="ad-main">
                <div>
                    <h1>Account Deletion</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ipsum atque aliquid officiis laborum a. Deserunt soluta sunt perferendis quaerat corporis voluptatum dolores? Labore eos mollitia, molestias aliquam impedit recusandae!</p>
                </div>
                <form action="" className="ad-form">
                    <label htmlFor="">username</label>
                    <input type="text" name="" id="" placeholder="username" className="ad-form-username" required/>
                    <label htmlFor="">password</label>
                    <input type="password" name="" id="" placeholder="password" className="ad-form-pass" required/>
                    <label htmlFor="">Reason</label>
                    <input type="text" name="" id="" placeholder="Reason for deleting Account" className="ad-form-reason"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}