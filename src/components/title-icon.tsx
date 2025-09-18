import { HandshakeIcon } from "../assets/handshake"
import { ThumbtackIcon } from "../assets/thumbtack"
import { SearchIcon } from "../assets/search"
import { ClockIcon } from "../assets/clock"
import { linkIcon } from "../assets/link"

export const TitleIcon = ({type}:{type: "clock"|"link"|"thumbtack"|"search"|"shake"}) =>{
  let Icon;
  if(type == "clock") Icon = ClockIcon;
  else if(type == "link") Icon = linkIcon;
  else if(type == "search") Icon = SearchIcon;
  else if(type == "shake") Icon = HandshakeIcon;
  else Icon = ThumbtackIcon;

  return (
    <div className="icon-title">
      <Icon color="#fff" />
    </div>
  )
}