/// <reference path="typings/node/node.d.ts" />
/// <reference path='typings/quinn/quinn.d.ts' />
import {createServer} from 'http';

import {createApp} from 'quinn';
import {json, respond} from 'quinn/respond';
import {GET, createRouter} from 'wegweiser';

class MyResource {
	@GET("/mine")
	getMine() {
		return respond().body('Mine!\n');
	}

	@GET("/json")
	getJson() {
		return json({ error: 'Something bad(ish)!' }).status(400);
	}
}

const router = createRouter(MyResource);
const server = createServer(createApp(router));
server.listen(8000, () => {
	console.log('Listening.');
});
