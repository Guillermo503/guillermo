/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┇             「 CREADOR 」*
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*

*𝙷𝙾𝙻𝙰 ${name}*

*Mi nombre es Guillermo, soy de Guatemala*

*Espero que el bot te sea de utilidad*

`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|Guillermo|Datos$/i;
export default handler;
