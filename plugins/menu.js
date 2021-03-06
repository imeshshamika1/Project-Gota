/* Copyright (C) 2021 T REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');


if (Config.WORKTYPE == 'public') {
        
if (Config.BTN == 'btn') {

Trex.addrex({pattern: 'trex', fromMe: false}, (async (message, match) => {
// T-REX LIST๐ฟ
        var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'
    
    const rows = [
        {title: '๐ฟ ALL MENU ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+Config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ BOT ๐ฟ๐
 โ        โโโโโโโโโโ
 โ
 โโท .trex
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Sticker ๐ฟ๐
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐๐ฟ Text To Img ๐ฟ๐
 โ
 โโท .rlpack
 โโท .attppack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Groups ๐ฟ๐
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ ONLINE STORE ๐ฟ๐
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ For owner ๐ฟ๐
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      T-REX BOT
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Search ๐ฟ๐
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ Media Editor๐ฟ๐
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Random ๐ฟ๐
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ Fun ๐ฟ๐
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐๐ฟ Other ๐ฟ๐
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
  
       ๐ฟ       Hiruwa        ๐ฟ
` , rowId:"rowid1"},
        {title: '๐ฟ ADVANCE MENU ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ

           โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ

โโโโโโโโโโโโโโโโโโโโโโโโโ

*๐ Command:* ยฐ.xmediaยฐ

*โข Description:* ยฐA plugin that have 25 media tools.ยฐ

*๐ Command:* ยฐ.adminยฐ

*โข Description:* ยฐTo get the admin command listยฐ

*๐ Command:* ยฐ.trexยฐ

*โข Description:*ยฐall commandsยฐ

*๐ Command* ยฐ.rlpackยฐ

*โข Description:* ยฐT-REX LOGO COLLECTION 01ยฐ

*๐ Command:* ยฐ.lovepackยฐ

*โข Description:* ยฐSend Love message to gf/bf.ยฐ

*๐ Command;* ยฐ.grpยฐ

*โข Description:* ยฐSend Groups listยฐ

*๐ Command:* ยฐ.warn1,.warn2,.warn3,.warn4

*โข Description:* ยฐSend Group Warm msg. Admin only Commandยฐ

*๐ Command:* ยฐ.rulesยฐ

*โข Description: * ยฐSend Group Rulesยฐ

*๐ Command:* ยฐ.rexยฐ

*โข Description:* ยฐChat with AI bot.ยฐ

*๐ Command:* ยฐ.switchยฐ

*โข Description:* ยฐTurn on/off chat bot.

โจ๏ธ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)ยฐ

*๐ Command:* ยฐ.animeยฐ

*โข Description:* ยฐSend Different type ANIME images . เทเทเทเทเถฏเทเถเทเถป เถเถฑเทเถธเท เถดเทเถฑเทเถญเทเถป เถเถถ เทเทเถญ เถเทเถบเท..ยฐ

*๐ Command:* ยฐ.antispamยฐ

*โข Description:* ยฐThis command for any emergency situation about any kind of WhatsApp SPAM in Groupยฐ

*๐ Command:* ยฐ.mp3ยฐ

*โข Description:* ยฐConvert mp4 into mp3.ยฐ

*๐ Command:* ยฐ.photoยฐ

*โข Description:* ยฐ๐โข Convert sticker into an image.ยฐ

*๐ Command:* ยฐ.ffmpegยฐ

*โข Description:* ยฐApply ffmpeg filter to a video

โจ๏ธ Example: .ffmpeg fade=in:0:30ยฐ

*๐ Command:* ยฐ.gnยฐ

*โข Description:* ยฐSend Gn wish with image.ยฐ

*๐ Command:* ยฐ.gmยฐ

*โข Description:* ยฐSend Gm wish with image.ยฐ

*๐ Command:* ยฐ.infoยฐ

*โข Description:* ยฐShow chat detailsยฐ

*๐ Command:* ยฐ.covidยฐ

*โข Description:* ยฐCheck information about Covid-19 of countries.

Example : .covid Sri Lankaยฐ

*๐ Command:* ยฐ.memeยฐ

*โข Description:* ยฐThe photos you replied to are memes.ยฐ

*๐ Command:* ยฐ.movieยฐ

*โข Description:* ยฐMovies เทเถฝ เทเทเทเทเถญเถป เถฝเถถเทเถฏเทเถธ.ยฐ

*๐ Command:* ยฐ.notesยฐ

*โข Description:* ยฐShow your notes.ยฐ

*๐ Command:* ยฐ.saveยฐ

*โข Description:* ยฐReply *.save* to a message or type *.save <your_note>*ยฐ

*๐ Command:* ยฐ.deleteNotesยฐ

*โข Description:* ยฐClear your all notes.ยฐ

*๐ Command:* ยฐ.ocrยฐ

*โข Description:* ยฐScan your picture into text.ยฐ

*๐ Command:* ยฐ.removebgยฐ

*โข Description:* ยฐRemoving background of image.ยฐ

*๐ Command:* ยฐ.reportยฐ

*โข Description:* ยฐReport someone in the group to admins.ยฐ

*๐ Command:* ยฐ.fsongยฐ

*โข Description:* ยฐUploading file type songs.ยฐ

*๐ Command:* ยฐ.songยฐ

*โข Description:* ยฐUploading mp3 type songs.ยฐ

*๐ Command:* ยฐ.videoยฐ

*โข Description:* ยฐDownloading videos from YouTubeยฐ

*๐ Command:* ยฐ.instaยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download instagram videos.ยฐ

*๐ Command:* ยฐ.fbยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download Facebook videos.ยฐ

*๐ Command:* ยฐ.trtยฐ

*โข Description:* ยฐIt translates with Google Translator. You must mention any message.ยฐ

*โจ๏ธ Example:* ยฐ.trt en si (From English to Sinhala)ยฐ

*๐ Command:* ยฐ.spdfยฐ

*โข Description:* ยฐConverts a Site into PDFยฐ

*๐ Command:* ยฐ.quoteยฐ

*โข Description:* ยฐIt Sends Random Quoteยฐ

*๐ Command:* ยฐ.currencyยฐ

*โข Description:* ยฐTo convert currencies.ยฐ

*๐ Command:* ยฐ.ttsยฐ

*โข Description:* ยฐIt translates words into voice messages.ยฐ

*๐ Command:* ยฐ.ytยฐ

*โข Description:* ยฐSearchng videos on YouTube.ยฐ

*๐ Command:* ยฐ.wikiยฐ

*โข Description:* ยฐSearch Wikipedia.ยฐ

*๐ Command:* ยฐ.imgยฐ

*โข Description:* ยฐDownloading google images.ยฐ

*๐ Command:* ยฐ.wameยฐ

*โข Description:* ยฐGet a link to the user chat.ยฐ

*๐ Command:* ยฐ.githubยฐ

*โข Description:* ยฐStalk github profiles of given username.

โจ๏ธ Example: .github TRexยฐ

*๐ Command:* ยฐ.tkยฐ

*โข Description:* ยฐStalk tiktok profile to a given username.

โจ๏ธ Example: .tK hiruwa66ยฐ

*๐ Command:* ยฐ.ssยฐ

*โข Description:* ยฐTake screenshot of given linksยฐ

*๐ Command:* ยฐ.modยฐ

*โข Description:* ยฐSearch modded apk in Moddroid site.ยฐ

*๐ Command:* ยฐ.spotiยฐ

*โข Description:* ยฐSearch songs from spotify.ยฐ

*๐ Command:* ยฐ.animesayยฐ

*โข Description:* ยฐ๐โข Write text on anime girl s paperยฐ

*๐ Command:* ยฐ.changesayยฐ

*โข Description:* ยฐWeite chaged my mind themed memesยฐ

*๐ Command:* ยฐ.trumpsayยฐ

*โข Description:* ยฐ๐โข Write text on Trump Twitterยฐ

*๐ Command:* ยฐ.spotifyยฐ

*โข Description:* ยฐDownload spotify songs.ยฐ

*๐ Command:* ยฐ.stickerยฐ

*โข Description:* ยฐMake stickers to your images. Reply to an image.ยฐ

*๐ Command:* ยฐ.sticvidยฐ

*โข Description:* ยฐ๐โข Converts animated stickers to video.ยฐ

*๐ Command:* ยฐ.aliveยฐ

*โข Description:* ยฐCheck bot online or notยฐ

*๐ Command:* ยฐ.versionยฐ

*โข Description:* ยฐCheck version of bot.ยฐ

*๐ Command:* ยฐ.tagadminยฐ

*โข Description:* ยฐTag all group admins.ยฐ

*๐ Command:* ยฐ.tblendยฐ

*โข Description:* ยฐApplies the selected TBlend effect to videos.ยฐ

*๐ Command:* ยฐ.carbonยฐ

*โข Description:* ยฐConvert text into Carbon effectยฐ

*๐ Command:* ยฐ.tgmยฐ

*โข Description:* ยฐit sends good morning text messageยฐ

*๐ Command:* ยฐ.tgnยฐ

*โข Description:* ยฐit sends good night text messageยฐ

*๐ Command:* ยฐ.ttpยฐ

*โข Description:* ยฐMake text imageยฐ

*๐ Command:* ยฐ.attpยฐ

*โข Description:* ยฐMake animated text stickers in Rainbow themeยฐ

*๐ Command:* ยฐ.unaudioยฐ

*โข Description:* ยฐConverts sound recording to an audio File.ยฐ

*๐ Command:* ยฐ.unvoiceยฐ

*โข Description:* ยฐConvert mp3 into a WA voice messageยฐ

*๐ Command:* ยฐ.vid2ยฐ

*โข Description:* ยฐYoutube Video Downloader V2 . เถบเท เถงเทเถบเทเถถเท เทเทเถฉเทเถบเท เถฉเทเทเถฑเทเถฝเทเถฉเท เถเทเถปเทเถธเถง เถฏเทเทเถฑ เถธเถ... .ยฐ

*๐ Command:* ยฐ.weatherยฐ

*โข Description:* ยฐCheck weather.ยฐ

*๐ Command:* ยฐ.speedtestยฐ

*โข Description:* ยฐCheck download and upload speedยฐ

*๐ Command:* ยฐ.pingยฐ

*โข Description:* ยฐYour ping.ยฐ

*๐ Command:* ยฐ.shortยฐ

*โข Description:* ยฐShorten link.ยฐ
`, rowId:"rowid3"},
        {title: '๐ฟ LOGO PACK 01 ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 1*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.phub*
โ โโโข ๐ Dec: *Send pornhub logo*
โ โโข ๐ Ex: *.phub T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.stone*
โ โโโข ๐ Dec: *Send stone like logo*
โ โโข ๐Ex: *.stone T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.glitch*
โ โโโข ๐ Dec: *Send glitch logo*
โ โโข ๐ Ex: *.glitch T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.space*
โ โโโข ๐ Dec: *Send space logo*
โ โโข ๐Ex: *.space T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.blood*
โ โโโข ๐ Dec: *Send blood hor logo*
โ โโข ๐Ex: *.blood T-REX*
โ
โ โโข ๐Cmd: *.blackpink*
โ โโโข ๐ Dec: *Send bpink logo*
โ โโข ๐Ex: *.blackpink T-REX*
โ
โ โโข ๐Cmd: *.wall*
โ โโโข ๐ Dec: *Send wall art logo*
โ โโข ๐Ex: *.wall T-Rex*
โ
โ โโข ๐Cmd: *.coding*
โ โโโข๐ Dec: *Send coding logo*
โ โโข ๐ Ex: *.coding T-REX*
โ
โ โโข ๐Cmd: .*.sand1*
โ โโโข ๐  Dec: *Send sand writting*
โ โโข ๐ Ex: *.sand1 T-REX*
โ
โ โโข ๐Cmd: *.sand2*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand2 T-REX
โ
โ โโข ๐Cmd: *.sand3*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand3 T-REX
โ
โ โโข ๐Cmd: *.beach*
โ โโโข ๐ Dec: *Send beach logo*
โ โโข ๐Ex: *.beach T-REX
โ
โ โโข ๐Cmd: *.gradient*
โ โโโข ๐  Dec: *Send logo*
โ โโข ๐ Ex: *.gradient T-REX*
โ
โ โโข ๐Cmd: *.luxury*
โ โโโข ๐  Dec: *Send luxury logo*
โ โโข ๐ Ex: *.luxury T-REX*
โ
โ โโข ๐Cmd: *.sky*
โ โโโข ๐  Dec: *Send sky logo*
โ โโข ๐ Ex: *.sky T-REX*
โ
โ โโข ๐Cmd: *.winter*
โ โโโข ๐  Dec: *Send winter logo*
โ โโข ๐ Ex: *.winter T-REX
โ
โ โโข ๐Cmd: *.christmas*
โ โโโข ๐  Dec: *Send xmas logo*
โ โโข ๐ Ex: *.christmas T-REX*
โ
โ โโข ๐Cmd: *.neon*
โ โโโข ๐  Dec: *Send neon logo*
โ โโข ๐ Ex: *.neon T-REX*
โ
โ โโข ๐Cmd: *.king*
โ โโโข ๐  Dec: *Send king logo*
โ โโข ๐ Ex: *.king T-REX*
โ
โ โโข ๐Cmd: *.glue*
โ โโโข ๐  Dec: *Send Glue logo*
โ โโข ๐ Ex: *.glue T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid4"},
        {title: '๐ฟ FF PACK ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ         โ๐โFF PACKโ๐โ
โ
โ โโข ๐.ff9       โดyour textโต
โsend fiee fire logo
โ โโข ๐.ff10      โดyour textโต
โsend free fire logo
โ โโข ๐.ff11      โดyour textโต
โsend free fire logo
โ โโข ๐.ff12      โดyour textโต
โsend free fire logo
โ โโข ๐.ff13      โดyour textโต
โsend free fire logo
โ โโข ๐.ff14      โดyour textโต
โsend free fire logo
โ โโข ๐.ff15      โดyour textโต
โsend free fire logo
โ โโข ๐.ff16      โดyour textโต
โsend free fire logo
โ โโข ๐.ff17      โดyour textโต
โsend free fire logo
โ โโข ๐.ff18       โดyour textโต
โsend free fire logo
โ โโข ๐.ff19       โดyour textโต
โsend free fire logo
โ โโข ๐.ff20       โดyour textโต
โsend free fire logo
โ โโข ๐.ff21       โดyour textโต
โsend free fire logo
โ โโข ๐.ff22       โดyour textโต
โsend free fire logo
โ โโข ๐.ff23       โดyour textโต
โsend free fire logo
โ โโข ๐.ff24       โดyour textโต
โsend free fire logo
โ โโข ๐.ff25       โดyour textโต
โsend free fire logo
โ โโข ๐.ff26       โดyour textโต
โsend free fire logo
โ โโข ๐.ff27       โดyour textโต
โsend free fire logo
โ โโข ๐.ff28       โดyour textโต
โsend free fire logo
โ โโข ๐.ff29       โดyour textโต
โsend free fire logo
โ โโข ๐.ff30       โดyour textโต
โsend free fire logo
โ โโข ๐.ff31       โดyour textโต
โsend free fire logo
โ โโข ๐.ff32       โดyour textโต
โsend free fire logo
โ โโข ๐.ff33       โดyour textโต
โsend free fire logo
โ โโข ๐.ff34       โดyour textโต
โsend free fire logo
โ โโข ๐.ff35       โดyour textโต
โsend free fire logo
โ โโข ๐.ff36       โดyour textโต
โsend free fire logo
โ โโข ๐.ff37       โดyour textโต
โsend free fire logo
โ โโข ๐.ff38       โดyour textโต
โsend free fire logo
โ โโข ๐.ff39       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff41       โดyour textโต
โsend free fire logo
โ โโข ๐.ff42       โดyour textโต
โsend free fire logo
โ โโข ๐.ff43       โดyour textโต
โsend free fire logo
โ โโข ๐.ff44       โดyour textโต
โsend free fire logo
โ โโข ๐.ff45       โดyour textโต
โsend free fire logo
โ โโข ๐.ff46       โดyour textโต
โsend free fire logo
โ โโข ๐.ff47       โดyour textโต
โsend free fire logo
โ โโข ๐.ff48       โดyour textโต
โsend free fire logo
โ โโข ๐.ff49       โดyour textโต
โsend free fire logo
โ โโข ๐.ff50       โดyour textโต
โsend free fire logo
โ โโข ๐.ff51       โดyour textโต
โsend free fire logo
โ โโข ๐.ff52       โดyour textโต
โsend free fire logo
โ โโข ๐.ff53       โดyour textโต
โsend free fire logo
โ โโข ๐.ff54       โดyour textโต
โsend free fire logo
โ โโข ๐.ff55       โดyour textโต
โsend free fire logo
โ โโข ๐.ff56       โดyour textโต
โsend free fire logo
โ
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid5"},
        {title: '๐ฟ LOGO PACK 02 ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 2*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.wel*
โ โโโข ๐ Dec: *Send welcome logo*
โ โโข ๐ Ex: *.wel T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.bye*
โ โโโข ๐ Dec: *Send bye logo*
โ โโข ๐Ex: *.bye T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.marvel*
โ โโโข ๐ Dec: *Send marve logo*
โ โโข ๐ Ex: *.marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.2marvel*
โ โโโข ๐ Dec: *Send marvel logo*
โ โโข ๐Ex: *.2marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.wolf*
โ โโโข ๐ Dec: *Send wolf logo*
โ โโข ๐Ex: *.wolf T-REX/HIRUWA*
โ
โ โโข ๐Cmd: *.lava*
โ โโโข ๐ Dec: *Send lava logo*
โ โโข ๐Ex: *.lava T-REX*
โ
โ โโข ๐Cmd: *.xmas*
โ โโโข ๐ Dec: *Send xmas logo*
โ โโข ๐Ex: *.xmas T-Rex*
โ
โ โโข ๐Cmd: *.round*
โ โโโข๐ Dec: *Send round logo*
โ โโข ๐ Ex: *.round { image url }*
โ
โ โโข ๐Cmd: .*.quot*
โ โโโข ๐  Dec: *Send quote logo*
โ โโข ๐ Ex: *.quot T-REX*
โ
โ โโข ๐Cmd: *.harta*
โ โโโข ๐ Dec: *Send harta logo*
โ โโข ๐Ex: *.harta T-REX
โ
โ โโข ๐Cmd: *.1917*
โ โโโข ๐ Dec: *Send 1917 logo*
โ โโข ๐Ex: *.1917 T-REX
โ
โ โโข ๐Cmd: *.minion*
โ โโโข ๐ Dec: *Send minion logo*
โ โโข ๐Ex: *.minion T-REX
โ
โ โโข ๐Cmd: *.holo*
โ โโโข ๐  Dec: *Send holo logo*
โ โโข ๐ Ex: *.holo T-REX*
โ
โ โโข ๐Cmd: *.metalp*
โ โโโข ๐  Dec: *Send metalp logo*
โ โโข ๐ Ex: *.metalp T-REX*
โ
โ โโข ๐Cmd: *.avengers*
โ โโโข ๐  Dec: *Send avengers logo*
โ โโข ๐ Ex: *.avengers T-REX*
โ
โ โโข ๐Cmd: *.halloween*
โ โโโข ๐  Dec: *Send halloween logo*
โ โโข ๐ Ex: *.halloween T-REX
โ
โ โโข ๐Cmd: *.horror*
โ โโโข ๐  Dec: *Send horror logo*
โ โโข ๐ Ex: *.horror T-REX*
โ
โ โโข ๐Cmd: *.glossyc*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyc T-REX*
โ
โ โโข ๐Cmd: *.deluxe*
โ โโโข ๐  Dec: *Send deluxe logo*
โ โโข ๐ Ex: *.deluxe T-REX*
โ
โ โโข ๐Cmd: *.glossyb*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyb T-REX*
โ
โ โโข ๐Cmd: *.joker*
โ โโโข ๐  Dec: *Send joker logo*
โ โโข ๐ Ex: *.joker T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid6"},
        {title: '๐ฟ ATTP PACK ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ        โ๐โATTP PACKโ๐โ
โ
โ โโข ๐.01attp      โดyour textโต
โsend fiee fire logo
โ โโข ๐.02attp      โดyour textโต
โsend Text logo
โ โโข ๐.03attp      โดyour textโต
โsend Text logo
โ โโข ๐.04attp      โดyour textโต
โsend Text logo
โ โโข ๐.05attp      โดyour textโต
โsend Text logo
โ โโข ๐.06attp      โดyour textโต
โsend Text logo
โ โโข ๐.07attp      โดyour textโต
โsend Text logo
โ โโข ๐.08attp      โดyour textโต
โsend Text logo
โ โโข ๐.09attp      โดyour textโต
โsend Text logo
โ โโข ๐.10attp       โดyour textโต
โsend Text logo
โ โโข ๐.11attp       โดyour textโต
โsend Text logo
โ โโข ๐.12attp       โดyour textโต
โsend Text logo
โ โโข ๐.13attp       โดyour textโต
โsend Text logo
โ โโข ๐.14attp       โดyour textโต
โsend Text logo
โ โโข ๐.15attp       โดyour textโต
โsend Text logo
โ โโข ๐.16attp       โดyour textโต
โsend Text logo
โ โโข ๐.17attp       โดyour textโต
โsend Text logo
โ โโข ๐.18attp       โดyour textโต
โsend Text logo
โ โโข ๐.19attp       โดyour textโต
โsend Text logo
โ โโข ๐.20attp       โดyour textโต
โsend Text logo
โ โโข ๐.21attp       โดyour textโต
โsend Text logo
โ โโข ๐.22attp       โดyour textโต
โsend Text logo
โ โโข ๐.23attp       โดyour textโต
โsend Text logo
โ โโข ๐.24attp       โดyour textโต
โsend Text logo
โ โโข ๐.25attp       โดyour textโต
โsend Text logo
โ โโข ๐.26attp       โดyour textโต
โsend Text logo
โ โโข ๐.27attp       โดyour textโต
โsend Text logo
โ โโข ๐.28attp       โดyour textโต
โsend Text logo
โ โโข ๐.29attp       โดyour textโต
โsend Text logo
โ โโข ๐.30attp       โดyour textโต
โsend Text logo
โ โโข ๐.31attp       โดyour textโต
โsend Text logo
โ โโข ๐.32attp       โดyour textโต
โsend Text logo
โ โโข ๐.33attp       โดyour textโต
โsend Text logo
โ โโข ๐.34attp       โดyour textโต
โsend Text logo
โ โโข ๐.35attp       โดyour textโต
โsend Text logo
โ โโข ๐.36attp       โดyour textโต
โsend Text logo
โ โโข ๐.37attp       โดyour textโต
โsend Text logo
โ โโข ๐.38attp       โดyour textโต
โsend Text logo
โ โโข ๐.39attp       โดyour textโต
โsend Text logo
โ โโข ๐.40attp       โดyour textโต
โsend Text logo
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ

`, rowId:"rowid20"},
        {title: '๐ฟ DOWNLOADER ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
`, rowId:"rowid9"},
        {title: '๐ฟ ABOUT T-REX BOT ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
๐ Developer : Hiruwa
๐ Bot             : T-REX V 3.0.0 
๐ Language : Sinhala & English
๐ Sponcer Team : PEARL TEAM
๐ Develop language : Node js
๐ Developer no : wa.me/+94788306130
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "๐ฟ T-REX Command Panel ๐ฟ", rows: rows}]
       
       const button = {
        buttonText: 'Click Meโท',
        description: "๐ฟ T-REX ALL COMMAND ๐ฟ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
        
    Trex.addrex({pattern: 'trex', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// T-REX LIST

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'

    const rows = [
        {title: '๐ฟ ALL MENU ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+Config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ BOT ๐ฟ๐
 โ        โโโโโโโโโโ
 โ
 โโท .trex
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Sticker ๐ฟ๐
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐๐ฟ Text To Img ๐ฟ๐
 โ
 โโท .rlpack
 โโท .attppack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Groups ๐ฟ๐
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ ONLINE STORE ๐ฟ๐
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ For owner ๐ฟ๐
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      T-REX BOT
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Search ๐ฟ๐
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ Media Editor๐ฟ๐
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Random ๐ฟ๐
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ Fun ๐ฟ๐
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐๐ฟ Other ๐ฟ๐
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
  
       ๐ฟ       Hiruwa        ๐ฟ
` , rowId:"rowid1"},
        {title: '๐ฟ ADVANCE MENU ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ

           โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ

โโโโโโโโโโโโโโโโโโโโโโโโโ

*๐ Command:* ยฐ.xmediaยฐ

*โข Description:* ยฐA plugin that have 25 media tools.ยฐ

*๐ Command:* ยฐ.adminยฐ

*โข Description:* ยฐTo get the admin command listยฐ

*๐ Command:* ยฐ.trexยฐ

*โข Description:*ยฐall commandsยฐ

*๐ Command* ยฐ.rlpackยฐ

*โข Description:* ยฐT-REX LOGO COLLECTION 01ยฐ

*๐ Command:* ยฐ.lovepackยฐ

*โข Description:* ยฐSend Love message to gf/bf.ยฐ

*๐ Command;* ยฐ.grpยฐ

*โข Description:* ยฐSend Groups listยฐ

*๐ Command:* ยฐ.warn1,.warn2,.warn3,.warn4

*โข Description:* ยฐSend Group Warm msg. Admin only Commandยฐ

*๐ Command:* ยฐ.rulesยฐ

*โข Description: * ยฐSend Group Rulesยฐ

*๐ Command:* ยฐ.rexยฐ

*โข Description:* ยฐChat with AI bot.ยฐ

*๐ Command:* ยฐ.switchยฐ

*โข Description:* ยฐTurn on/off chat bot.

โจ๏ธ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)ยฐ

*๐ Command:* ยฐ.animeยฐ

*โข Description:* ยฐSend Different type ANIME images . เทเทเทเทเถฏเทเถเทเถป เถเถฑเทเถธเท เถดเทเถฑเทเถญเทเถป เถเถถ เทเทเถญ เถเทเถบเท..ยฐ

*๐ Command:* ยฐ.antispamยฐ

*โข Description:* ยฐThis command for any emergency situation about any kind of WhatsApp SPAM in Groupยฐ

*๐ Command:* ยฐ.mp3ยฐ

*โข Description:* ยฐConvert mp4 into mp3.ยฐ

*๐ Command:* ยฐ.photoยฐ

*โข Description:* ยฐ๐โข Convert sticker into an image.ยฐ

*๐ Command:* ยฐ.ffmpegยฐ

*โข Description:* ยฐApply ffmpeg filter to a video

โจ๏ธ Example: .ffmpeg fade=in:0:30ยฐ

*๐ Command:* ยฐ.gnยฐ

*โข Description:* ยฐSend Gn wish with image.ยฐ

*๐ Command:* ยฐ.gmยฐ

*โข Description:* ยฐSend Gm wish with image.ยฐ

*๐ Command:* ยฐ.infoยฐ

*โข Description:* ยฐShow chat detailsยฐ

*๐ Command:* ยฐ.covidยฐ

*โข Description:* ยฐCheck information about Covid-19 of countries.

Example : .covid Sri Lankaยฐ

*๐ Command:* ยฐ.memeยฐ

*โข Description:* ยฐThe photos you replied to are memes.ยฐ

*๐ Command:* ยฐ.movieยฐ

*โข Description:* ยฐMovies เทเถฝ เทเทเทเทเถญเถป เถฝเถถเทเถฏเทเถธ.ยฐ

*๐ Command:* ยฐ.notesยฐ

*โข Description:* ยฐShow your notes.ยฐ

*๐ Command:* ยฐ.saveยฐ

*โข Description:* ยฐReply *.save* to a message or type *.save <your_note>*ยฐ

*๐ Command:* ยฐ.deleteNotesยฐ

*โข Description:* ยฐClear your all notes.ยฐ

*๐ Command:* ยฐ.ocrยฐ

*โข Description:* ยฐScan your picture into text.ยฐ

*๐ Command:* ยฐ.removebgยฐ

*โข Description:* ยฐRemoving background of image.ยฐ

*๐ Command:* ยฐ.reportยฐ

*โข Description:* ยฐReport someone in the group to admins.ยฐ

*๐ Command:* ยฐ.fsongยฐ

*โข Description:* ยฐUploading file type songs.ยฐ

*๐ Command:* ยฐ.songยฐ

*โข Description:* ยฐUploading mp3 type songs.ยฐ

*๐ Command:* ยฐ.videoยฐ

*โข Description:* ยฐDownloading videos from YouTubeยฐ

*๐ Command:* ยฐ.instaยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download instagram videos.ยฐ

*๐ Command:* ยฐ.fbยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download Facebook videos.ยฐ

*๐ Command:* ยฐ.trtยฐ

*โข Description:* ยฐIt translates with Google Translator. You must mention any message.ยฐ

*โจ๏ธ Example:* ยฐ.trt en si (From English to Sinhala)ยฐ

*๐ Command:* ยฐ.spdfยฐ

*โข Description:* ยฐConverts a Site into PDFยฐ

*๐ Command:* ยฐ.quoteยฐ

*โข Description:* ยฐIt Sends Random Quoteยฐ

*๐ Command:* ยฐ.currencyยฐ

*โข Description:* ยฐTo convert currencies.ยฐ

*๐ Command:* ยฐ.ttsยฐ

*โข Description:* ยฐIt translates words into voice messages.ยฐ

*๐ Command:* ยฐ.ytยฐ

*โข Description:* ยฐSearchng videos on YouTube.ยฐ

*๐ Command:* ยฐ.wikiยฐ

*โข Description:* ยฐSearch Wikipedia.ยฐ

*๐ Command:* ยฐ.imgยฐ

*โข Description:* ยฐDownloading google images.ยฐ

*๐ Command:* ยฐ.wameยฐ

*โข Description:* ยฐGet a link to the user chat.ยฐ

*๐ Command:* ยฐ.githubยฐ

*โข Description:* ยฐStalk github profiles of given username.

โจ๏ธ Example: .github TRexยฐ

*๐ Command:* ยฐ.tkยฐ

*โข Description:* ยฐStalk tiktok profile to a given username.

โจ๏ธ Example: .tK hiruwa66ยฐ

*๐ Command:* ยฐ.ssยฐ

*โข Description:* ยฐTake screenshot of given linksยฐ

*๐ Command:* ยฐ.modยฐ

*โข Description:* ยฐSearch modded apk in Moddroid site.ยฐ

*๐ Command:* ยฐ.spotiยฐ

*โข Description:* ยฐSearch songs from spotify.ยฐ

*๐ Command:* ยฐ.animesayยฐ

*โข Description:* ยฐ๐โข Write text on anime girl s paperยฐ

*๐ Command:* ยฐ.changesayยฐ

*โข Description:* ยฐWeite chaged my mind themed memesยฐ

*๐ Command:* ยฐ.trumpsayยฐ

*โข Description:* ยฐ๐โข Write text on Trump Twitterยฐ

*๐ Command:* ยฐ.spotifyยฐ

*โข Description:* ยฐDownload spotify songs.ยฐ

*๐ Command:* ยฐ.stickerยฐ

*โข Description:* ยฐMake stickers to your images. Reply to an image.ยฐ

*๐ Command:* ยฐ.sticvidยฐ

*โข Description:* ยฐ๐โข Converts animated stickers to video.ยฐ

*๐ Command:* ยฐ.aliveยฐ

*โข Description:* ยฐCheck bot online or notยฐ

*๐ Command:* ยฐ.versionยฐ

*โข Description:* ยฐCheck version of bot.ยฐ

*๐ Command:* ยฐ.tagadminยฐ

*โข Description:* ยฐTag all group admins.ยฐ

*๐ Command:* ยฐ.tblendยฐ

*โข Description:* ยฐApplies the selected TBlend effect to videos.ยฐ

*๐ Command:* ยฐ.carbonยฐ

*โข Description:* ยฐConvert text into Carbon effectยฐ

*๐ Command:* ยฐ.tgmยฐ

*โข Description:* ยฐit sends good morning text messageยฐ

*๐ Command:* ยฐ.tgnยฐ

*โข Description:* ยฐit sends good night text messageยฐ

*๐ Command:* ยฐ.ttpยฐ

*โข Description:* ยฐMake text imageยฐ

*๐ Command:* ยฐ.attpยฐ

*โข Description:* ยฐMake animated text stickers in Rainbow themeยฐ

*๐ Command:* ยฐ.unaudioยฐ

*โข Description:* ยฐConverts sound recording to an audio File.ยฐ

*๐ Command:* ยฐ.unvoiceยฐ

*โข Description:* ยฐConvert mp3 into a WA voice messageยฐ

*๐ Command:* ยฐ.vid2ยฐ

*โข Description:* ยฐYoutube Video Downloader V2 . เถบเท เถงเทเถบเทเถถเท เทเทเถฉเทเถบเท เถฉเทเทเถฑเทเถฝเทเถฉเท เถเทเถปเทเถธเถง เถฏเทเทเถฑ เถธเถ... .ยฐ

*๐ Command:* ยฐ.weatherยฐ

*โข Description:* ยฐCheck weather.ยฐ

*๐ Command:* ยฐ.speedtestยฐ

*โข Description:* ยฐCheck download and upload speedยฐ

*๐ Command:* ยฐ.pingยฐ

*โข Description:* ยฐYour ping.ยฐ

*๐ Command:* ยฐ.shortยฐ

*โข Description:* ยฐShorten link.ยฐ
`, rowId:"rowid3"},
        {title: '๐ฟ LOGO PACK 01 ๐ฟ', description:`โทโทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 1*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.phub*
โ โโโข ๐ Dec: *Send pornhub logo*
โ โโข ๐ Ex: *.phub T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.stone*
โ โโโข ๐ Dec: *Send stone like logo*
โ โโข ๐Ex: *.stone T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.glitch*
โ โโโข ๐ Dec: *Send glitch logo*
โ โโข ๐ Ex: *.glitch T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.space*
โ โโโข ๐ Dec: *Send space logo*
โ โโข ๐Ex: *.space T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.blood*
โ โโโข ๐ Dec: *Send blood hor logo*
โ โโข ๐Ex: *.blood T-REX*
โ
โ โโข ๐Cmd: *.blackpink*
โ โโโข ๐ Dec: *Send bpink logo*
โ โโข ๐Ex: *.blackpink T-REX*
โ
โ โโข ๐Cmd: *.wall*
โ โโโข ๐ Dec: *Send wall art logo*
โ โโข ๐Ex: *.wall T-Rex*
โ
โ โโข ๐Cmd: *.coding*
โ โโโข๐ Dec: *Send coding logo*
โ โโข ๐ Ex: *.coding T-REX*
โ
โ โโข ๐Cmd: .*.sand1*
โ โโโข ๐  Dec: *Send sand writting*
โ โโข ๐ Ex: *.sand1 T-REX*
โ
โ โโข ๐Cmd: *.sand2*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand2 T-REX
โ
โ โโข ๐Cmd: *.sand3*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand3 T-REX
โ
โ โโข ๐Cmd: *.beach*
โ โโโข ๐ Dec: *Send beach logo*
โ โโข ๐Ex: *.beach T-REX
โ
โ โโข ๐Cmd: *.gradient*
โ โโโข ๐  Dec: *Send logo*
โ โโข ๐ Ex: *.gradient T-REX*
โ
โ โโข ๐Cmd: *.luxury*
โ โโโข ๐  Dec: *Send luxury logo*
โ โโข ๐ Ex: *.luxury T-REX*
โ
โ โโข ๐Cmd: *.sky*
โ โโโข ๐  Dec: *Send sky logo*
โ โโข ๐ Ex: *.sky T-REX*
โ
โ โโข ๐Cmd: *.winter*
โ โโโข ๐  Dec: *Send winter logo*
โ โโข ๐ Ex: *.winter T-REX
โ
โ โโข ๐Cmd: *.christmas*
โ โโโข ๐  Dec: *Send xmas logo*
โ โโข ๐ Ex: *.christmas T-REX*
โ
โ โโข ๐Cmd: *.neon*
โ โโโข ๐  Dec: *Send neon logo*
โ โโข ๐ Ex: *.neon T-REX*
โ
โ โโข ๐Cmd: *.king*
โ โโโข ๐  Dec: *Send king logo*
โ โโข ๐ Ex: *.king T-REX*
โ
โ โโข ๐Cmd: *.glue*
โ โโโข ๐  Dec: *Send Glue logo*
โ โโข ๐ Ex: *.glue T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid4"},
        {title: '๐ฟ FF PACK ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ         โ๐โFF PACKโ๐โ
โ
โ โโข ๐.ff9       โดyour textโต
โsend fiee fire logo
โ โโข ๐.ff10      โดyour textโต
โsend free fire logo
โ โโข ๐.ff11      โดyour textโต
โsend free fire logo
โ โโข ๐.ff12      โดyour textโต
โsend free fire logo
โ โโข ๐.ff13      โดyour textโต
โsend free fire logo
โ โโข ๐.ff14      โดyour textโต
โsend free fire logo
โ โโข ๐.ff15      โดyour textโต
โsend free fire logo
โ โโข ๐.ff16      โดyour textโต
โsend free fire logo
โ โโข ๐.ff17      โดyour textโต
โsend free fire logo
โ โโข ๐.ff18       โดyour textโต
โsend free fire logo
โ โโข ๐.ff19       โดyour textโต
โsend free fire logo
โ โโข ๐.ff20       โดyour textโต
โsend free fire logo
โ โโข ๐.ff21       โดyour textโต
โsend free fire logo
โ โโข ๐.ff22       โดyour textโต
โsend free fire logo
โ โโข ๐.ff23       โดyour textโต
โsend free fire logo
โ โโข ๐.ff24       โดyour textโต
โsend free fire logo
โ โโข ๐.ff25       โดyour textโต
โsend free fire logo
โ โโข ๐.ff26       โดyour textโต
โsend free fire logo
โ โโข ๐.ff27       โดyour textโต
โsend free fire logo
โ โโข ๐.ff28       โดyour textโต
โsend free fire logo
โ โโข ๐.ff29       โดyour textโต
โsend free fire logo
โ โโข ๐.ff30       โดyour textโต
โsend free fire logo
โ โโข ๐.ff31       โดyour textโต
โsend free fire logo
โ โโข ๐.ff32       โดyour textโต
โsend free fire logo
โ โโข ๐.ff33       โดyour textโต
โsend free fire logo
โ โโข ๐.ff34       โดyour textโต
โsend free fire logo
โ โโข ๐.ff35       โดyour textโต
โsend free fire logo
โ โโข ๐.ff36       โดyour textโต
โsend free fire logo
โ โโข ๐.ff37       โดyour textโต
โsend free fire logo
โ โโข ๐.ff38       โดyour textโต
โsend free fire logo
โ โโข ๐.ff39       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff41       โดyour textโต
โsend free fire logo
โ โโข ๐.ff42       โดyour textโต
โsend free fire logo
โ โโข ๐.ff43       โดyour textโต
โsend free fire logo
โ โโข ๐.ff44       โดyour textโต
โsend free fire logo
โ โโข ๐.ff45       โดyour textโต
โsend free fire logo
โ โโข ๐.ff46       โดyour textโต
โsend free fire logo
โ โโข ๐.ff47       โดyour textโต
โsend free fire logo
โ โโข ๐.ff48       โดyour textโต
โsend free fire logo
โ โโข ๐.ff49       โดyour textโต
โsend free fire logo
โ โโข ๐.ff50       โดyour textโต
โsend free fire logo
โ โโข ๐.ff51       โดyour textโต
โsend free fire logo
โ โโข ๐.ff52       โดyour textโต
โsend free fire logo
โ โโข ๐.ff53       โดyour textโต
โsend free fire logo
โ โโข ๐.ff54       โดyour textโต
โsend free fire logo
โ โโข ๐.ff55       โดyour textโต
โsend free fire logo
โ โโข ๐.ff56       โดyour textโต
โsend free fire logo
โ
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid5"},
        {title: '๐ฟ LOGO PACK 02 ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 1*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.wel*
โ โโโข ๐ Dec: *Send welcome logo*
โ โโข ๐ Ex: *.wel T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.bye*
โ โโโข ๐ Dec: *Send bye logo*
โ โโข ๐Ex: *.bye T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.marvel*
โ โโโข ๐ Dec: *Send marve logo*
โ โโข ๐ Ex: *.marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.2marvel*
โ โโโข ๐ Dec: *Send marvel logo*
โ โโข ๐Ex: *.2marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.wolf*
โ โโโข ๐ Dec: *Send wolf logo*
โ โโข ๐Ex: *.wolf T-REX/HIRUWA*
โ
โ โโข ๐Cmd: *.lava*
โ โโโข ๐ Dec: *Send lava logo*
โ โโข ๐Ex: *.lava T-REX*
โ
โ โโข ๐Cmd: *.xmas*
โ โโโข ๐ Dec: *Send xmas logo*
โ โโข ๐Ex: *.xmas T-Rex*
โ
โ โโข ๐Cmd: *.round*
โ โโโข๐ Dec: *Send round logo*
โ โโข ๐ Ex: *.round { image url }*
โ
โ โโข ๐Cmd: .*.quot*
โ โโโข ๐  Dec: *Send quote logo*
โ โโข ๐ Ex: *.quot T-REX*
โ
โ โโข ๐Cmd: *.harta*
โ โโโข ๐ Dec: *Send harta logo*
โ โโข ๐Ex: *.harta T-REX
โ
โ โโข ๐Cmd: *.1917*
โ โโโข ๐ Dec: *Send 1917 logo*
โ โโข ๐Ex: *.1917 T-REX
โ
โ โโข ๐Cmd: *.minion*
โ โโโข ๐ Dec: *Send minion logo*
โ โโข ๐Ex: *.minion T-REX
โ
โ โโข ๐Cmd: *.holo*
โ โโโข ๐  Dec: *Send holo logo*
โ โโข ๐ Ex: *.holo T-REX*
โ
โ โโข ๐Cmd: *.metalp*
โ โโโข ๐  Dec: *Send metalp logo*
โ โโข ๐ Ex: *.metalp T-REX*
โ
โ โโข ๐Cmd: *.avengers*
โ โโโข ๐  Dec: *Send avengers logo*
โ โโข ๐ Ex: *.avengers T-REX*
โ
โ โโข ๐Cmd: *.halloween*
โ โโโข ๐  Dec: *Send halloween logo*
โ โโข ๐ Ex: *.halloween T-REX
โ
โ โโข ๐Cmd: *.horror*
โ โโโข ๐  Dec: *Send horror logo*
โ โโข ๐ Ex: *.horror T-REX*
โ
โ โโข ๐Cmd: *.glossyc*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyc T-REX*
โ
โ โโข ๐Cmd: *.deluxe*
โ โโโข ๐  Dec: *Send deluxe logo*
โ โโข ๐ Ex: *.deluxe T-REX*
โ
โ โโข ๐Cmd: *.glossyb*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyb T-REX*
โ
โ โโข ๐Cmd: *.joker*
โ โโโข ๐  Dec: *Send joker logo*
โ โโข ๐ Ex: *.joker T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid6"},
        {title: '๐ฟ ATTP PACK ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ        โ๐โATTP PACKโ๐โ
โ
โ โโข ๐.01attp      โดyour textโต
โsend fiee fire logo
โ โโข ๐.02attp      โดyour textโต
โsend Text logo
โ โโข ๐.03attp      โดyour textโต
โsend Text logo
โ โโข ๐.04attp      โดyour textโต
โsend Text logo
โ โโข ๐.05attp      โดyour textโต
โsend Text logo
โ โโข ๐.06attp      โดyour textโต
โsend Text logo
โ โโข ๐.07attp      โดyour textโต
โsend Text logo
โ โโข ๐.08attp      โดyour textโต
โsend Text logo
โ โโข ๐.09attp      โดyour textโต
โsend Text logo
โ โโข ๐.10attp       โดyour textโต
โsend Text logo
โ โโข ๐.11attp       โดyour textโต
โsend Text logo
โ โโข ๐.12attp       โดyour textโต
โsend Text logo
โ โโข ๐.13attp       โดyour textโต
โsend Text logo
โ โโข ๐.14attp       โดyour textโต
โsend Text logo
โ โโข ๐.15attp       โดyour textโต
โsend Text logo
โ โโข ๐.16attp       โดyour textโต
โsend Text logo
โ โโข ๐.17attp       โดyour textโต
โsend Text logo
โ โโข ๐.18attp       โดyour textโต
โsend Text logo
โ โโข ๐.19attp       โดyour textโต
โsend Text logo
โ โโข ๐.20attp       โดyour textโต
โsend Text logo
โ โโข ๐.21attp       โดyour textโต
โsend Text logo
โ โโข ๐.22attp       โดyour textโต
โsend Text logo
โ โโข ๐.23attp       โดyour textโต
โsend Text logo
โ โโข ๐.24attp       โดyour textโต
โsend Text logo
โ โโข ๐.25attp       โดyour textโต
โsend Text logo
โ โโข ๐.26attp       โดyour textโต
โsend Text logo
โ โโข ๐.27attp       โดyour textโต
โsend Text logo
โ โโข ๐.28attp       โดyour textโต
โsend Text logo
โ โโข ๐.29attp       โดyour textโต
โsend Text logo
โ โโข ๐.30attp       โดyour textโต
โsend Text logo
โ โโข ๐.31attp       โดyour textโต
โsend Text logo
โ โโข ๐.32attp       โดyour textโต
โsend Text logo
โ โโข ๐.33attp       โดyour textโต
โsend Text logo
โ โโข ๐.34attp       โดyour textโต
โsend Text logo
โ โโข ๐.35attp       โดyour textโต
โsend Text logo
โ โโข ๐.36attp       โดyour textโต
โsend Text logo
โ โโข ๐.37attp       โดyour textโต
โsend Text logo
โ โโข ๐.38attp       โดyour textโต
โsend Text logo
โ โโข ๐.39attp       โดyour textโต
โsend Text logo
โ โโข ๐.40attp       โดyour textโต
โsend Text logo
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ

`, rowId:"rowid20"},
        {title: '๐ฟ DOWNLOADER ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
`, rowId:"rowid8"},
        {title: '๐ฟ ABOUT T-REX BOT ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
๐ Developer : Hiruwa
๐ Bot             : T-REX V 3.0.0 
๐ Language : Sinhala & English
๐ Sponcer Team : PEARL TEAM
๐ Develop language : Node js
๐ Developer no : wa.me/+94788306130
`, rowId:"rowid9"},
        {title: '๐ฟ ADMIN PANEL ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ\n\n๐ COMMAND: *.ban*\nโน๏ธ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\n๐ COMMAND: *.add*\nโน๏ธ DESCRIPTION: Adds someone to the group.\n\n๐ COMMAND: *.mute*\nโน๏ธ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\n๐ COMMAND: *.unmute*\nโน๏ธ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\n๐ COMMAND: *.clear*\nโน๏ธ DESCRIPTION: Clearing chat.\n\n๐ COMMAND: *.name*\nโน๏ธ DESCRIPTION: Change group name. \n\n๐ COMMAND: *.promote*\nโน๏ธ DESCRIPTION: Promoting members to admin.\n\n๐ COMMAND: *.demote*\nโน๏ธ DESCRIPTION: Demoting admins.\n\n๐ COMMAND: *.myplugin*\nโน๏ธ DESCRIPTION: To view the current plugin list from โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ.\n\n๐ COMMAND: *.plug*\nโน๏ธ DESCRIPTION: Install external plugins.\n\n๐ COMMAND: *.unplug*\nโน๏ธ DESCRIPTION: Removes the plugin.\n\n๐ COMMAND: *.invite*\nโน๏ธ DESCRIPTION: Provides group invitation link.\n\n๐ COMMAND: *.afk*\nโน๏ธ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\n๐ COMMAND: *.restart*\nโข DESCRIPTION: Restart the bot.\n\n๐ COMMAND: *.shutdown*\nโข DESCRIPTION: Shutdown the Bot.\n\n๐ COMMAND: *.setvar*\nโข DESCRIPTION: Change heroku config vars.\n\n๐ COMMAND: *.getvar*\nโข DESCRIPTION: Get heroku config var.\n\n๐ COMMAND: *.speedtest*\nโข DESCRIPTION:Check download and upload speed.\n\n๐ COMMAND: *.filter*\nโน๏ธ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\n๐ COMMAND: *.stop*\nโน๏ธ DESCRIPTION: Stops the filters you added earlier.\n\n๐ COMMAND: *.welcome*\nโน๏ธ DESCRIPTION: It sets the welcome message.\n\n๐ COMMAND: *.goodbye*\nโน๏ธ DESCRIPTION: Sets the goodbye  message.\n\n๐ COMMAND: *.kickme*\nโน๏ธ DESCRIPTION: It removes the bot from the group that provided the command.\n\n๐ COMMAND: *.pp*\nโน๏ธ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\n๐ COMMAND: *.block*\nโน๏ธ DESCRIPTION: Block tagged user.\n\n๐ COMMAND: *.unblock*\nโน๏ธ DESCRIPTION: Unblock tagged user.\n\n๐ COMMAND: *.jid*\nโน๏ธ DESCRIPTION: Giving user JID.\n\n๐ COMMAND *.tagall*\nโน๏ธ DESCRIPTION: Tag everyone in group.\n\n๐ COMMAND: *.up*\nโน๏ธ DESCRIPTION: Check for updates.\n\n๐ COMMAND: *.uptrex*\nโน๏ธ DESCRIPTION: To update your bot.\n\n๐ COMMAND: *.dyno*\nโน๏ธ DESCRIPTION: Showing heroku dyno hours.\n\n๐ COMMAND: *.sysd*\nโน๏ธ DESCRIPTION: Show system properties.\n\n๐ COMMAND: *.scam*\nโน๏ธ DESCRIPTION: Scam actions for 5min.\n\n๐ COMMAND: *.antilink*\nโน๏ธ DESCRIPTION: Anti link on Ex: .antilink on/off\n\n๐ COMMAND: *.antibad*\nโน๏ธ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\n๐ COMMAND: *.chatbot*\nโน๏ธDESCRIPTION: Auto chat on Ex: .chatbot on/off\n๐ฟ Command: .voice on/off\nโท Description: Activate and deactivate voice chat\n\n๐ฟ Command: .public โท Description: set bot as public\n\n ๐ฟ Command: .private\nโท Description: Set your bot as private\n\n*โ ๏ธ The above command only works for Admin, Bot and SUDO numbers.\n\nโฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ*
`, rowId:"rowid10"},
        {title: '๐ฟ Work Type PUBLIC ๐ฟ', description: "โทโทโทโทโทโท\n\n\n Type .public to public mode โท", rowId:"rowid9"},
        {title: '๐ฟ Work Type PRIVATE ๐ฟ', description:"โทโทโทโทโทโท\n\n\n Type .private to private mode โท", rowId:"rowid2"}
       ]
       
       const sections = [{title: "๐ฟ T-REX Command Panel ๐ฟ", rows: rows}]
       
       const button = {
        buttonText: 'Click Meโท',
        description: "๐ฟ T-REX COMMAND PANEL ๐ฟ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
        
}
}

else if (Config.WORKTYPE == 'private') {
        
if (Config.BTN == 'btn') {
        
Trex.addrex({pattern: 'trex', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// T-REX LIST

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'

    const rows = [
        {title: '๐ฟ ALL MENU ๐ฟ', description: `โทโทโทโทโท~\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+Config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ BOT ๐ฟ๐
 โ        โโโโโโโโโโ
 โ
 โโท .trex
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Sticker ๐ฟ๐
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐๐ฟ Text To Img ๐ฟ๐
 โ
 โโท .rlpack
 โโท .attppack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .down { status down }
 โโท .vid2 { vid link }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐๐ฟ Groups ๐ฟ๐
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ ONLINE STORE ๐ฟ๐
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ For owner ๐ฟ๐
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      T-REX BOT
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Search ๐ฟ๐
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐๐ฟ Media Editor๐ฟ๐
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐๐ฟ Random ๐ฟ๐
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐๐ฟ Fun ๐ฟ๐
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐๐ฟ Other ๐ฟ๐
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ
  
       ๐ฟ       Hiruwa        ๐ฟ
` , rowId:"rowid1"},
        {title: '๐ฟ ADVANCE MENU ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ

           โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ

โโโโโโโโโโโโโโโโโโโโโโโโโ

*๐ Command:* ยฐ.xmediaยฐ

*โข Description:* ยฐA plugin that have 25 media tools.ยฐ

*๐ Command:* ยฐ.adminยฐ

*โข Description:* ยฐTo get the admin command listยฐ

*๐ Command:* ยฐ.trexยฐ

*โข Description:*ยฐall commandsยฐ

*๐ Command* ยฐ.rlpackยฐ

*โข Description:* ยฐT-REX LOGO COLLECTION 01ยฐ

*๐ Command:* ยฐ.lovepackยฐ

*โข Description:* ยฐSend Love message to gf/bf.ยฐ

*๐ Command;* ยฐ.grpยฐ

*โข Description:* ยฐSend Groups listยฐ

*๐ Command:* ยฐ.warn1,.warn2,.warn3,.warn4

*โข Description:* ยฐSend Group Warm msg. Admin only Commandยฐ

*๐ Command:* ยฐ.rulesยฐ

*โข Description: * ยฐSend Group Rulesยฐ

*๐ Command:* ยฐ.rexยฐ

*โข Description:* ยฐChat with AI bot.ยฐ

*๐ Command:* ยฐ.switchยฐ

*โข Description:* ยฐTurn on/off chat bot.

โจ๏ธ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)ยฐ

*๐ Command:* ยฐ.animeยฐ

*โข Description:* ยฐSend Different type ANIME images . เทเทเทเทเถฏเทเถเทเถป เถเถฑเทเถธเท เถดเทเถฑเทเถญเทเถป เถเถถ เทเทเถญ เถเทเถบเท..ยฐ

*๐ Command:* ยฐ.antispamยฐ

*โข Description:* ยฐThis command for any emergency situation about any kind of WhatsApp SPAM in Groupยฐ

*๐ Command:* ยฐ.mp3ยฐ

*โข Description:* ยฐConvert mp4 into mp3.ยฐ

*๐ Command:* ยฐ.photoยฐ

*โข Description:* ยฐ๐โข Convert sticker into an image.ยฐ

*๐ Command:* ยฐ.ffmpegยฐ

*โข Description:* ยฐApply ffmpeg filter to a video

โจ๏ธ Example: .ffmpeg fade=in:0:30ยฐ

*๐ Command:* ยฐ.gnยฐ

*โข Description:* ยฐSend Gn wish with image.ยฐ

*๐ Command:* ยฐ.gmยฐ

*โข Description:* ยฐSend Gm wish with image.ยฐ

*๐ Command:* ยฐ.infoยฐ

*โข Description:* ยฐShow chat detailsยฐ

*๐ Command:* ยฐ.covidยฐ

*โข Description:* ยฐCheck information about Covid-19 of countries.

Example : .covid Sri Lankaยฐ

*๐ Command:* ยฐ.memeยฐ

*โข Description:* ยฐThe photos you replied to are memes.ยฐ

*๐ Command:* ยฐ.movieยฐ

*โข Description:* ยฐMovies เทเถฝ เทเทเทเทเถญเถป เถฝเถถเทเถฏเทเถธ.ยฐ

*๐ Command:* ยฐ.notesยฐ

*โข Description:* ยฐShow your notes.ยฐ

*๐ Command:* ยฐ.saveยฐ

*โข Description:* ยฐReply *.save* to a message or type *.save <your_note>*ยฐ

*๐ Command:* ยฐ.deleteNotesยฐ

*โข Description:* ยฐClear your all notes.ยฐ

*๐ Command:* ยฐ.ocrยฐ

*โข Description:* ยฐScan your picture into text.ยฐ

*๐ Command:* ยฐ.removebgยฐ

*โข Description:* ยฐRemoving background of image.ยฐ

*๐ Command:* ยฐ.reportยฐ

*โข Description:* ยฐReport someone in the group to admins.ยฐ

*๐ Command:* ยฐ.fsongยฐ

*โข Description:* ยฐUploading file type songs.ยฐ

*๐ Command:* ยฐ.songยฐ

*โข Description:* ยฐUploading mp3 type songs.ยฐ

*๐ Command:* ยฐ.videoยฐ

*โข Description:* ยฐDownloading videos from YouTubeยฐ

*๐ Command:* ยฐ.instaยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download instagram videos.ยฐ

*?? Command:* ยฐ.fbยฐ

*โข Description:* ยฐ๐โข โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ Download Facebook videos.ยฐ

*๐ Command:* ยฐ.trtยฐ

*โข Description:* ยฐIt translates with Google Translator. You must mention any message.ยฐ

*โจ๏ธ Example:* ยฐ.trt en si (From English to Sinhala)ยฐ

*๐ Command:* ยฐ.spdfยฐ

*โข Description:* ยฐConverts a Site into PDFยฐ

*๐ Command:* ยฐ.quoteยฐ

*โข Description:* ยฐIt Sends Random Quoteยฐ

*๐ Command:* ยฐ.currencyยฐ

*โข Description:* ยฐTo convert currencies.ยฐ

*๐ Command:* ยฐ.ttsยฐ

*โข Description:* ยฐIt translates words into voice messages.ยฐ

*๐ Command:* ยฐ.ytยฐ

*โข Description:* ยฐSearchng videos on YouTube.ยฐ

*๐ Command:* ยฐ.wikiยฐ

*โข Description:* ยฐSearch Wikipedia.ยฐ

*๐ Command:* ยฐ.imgยฐ

*โข Description:* ยฐDownloading google images.ยฐ

*๐ Command:* ยฐ.wameยฐ

*โข Description:* ยฐGet a link to the user chat.ยฐ

*๐ Command:* ยฐ.githubยฐ

*โข Description:* ยฐStalk github profiles of given username.

โจ๏ธ Example: .github TRexยฐ

*๐ Command:* ยฐ.tkยฐ

*โข Description:* ยฐStalk tiktok profile to a given username.

โจ๏ธ Example: .tK hiruwa66ยฐ

*๐ Command:* ยฐ.ssยฐ

*โข Description:* ยฐTake screenshot of given linksยฐ

*๐ Command:* ยฐ.modยฐ

*โข Description:* ยฐSearch modded apk in Moddroid site.ยฐ

*๐ Command:* ยฐ.spotiยฐ

*โข Description:* ยฐSearch songs from spotify.ยฐ

*๐ Command:* ยฐ.animesayยฐ

*โข Description:* ยฐ๐โข Write text on anime girl s paperยฐ

*๐ Command:* ยฐ.changesayยฐ

*โข Description:* ยฐWeite chaged my mind themed memesยฐ

*๐ Command:* ยฐ.trumpsayยฐ

*โข Description:* ยฐ๐โข Write text on Trump Twitterยฐ

*๐ Command:* ยฐ.spotifyยฐ

*โข Description:* ยฐDownload spotify songs.ยฐ

*๐ Command:* ยฐ.stickerยฐ

*โข Description:* ยฐMake stickers to your images. Reply to an image.ยฐ

*๐ Command:* ยฐ.sticvidยฐ

*โข Description:* ยฐ๐โข Converts animated stickers to video.ยฐ

*๐ Command:* ยฐ.aliveยฐ

*โข Description:* ยฐCheck bot online or notยฐ

*๐ Command:* ยฐ.versionยฐ

*โข Description:* ยฐCheck version of bot.ยฐ

*๐ Command:* ยฐ.tagadminยฐ

*โข Description:* ยฐTag all group admins.ยฐ

*๐ Command:* ยฐ.tblendยฐ

*โข Description:* ยฐApplies the selected TBlend effect to videos.ยฐ

*๐ Command:* ยฐ.carbonยฐ

*โข Description:* ยฐConvert text into Carbon effectยฐ

*๐ Command:* ยฐ.tgmยฐ

*โข Description:* ยฐit sends good morning text messageยฐ

*๐ Command:* ยฐ.tgnยฐ

*โข Description:* ยฐit sends good night text messageยฐ

*๐ Command:* ยฐ.ttpยฐ

*โข Description:* ยฐMake text imageยฐ

*๐ Command:* ยฐ.attpยฐ

*โข Description:* ยฐMake animated text stickers in Rainbow themeยฐ

*๐ Command:* ยฐ.unaudioยฐ

*โข Description:* ยฐConverts sound recording to an audio File.ยฐ

*๐ Command:* ยฐ.unvoiceยฐ

*โข Description:* ยฐConvert mp3 into a WA voice messageยฐ

*๐ Command:* ยฐ.vid2ยฐ

*โข Description:* ยฐYoutube Video Downloader V2 . เถบเท เถงเทเถบเทเถถเท เทเทเถฉเทเถบเท เถฉเทเทเถฑเทเถฝเทเถฉเท เถเทเถปเทเถธเถง เถฏเทเทเถฑ เถธเถ... .ยฐ

*๐ Command:* ยฐ.weatherยฐ

*โข Description:* ยฐCheck weather.ยฐ

*๐ Command:* ยฐ.speedtestยฐ

*โข Description:* ยฐCheck download and upload speedยฐ

*๐ Command:* ยฐ.pingยฐ

*โข Description:* ยฐYour ping.ยฐ

*๐ Command:* ยฐ.shortยฐ

*โข Description:* ยฐShorten link.ยฐ
`, rowId:"rowid3"},
        {title: '๐ฟ LOGO PACK 01 ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 1*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.phub*
โ โโโข ๐ Dec: *Send pornhub logo*
โ โโข ๐ Ex: *.phub T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.stone*
โ โโโข ๐ Dec: *Send stone like logo*
โ โโข ๐Ex: *.stone T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.glitch*
โ โโโข ๐ Dec: *Send glitch logo*
โ โโข ๐ Ex: *.glitch T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.space*
โ โโโข ๐ Dec: *Send space logo*
โ โโข ๐Ex: *.space T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.blood*
โ โโโข ๐ Dec: *Send blood hor logo*
โ โโข ๐Ex: *.blood T-REX*
โ
โ โโข ๐Cmd: *.blackpink*
โ โโโข ๐ Dec: *Send bpink logo*
โ โโข ๐Ex: *.blackpink T-REX*
โ
โ โโข ๐Cmd: *.wall*
โ โโโข ๐ Dec: *Send wall art logo*
โ โโข ๐Ex: *.wall T-Rex*
โ
โ โโข ๐Cmd: *.coding*
โ โโโข๐ Dec: *Send coding logo*
โ โโข ๐ Ex: *.coding T-REX*
โ
โ โโข ๐Cmd: .*.sand1*
โ โโโข ๐  Dec: *Send sand writting*
โ โโข ๐ Ex: *.sand1 T-REX*
โ
โ โโข ๐Cmd: *.sand2*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand2 T-REX
โ
โ โโข ๐Cmd: *.sand3*
โ โโโข ๐ Dec: *Send sand writting*
โ โโข ๐Ex: *.sand3 T-REX
โ
โ โโข ๐Cmd: *.beach*
โ โโโข ๐ Dec: *Send beach logo*
โ โโข ๐Ex: *.beach T-REX
โ
โ โโข ๐Cmd: *.gradient*
โ โโโข ๐  Dec: *Send logo*
โ โโข ๐ Ex: *.gradient T-REX*
โ
โ โโข ๐Cmd: *.luxury*
โ โโโข ๐  Dec: *Send luxury logo*
โ โโข ๐ Ex: *.luxury T-REX*
โ
โ โโข ๐Cmd: *.sky*
โ โโโข ๐  Dec: *Send sky logo*
โ โโข ๐ Ex: *.sky T-REX*
โ
โ โโข ๐Cmd: *.winter*
โ โโโข ๐  Dec: *Send winter logo*
โ โโข ๐ Ex: *.winter T-REX
โ
โ โโข ๐Cmd: *.christmas*
โ โโโข ๐  Dec: *Send xmas logo*
โ โโข ๐ Ex: *.christmas T-REX*
โ
โ โโข ๐Cmd: *.neon*
โ โโโข ๐  Dec: *Send neon logo*
โ โโข ๐ Ex: *.neon T-REX*
โ
โ โโข ๐Cmd: *.king*
โ โโโข ๐  Dec: *Send king logo*
โ โโข ๐ Ex: *.king T-REX*
โ
โ โโข ๐Cmd: *.glue*
โ โโโข ๐  Dec: *Send Glue logo*
โ โโข ๐ Ex: *.glue T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid4"},
        {title: '๐ฟ FF PACK ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ         โ๐โFF PACKโ๐โ
โ
โ โโข ๐.ff9       โดyour textโต
โsend fiee fire logo
โ โโข ๐.ff10      โดyour textโต
โsend free fire logo
โ โโข ๐.ff11      โดyour textโต
โsend free fire logo
โ โโข ๐.ff12      โดyour textโต
โsend free fire logo
โ โโข ๐.ff13      โดyour textโต
โsend free fire logo
โ โโข ๐.ff14      โดyour textโต
โsend free fire logo
โ โโข ๐.ff15      โดyour textโต
โsend free fire logo
โ โโข ๐.ff16      โดyour textโต
โsend free fire logo
โ โโข ๐.ff17      โดyour textโต
โsend free fire logo
โ โโข ๐.ff18       โดyour textโต
โsend free fire logo
โ โโข ๐.ff19       โดyour textโต
โsend free fire logo
โ โโข ๐.ff20       โดyour textโต
โsend free fire logo
โ โโข ๐.ff21       โดyour textโต
โsend free fire logo
โ โโข ๐.ff22       โดyour textโต
โsend free fire logo
โ โโข ๐.ff23       โดyour textโต
โsend free fire logo
โ โโข ๐.ff24       โดyour textโต
โsend free fire logo
โ โโข ๐.ff25       โดyour textโต
โsend free fire logo
โ โโข ๐.ff26       โดyour textโต
โsend free fire logo
โ โโข ๐.ff27       โดyour textโต
โsend free fire logo
โ โโข ๐.ff28       โดyour textโต
โsend free fire logo
โ โโข ๐.ff29       โดyour textโต
โsend free fire logo
โ โโข ๐.ff30       โดyour textโต
โsend free fire logo
โ โโข ๐.ff31       โดyour textโต
โsend free fire logo
โ โโข ๐.ff32       โดyour textโต
โsend free fire logo
โ โโข ๐.ff33       โดyour textโต
โsend free fire logo
โ โโข ๐.ff34       โดyour textโต
โsend free fire logo
โ โโข ๐.ff35       โดyour textโต
โsend free fire logo
โ โโข ๐.ff36       โดyour textโต
โsend free fire logo
โ โโข ๐.ff37       โดyour textโต
โsend free fire logo
โ โโข ๐.ff38       โดyour textโต
โsend free fire logo
โ โโข ๐.ff39       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐.ff41       โดyour textโต
โsend free fire logo
โ โโข ๐.ff42       โดyour textโต
โsend free fire logo
โ โโข ๐.ff43       โดyour textโต
โsend free fire logo
โ โโข ๐.ff44       โดyour textโต
โsend free fire logo
โ โโข ๐.ff45       โดyour textโต
โsend free fire logo
โ โโข ๐.ff46       โดyour textโต
โsend free fire logo
โ โโข ๐.ff47       โดyour textโต
โsend free fire logo
โ โโข ๐.ff48       โดyour textโต
โsend free fire logo
โ โโข ๐.ff49       โดyour textโต
โsend free fire logo
โ โโข ๐.ff50       โดyour textโต
โsend free fire logo
โ โโข ๐.ff51       โดyour textโต
โsend free fire logo
โ โโข ๐.ff52       โดyour textโต
โsend free fire logo
โ โโข ๐.ff53       โดyour textโต
โsend free fire logo
โ โโข ๐.ff54       โดyour textโต
โsend free fire logo
โ โโข ๐.ff55       โดyour textโต
โsend free fire logo
โ โโข ๐.ff56       โดyour textโต
โsend free fire logo
โ
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid5"},
        {title: '๐ฟ LOGO PACK 02 ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โโ ๐*REX LOGO PACK 1*๐ โ
โ โโโโโโโโโโโโโโโโโโโโโโ
โ
โ   `+Config.CAPTION+`
โ
โ โโข ๐Cmd: *.wel*
โ โโโข ๐ Dec: *Send welcome logo*
โ โโข ๐ Ex: *.wel T-Rex/Hiruwa*
โ
โ โโข ๐ Cmd: *.bye*
โ โโโข ๐ Dec: *Send bye logo*
โ โโข ๐Ex: *.bye T-REX/Hiruwa*
โ
โ โโข ๐Cmd: *.marvel*
โ โโโข ๐ Dec: *Send marve logo*
โ โโข ๐ Ex: *.marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.2marvel*
โ โโโข ๐ Dec: *Send marvel logo*
โ โโข ๐Ex: *.2marvel T-Rex/Hiruwa*
โ
โ โโข ๐Cmd: *.wolf*
โ โโโข ๐ Dec: *Send wolf logo*
โ โโข ๐Ex: *.wolf T-REX/HIRUWA*
โ
โ โโข ๐Cmd: *.lava*
โ โโโข ๐ Dec: *Send lava logo*
โ โโข ๐Ex: *.lava T-REX*
โ
โ โโข ๐Cmd: *.xmas*
โ โโโข ๐ Dec: *Send xmas logo*
โ โโข ๐Ex: *.xmas T-Rex*
โ
โ โโข ๐Cmd: *.round*
โ โโโข๐ Dec: *Send round logo*
โ โโข ๐ Ex: *.round { image url }*
โ
โ โโข ๐Cmd: .*.quot*
โ โโโข ๐  Dec: *Send quote logo*
โ โโข ๐ Ex: *.quot T-REX*
โ
โ โโข ๐Cmd: *.harta*
โ โโโข ๐ Dec: *Send harta logo*
โ โโข ๐Ex: *.harta T-REX
โ
โ โโข ๐Cmd: *.1917*
โ โโโข ๐ Dec: *Send 1917 logo*
โ โโข ๐Ex: *.1917 T-REX
โ
โ โโข ๐Cmd: *.minion*
โ โโโข ๐ Dec: *Send minion logo*
โ โโข ๐Ex: *.minion T-REX
โ
โ โโข ๐Cmd: *.holo*
โ โโโข ๐  Dec: *Send holo logo*
โ โโข ๐ Ex: *.holo T-REX*
โ
โ โโข ๐Cmd: *.metalp*
โ โโโข ๐  Dec: *Send metalp logo*
โ โโข ๐ Ex: *.metalp T-REX*
โ
โ โโข ๐Cmd: *.avengers*
โ โโโข ๐  Dec: *Send avengers logo*
โ โโข ๐ Ex: *.avengers T-REX*
โ
โ โโข ๐Cmd: *.halloween*
โ โโโข ๐  Dec: *Send halloween logo*
โ โโข ๐ Ex: *.halloween T-REX
โ
โ โโข ๐Cmd: *.horror*
โ โโโข ๐  Dec: *Send horror logo*
โ โโข ๐ Ex: *.horror T-REX*
โ
โ โโข ๐Cmd: *.glossyc*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyc T-REX*
โ
โ โโข ๐Cmd: *.deluxe*
โ โโโข ๐  Dec: *Send deluxe logo*
โ โโข ๐ Ex: *.deluxe T-REX*
โ
โ โโข ๐Cmd: *.glossyb*
โ โโโข ๐  Dec: *Send glossy logo*
โ โโข ๐ Ex: *.glossyb T-REX*
โ
โ โโข ๐Cmd: *.joker*
โ โโโข ๐  Dec: *Send joker logo*
โ โโข ๐ Ex: *.joker T-REX*
โ
โ      โโ๐ T-REX BOT ๐โโ
โ        โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid6"},
        {title: '๐ฟ ATTP PACK ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ      โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โ        โ๐โATTP PACKโ๐โ
โ
โ โโข ๐.01attp      โดyour textโต
โsend fiee fire logo
โ โโข ๐.02attp      โดyour textโต
โsend Text logo
โ โโข ๐.03attp      โดyour textโต
โsend Text logo
โ โโข ๐.04attp      โดyour textโต
โsend Text logo
โ โโข ๐.05attp      โดyour textโต
โsend Text logo
โ โโข ๐.06attp      โดyour textโต
โsend Text logo
โ โโข ๐.07attp      โดyour textโต
โsend Text logo
โ โโข ๐.08attp      โดyour textโต
โsend Text logo
โ โโข ๐.09attp      โดyour textโต
โsend Text logo
โ โโข ๐.10attp       โดyour textโต
โsend Text logo
โ โโข ๐.11attp       โดyour textโต
โsend Text logo
โ โโข ๐.12attp       โดyour textโต
โsend Text logo
โ โโข ๐.13attp       โดyour textโต
โsend Text logo
โ โโข ๐.14attp       โดyour textโต
โsend Text logo
โ โโข ๐.15attp       โดyour textโต
โsend Text logo
โ โโข ๐.16attp       โดyour textโต
โsend Text logo
โ โโข ๐.17attp       โดyour textโต
โsend Text logo
โ โโข ๐.18attp       โดyour textโต
โsend Text logo
โ โโข ๐.19attp       โดyour textโต
โsend Text logo
โ โโข ๐.20attp       โดyour textโต
โsend Text logo
โ โโข ๐.21attp       โดyour textโต
โsend Text logo
โ โโข ๐.22attp       โดyour textโต
โsend Text logo
โ โโข ๐.23attp       โดyour textโต
โsend Text logo
โ โโข ๐.24attp       โดyour textโต
โsend Text logo
โ โโข ๐.25attp       โดyour textโต
โsend Text logo
โ โโข ๐.26attp       โดyour textโต
โsend Text logo
โ โโข ๐.27attp       โดyour textโต
โsend Text logo
โ โโข ๐.28attp       โดyour textโต
โsend Text logo
โ โโข ๐.29attp       โดyour textโต
โsend Text logo
โ โโข ๐.30attp       โดyour textโต
โsend Text logo
โ โโข ๐.31attp       โดyour textโต
โsend Text logo
โ โโข ๐.32attp       โดyour textโต
โsend Text logo
โ โโข ๐.33attp       โดyour textโต
โsend Text logo
โ โโข ๐.34attp       โดyour textโต
โsend Text logo
โ โโข ๐.35attp       โดyour textโต
โsend Text logo
โ โโข ๐.36attp       โดyour textโต
โsend Text logo
โ โโข ๐.37attp       โดyour textโต
โsend Text logo
โ โโข ๐.38attp       โดyour textโต
โsend Text logo
โ โโข ๐.39attp       โดyour textโต
โsend Text logo
โ โโข ๐.40attp       โดyour textโต
โsend Text logo
โ
โโทCreator: HIRUSHA
โ
โ โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ  
โโโโโโโโโโโโโโโโโโโโโโโ

`, rowId:"rowid20"},
{title: '๐ฟ DOWNLOADER ๐ฟ', description:`โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ  ๐๐ฟ Downloader ๐ฟ๐
 โ
 โโท .video { vid link }
 โโท .down { status down }
 โโท .vid2 { vid link }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
`, rowId:"rowid8"},
        {title: '๐ฟ ABOUT T-REX BOT ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
๐ Developer : Hiruwa
๐ Bot             : T-REX V 3.0.0 
๐ Language : Sinhala & English
๐ Sponcer Team : PEARL TEAM
๐ Develop language : Node js
๐ Developer no : wa.me/+94788306130
`, rowId:"rowid9"},
        {title: '๐ฟ ADMIN PANEL ๐ฟ', description: `โทโทโทโทโทโท\n\n\n
โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ\n\n๐ COMMAND: *.ban*\nโน๏ธ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\n๐ COMMAND: *.add*\nโน๏ธ DESCRIPTION: Adds someone to the group.\n\n๐ COMMAND: *.mute*\nโน๏ธ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\n๐ COMMAND: *.unmute*\nโน๏ธ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\n๐ COMMAND: *.clear*\nโน๏ธ DESCRIPTION: Clearing chat.\n\n๐ COMMAND: *.name*\nโน๏ธ DESCRIPTION: Change group name. \n\n๐ COMMAND: *.promote*\nโน๏ธ DESCRIPTION: Promoting members to admin.\n\n๐ COMMAND: *.demote*\nโน๏ธ DESCRIPTION: Demoting admins.\n\n๐ COMMAND: *.myplugin*\nโน๏ธ DESCRIPTION: To view the current plugin list from โฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ.\n\n๐ COMMAND: *.plug*\nโน๏ธ DESCRIPTION: Install external plugins.\n\n๐ COMMAND: *.unplug*\nโน๏ธ DESCRIPTION: Removes the plugin.\n\n๐ COMMAND: *.invite*\nโน๏ธ DESCRIPTION: Provides group invitation link.\n\n๐ COMMAND: *.afk*\nโน๏ธ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\n๐ COMMAND: *.restart*\nโข DESCRIPTION: Restart the bot.\n\n๐ COMMAND: *.shutdown*\nโข DESCRIPTION: Shutdown the Bot.\n\n๐ COMMAND: *.setvar*\nโข DESCRIPTION: Change heroku config vars.\n\n๐ COMMAND: *.getvar*\nโข DESCRIPTION: Get heroku config var.\n\n๐ COMMAND: *.speedtest*\nโข DESCRIPTION:Check download and upload speed.\n\n๐ COMMAND: *.filter*\nโน๏ธ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\n๐ COMMAND: *.stop*\nโน๏ธ DESCRIPTION: Stops the filters you added earlier.\n\n๐ COMMAND: *.welcome*\nโน๏ธ DESCRIPTION: It sets the welcome message.\n\n๐ COMMAND: *.goodbye*\nโน๏ธ DESCRIPTION: Sets the goodbye  message.\n\n๐ COMMAND: *.kickme*\nโน๏ธ DESCRIPTION: It removes the bot from the group that provided the command.\n\n๐ COMMAND: *.pp*\nโน๏ธ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\n๐ COMMAND: *.block*\nโน๏ธ DESCRIPTION: Block tagged user.\n\n๐ COMMAND: *.unblock*\nโน๏ธ DESCRIPTION: Unblock tagged user.\n\n๐ COMMAND: *.jid*\nโน๏ธ DESCRIPTION: Giving user JID.\n\n๐ COMMAND *.tagall*\nโน๏ธ DESCRIPTION: Tag everyone in group.\n\n๐ COMMAND: *.up*\nโน๏ธ DESCRIPTION: Check for updates.\n\n๐ COMMAND: *.uptrex*\nโน๏ธ DESCRIPTION: To update your bot.\n\n๐ COMMAND: *.dyno*\nโน๏ธ DESCRIPTION: Showing heroku dyno hours.\n\n๐ COMMAND: *.sysd*\nโน๏ธ DESCRIPTION: Show system properties.\n\n๐ COMMAND: *.scam*\nโน๏ธ DESCRIPTION: Scam actions for 5min.\n\n๐ COMMAND: *.antilink*\nโน๏ธ DESCRIPTION: Anti link on Ex: .antilink on/off\n\n๐ COMMAND: *.antibad*\nโน๏ธ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\n๐ COMMAND: *.chatbot*\nโน๏ธDESCRIPTION: Auto chat on Ex: .chatbot on/off\n๐ฟ Command: .voice on/off\nโท Description: Activate and deactivate voice chat\n\n๐ฟ Command: .public โท Description: set bot as public\n\n ๐ฟ Command: .private\nโท Description: Set your bot as private\n\n*โ ๏ธ The above command only works for Admin, Bot and SUDO numbers.\n\nโฐ๐๐ฑ  T Rex BOT  ๐ฑ๐โฑ*
`, rowId:"rowid10"},
        {title: '๐ฟ Work Type PUBLIC ๐ฟ', description: "โทโทโทโทโทโท\n\n\nType .public to public mode", rowId:"rowid9"},
        {title: '๐ฟ Work Type PRIVATE ๐ฟ', description:"โทโทโทโทโทโท\n\n\nType .private to private mode", rowId:"rowid2"}
       ]
       
       const sections = [{title: "๐ฟ T-REX Command Panel ๐ฟ", rows: rows}]
       
       const button = {
        buttonText: 'Click Meโท',
        description: "๐ฟ T-REX COMMAND PANEL ๐ฟ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
}

}
