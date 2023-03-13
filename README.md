# Pluto-TV.js

<div align="center">
<a href="https://github.com/MarketingPipeline/IPTV-Parser.js"> 
<img height=350 alt="Repo Banner for Pluto-TV.js" src="https://capsule-render.vercel.app/api?type=waving&color=539bf5&height=300&section=header&text=Pluto-TV.js&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Find%20free%20TV%20streams%20from%20Pluto%20TV&descAlignY=60&descAlign=50"></img></a>

</div>  
    
<p align="center">
  <b>A JavaScript library to fetch Pluto TV free IPTV / M3U stream urls.</b>

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/Pluto-TV.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/Pluto-TV.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/Pluto-TV.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/Pluto-TV.js.svg?style=social&label=Fork">
  </a>
   </p>  







## Example and usage

How to use Pluto-TV.js:

```js
import {PlutoTV} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/Pluto-TV.js@main/dist/pluto-tv.min.js';

try {
    /// Search Channels - DEFAULT USA CHANNELS.
    console.log(await PlutoTV().searchChannels("360p"))
    /// Search Channels by Country Code
    console.log(await PlutoTV().searchChannels("360", "mx"))
    /// Fetch all Channels - DEFAULT USA CHANNELS.
    console.log(await PlutoTV().fetchAllChannels())
    /// Fetch all Channels by Country Code.
    console.log(await PlutoTV().fetchAllChannels("uk"))
} catch (error) {
    console.log(error.message)
}
```

These are the supported country codes ```"br", "de", "es", "fr", "mx", "uk", "us"```. 


## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Pluto-TV.js)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/Pluto-TV.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Pluto-TV.js)

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/MarketingPipeline/Pluto-TV.js/blob/main/LICENSE) file for
details.
