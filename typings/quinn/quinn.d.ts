/// <reference path="../node/node.d.ts" />

declare module Quinn {
	interface IRequest {
		method: string;
		url: string;
	}

	interface IRequestHandler {
		(request: IRequest): any;
	}
}

declare module 'quinn' {
	import http = require('http');

	function createApp(handler: Quinn.IRequestHandler): (request: http.ServerRequest, response: http.ServerResponse) => void;

	export default createApp;
}

declare module 'quinn/respond' {
	import http = require('http');

	interface VirtualResponse {
		body(b: any): VirtualResponse;
		status(s: number): VirtualResponse;
		header(name: string, value: any): VirtualResponse;
	}

	interface VirtualResponseOptions {
		body?: any;
		statusCode?: number;
		headers?: any;
	}

	function respond(options?: VirtualResponseOptions): VirtualResponse;

	export function json(data: any): VirtualResponse;

	export default respond;
}

declare module 'wegweiser' {
	module wegweiser {
		function GET(string): any;
		function PUT(string): any;
		function POST(string): any;
		function PATCH(string): any;
		function DELETE(string): any;
		function HEAD(string): any;
		function createRouter(...any): Quinn.IRequestHandler;
	}

	export = wegweiser;
}
