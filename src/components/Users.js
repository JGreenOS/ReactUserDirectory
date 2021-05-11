/* eslint-disable jsx-a11y/img-redundant-alt */
function Users (props)  {
    return (
        <div>
{/*Table starts here*/}
<table className="table table-bordered table-lg">
    <thead>
        <tr>
            <th className="col-2"><button onClick={props.filter}>Users (Filter by TBD)</button></th>
            <th className="col-2"><button onClick={props.sortUsers}>Name (Sort by Location)</button></th>        
            <th className="col-2">Location</th>
            <th className="col-2">Cell Phone</th>
            <th className="col-2">Time Zone</th>
            <th className="col-2">Email Address</th>
            </tr>
    </thead>

<tbody>
        {props.users.map (({login, name, picture, email, location, timezone, cell})=>
        {
            return(
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <tr key={login.uuid}>
                    <td className="col-3"><img src={picture.large} alt="employee picture" /></td>
                    <td className="col-3"> {name.first} {name.last}</td>
                    <td className="col-3">{location.state}</td> 
                    <td className="col-3">{cell}</td>  
                    <td className="col-3">{location.timezone.offset}</td> 
                    <td className="col-3">{email}</td>     
                </tr>
            );
        })}
</tbody>

</table>


        </div>

    );
}
    
export default Users
