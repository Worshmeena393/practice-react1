export default  function TopHeader({name, username, avatarImage}){
return (
    <header className="topHeader">
        <div className="topHeaderInner">
            <div className="avatarRing">
                <div className="avatarCircle avatarImageWrapper">
                    <img src={avatarImage}> alt={name} className="avatarImage" </img>

                </div>

                <div className="topHeaderContent">
                    <h1 className="profilename">{name}</h1>
                    <p className="profileHandel">{username}</p>

                    <div className="topHeaderButtons">
                        <button className="btnHeader primary"> Edit profile</button>
                        <button className="btnHeader ghost"> sign out</button>

                    </div>

                </div>






            </div>

        </div>

    </header>
)


}