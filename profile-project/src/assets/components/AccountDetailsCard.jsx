import Row from '.Row'

export default AccountDetailsCard({details}){
    return (
        <div className="card infoCard">
        <h2 className="cardTitle"> accountDetails</h2>
        <div className="rows">
        <row label="Role" valu={ details.Role}></row>
        <row label="statues" valu={<span className='pill'>{details[label]}</span>}></row>
        <row label="verification" valu={<span className='Verified'>✔️Verified.</span>}></row>




        </div>
        </div>
    )
}