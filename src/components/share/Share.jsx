import  './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
    return (
    <div className='share'>
          <div className="shareWrapper">
          <div className="shareTop">
              <img className='shareProfileImg' src="assets/person/1.jpeg" alt="" />
              <input 
              placeholder='Que tienes en mente?' 
              className='shareInput'/>
              </div> 
              <br className='shareHr'/>
          <div className="shareBotton">
             <div className="shareOptions">
                <div className="shareOptions">
                <PermMedia htmlColor='tomato' className='shareIcon'/>
                <span className='shareOptionText'>Foto o Video</span>
                </div> 
                <div className="shareOptions">
                <Label htmlColor='blue' className='shareIcon'/>
                <span className='shareOptionText'>Etiqueta</span>
                </div> 
                <div className="shareOptions">
                <Room htmlColor='green' className='shareIcon'/>
                <span className='shareOptionText'>Ubicacion</span>
                </div> 
                <div className="shareOptions">
                <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                <span className='shareOptionText'>Sentimientos</span>
                </div> 
            </div>
            <button className='shareButton'>Compartir</button>
          </div> 
        </div> 
    </div>
    )
}
