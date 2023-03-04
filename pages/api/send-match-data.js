let converter = require('json-2-csv');
import { writeFileSync } from 'node:fs';

export default function handler(req, res) {
    //const file = await open('Match' + req.body.match + '_Team' + req.body.team + '.csv' );
    converter.json2csv(req.body, (err, csv) => {
    try {
    writeFileSync('Scouting Data/' + 'Match' + req.body.match + '_Team' + req.body.team + '.csv', csv);
    } catch (err) {
        console.log(err);
    }
    });
  res.status(200).json({ words: 'who invented javascript' });
}
