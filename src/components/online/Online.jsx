import  './online.css'

export default function Online({user}) {

    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                  <span className='rightbarOnLine'></span>
                </div>
                <span className='rightbarUserName'>{user.username}</span>
             </li>
        </div>
    )
}
