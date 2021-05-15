/* eslint-disable jsx-a11y/img-redundant-alt */
function Users (props)  {
    return (
        <div>
{/*Table starts here*/}
<table className="table table-bordered table-lg">
    <thead> <tr>
    <td className="col-2"><button onClick={props.filter}> Users (Filter by Age)</button></td>
    <td className="col-2"><button onClick={props.sortUsers}>Name (Sort by Last Name)</button></td> 
    </tr>
        <tr>
            
            <th className="col-2">User Thumbnail</th>
            <th className="col-2">Name</th>        
            <th className="col-2">Location</th>
            <th className="col-2">Cell Phone</th>
            <th className="col-2">Age</th>
            <th className="col-2">Email Address</th>
            </tr>            
    </thead>

<tbody>
        {props.users.map (({login, name, picture, email, location, dob, cell})=>
        {
            return(
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <tr key={login.uuid}>
                    <td className="col-3"><img src={picture.thumbnail} alt="employee picture" /></td>
                    <td className="col-3"> {name.first} {name.last}</td>
                    <td className="col-3">{location.state}</td> 
                    <td className="col-3">{cell}</td>  
                    <td className="col-3">{dob.age}</td> 
                    <td className="col-3">{email}</td>     
                </tr>
            )
        })}
</tbody>

</table>
        </div>
    )
}
 
export default Users
