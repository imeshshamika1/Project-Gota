const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ð"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.addrex({ pattern: 'tlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ð*REX LOGO PACK 1*ð â
â ââââââââââââââââââââââ
â
â   `+Config.CAPTION+`
â
â ââ¢ ðCmd: *.wel*
â âââ¢ ð Dec: *Send welcome logo*
â ââ¢ ð Ex: *.wel T-Rex/Hiruwa*
â
â ââ¢ ð Cmd: *.bye*
â âââ¢ ð Dec: *Send bye logo*
â ââ¢ ðEx: *.bye T-REX/Hiruwa*
â
â ââ¢ ðCmd: *.marvel*
â âââ¢ ð Dec: *Send marve logo*
â ââ¢ ð Ex: *.marvel T-Rex/Hiruwa*
â
â ââ¢ ðCmd: *.2marvel*
â âââ¢ ð Dec: *Send marvel logo*
â ââ¢ ðEx: *.2marvel T-Rex/Hiruwa*
â
â ââ¢ ðCmd: *.wolf*
â âââ¢ ð Dec: *Send wolf logo*
â ââ¢ ðEx: *.wolf T-REX/HIRUWA*
â
â ââ¢ ðCmd: *.lava*
â âââ¢ ð Dec: *Send lava logo*
â ââ¢ ðEx: *.lava T-REX*
â
â ââ¢ ðCmd: *.xmas*
â âââ¢ ð Dec: *Send xmas logo*
â ââ¢ ðEx: *.xmas T-Rex*
â
â ââ¢ ðCmd: *.round*
â âââ¢ð Dec: *Send round logo*
â ââ¢ ð Ex: *.round { image url }*
â
â ââ¢ ðCmd: .*.quot*
â âââ¢ ð  Dec: *Send quote logo*
â ââ¢ ð Ex: *.quot T-REX*
â
â ââ¢ ðCmd: *.harta*
â âââ¢ ð Dec: *Send harta logo*
â ââ¢ ðEx: *.harta T-REX
â
â ââ¢ ðCmd: *.1917*
â âââ¢ ð Dec: *Send 1917 logo*
â ââ¢ ðEx: *.1917 T-REX
â
â ââ¢ ðCmd: *.minion*
â âââ¢ ð Dec: *Send minion logo*
â ââ¢ ðEx: *.minion T-REX
â
â ââ¢ ðCmd: *.holo*
â âââ¢ ð  Dec: *Send holo logo*
â ââ¢ ð Ex: *.holo T-REX*
â
â ââ¢ ðCmd: *.metalp*
â âââ¢ ð  Dec: *Send metalp logo*
â ââ¢ ð Ex: *.metalp T-REX*
â
â ââ¢ ðCmd: *.avengers*
â âââ¢ ð  Dec: *Send avengers logo*
â ââ¢ ð Ex: *.avengers T-REX*
â
â ââ¢ ðCmd: *.halloween*
â âââ¢ ð  Dec: *Send halloween logo*
â ââ¢ ð Ex: *.halloween T-REX
â
â ââ¢ ðCmd: *.horror*
â âââ¢ ð  Dec: *Send horror logo*
â ââ¢ ð Ex: *.horror T-REX*
â
â ââ¢ ðCmd: *.glossyc*
â âââ¢ ð  Dec: *Send glossy logo*
â ââ¢ ð Ex: *.glossyc T-REX*
â
â ââ¢ ðCmd: *.deluxe*
â âââ¢ ð  Dec: *Send deluxe logo*
â ââ¢ ð Ex: *.deluxe T-REX*
â
â ââ¢ ðCmd: *.glossyb*
â âââ¢ ð  Dec: *Send glossy logo*
â ââ¢ ð Ex: *.glossyb T-REX*
â
â ââ¢ ðCmd: *.joker*
â âââ¢ ð  Dec: *Send joker logo*
â ââ¢ ð Ex: *.joker T-REX*
â
â      ââð T-REX BOT ðââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Trex.addrex({pattern: 'wel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'bye ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: '2marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'wolf ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   
     Trex.addrex({ pattern: 'harta ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ±',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'quot ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'round ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'lava ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: '1917 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'minion ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'holo ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'metalp ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'avengers ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=T-Rex&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'halloween ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'horror ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})
    }));
      
     Trex.addrex({ pattern: 'xmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/xmas?text=${encodeURIComponent(match[1])}&apikey=404Api`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
      
      Trex.addrex({ pattern: 'glossyc ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
      Trex.addrex({ pattern: 'deluxe ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
      
      Trex.addrex({ pattern: 'glossyb ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ',quoted: message.data})

    }));
      
      
      Trex.addrex({ pattern: 'joker ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð±  Gota Bot  ð±ðâ± ' ,quoted: message.data})

    }));
      
      
      
      
   
}
