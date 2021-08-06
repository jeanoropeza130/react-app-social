import './sidebar.css'
import {RssFeed,
        PlayCircleFilledOutlined,
        Group,
        Bookmark,
        HelpOutline,
        WorkOutline,
        Event,
        School,
        Chat,} from '@material-ui/icons'
import {Users} from '../../dummyData'
import CloseFriend from '../closefriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li Chat className="sidebarListItem">
                    < Chat className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chats</span>
                   </li>
                   <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className='sidebarIcon'/>
                    <span className="sidebarListItemText">Videos</span>
                   </li>
                   <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebarListItemText">Grupos</span>
                   </li>
                   <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">Marcadores</span>
                   </li>
                   <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebarListItemText">Preguntas</span>
                   </li>
                   <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon'/>
                    <span className="sidebarListItemText">Trabajos</span>
                   </li>
                   <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText">Eventos</span>
                   </li>
                   <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListItemText">Cursos</span>
                   </li>
               </ul>
               <button className='sidebarButton'>Mostar Mas</button>
               <hr className='sidebarHr'/>
               <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}
            </ul>
         </div>
    </div>
    )
}
