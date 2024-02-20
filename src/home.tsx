import React from "react"
import SVG from "react-inlinesvg"
import LogoSVG from "./assets/logo_optimized.svg"
import InstagramRaster from "./assets/instagram.webp"
import TelegramSVG from "./assets/telegram.svg"
import DiscordSVG from "./assets/discord.svg"

import "./home.css"

export const Home: React.FC = () => {
  return (
    <div className="home">
      <SVG src={LogoSVG} aria-label="Logo" />
      <h1>Euphrosyne<br/>Collective</h1>
      <h2>Disruption • Community • Euphoria</h2>
      <div className="social">
        <a href="https://discord.com/invite/YqTmFxz4P4" title="Discord">
          <SVG src={DiscordSVG} />
        </a>
        <a href="https://www.instagram.com/euphrosyne.collective" title="Instagram">
          <img src={InstagramRaster} alt="Instagram" />
        </a>
        <a href="https://t.me/+91nGiZ8YxxNhNDMx" title="Telegram">
          <SVG src={TelegramSVG} />
        </a>
      </div>
    </div>
  )
}
