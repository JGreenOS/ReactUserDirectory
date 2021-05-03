function Users (props)  {
    return (
        <div>
{/*Table starts here*/}
<table className="table table-bordered table-sm">
    <thead>
        <tr>
            <th className="col-3"><button onClick={props.filter}>Users (Filter by TBD)</button></th>
            <th className="col-3"><button onClick={props.sortUsers}>Name (Sort by last name)</button></th>        
            <th className="col-3">Address</th>
            <th className="col-3">Cell Phone</th>
            <th className="col-3">Location</th>
            <th className="col-3">Time Zone</th>
            </tr>
    </thead>

<tbody>
        {props.users.map (({login, name, picture, email, location, timezone, cell})=>
        {
            return(
                <tr key={login.uuid}>
                    <td className="col-3"><img src={picture.large} alt="employee picture" /></td>
                    <td className="col-3">{email}</td>
                    <td className="col-3">{location.state}</td> 
                    <td className="col-3">{timezone.offset}</td>
                    <td className="col-3">{cell}</td>        
                </tr>
            );
        })}
</tbody>

</table>


        </div>

    );
}
    
export default Users
