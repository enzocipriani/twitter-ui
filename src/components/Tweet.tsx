import './Tweet.css'
import { ChatCircle, ArrowClockwise, Heart } from 'phosphor-react'

export function Tweet() {
  return(
    <a href='#' className="tweet">
      <img src="https://github.com/enzocipriani.png" alt="Enzo Cipriani" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Enzo Cipriani</strong>
          <span>@enzo_cipriani</span>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum auctor metus. <br /><br />quis posuere orci lacinia quis.
        Vivamus egestas, est eget tempus sagittis, est ex ultrices ante, a lobortis ex est in risus.<br />
        Vivamus ultricies, magna non varius consequat.<br /><br />
        Duis venenatis non odio sit amet mattis. Integer at sollicitudin risus,
        at lobortis ante.
        </p>  

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            9
          </button>

          <button type="button">
            <ArrowClockwise />
            9
          </button>

          <button type="button">
            <Heart />
            9
          </button>
        </div>

      </div>
    </a>
  )
  
}