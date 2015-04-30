/// <reference path="../node/node.d.ts" />

declare module Quinn {
	interface IRequest {
		method: string;
		url: string;
		headers: { [key: string]: string; };
	}

	interface VirtualResponse {
		body(b: any): VirtualResponse;
		status(s: number): VirtualResponse;
		header(name: string, value: any): VirtualResponse;
	}

	interface IRequestHandler {
		(request: IRequest): VirtualResponse;
	}
}

declare module 'quinn' {
	import http = require('http');

	export function createApp(handler: Quinn.IRequestHandler): (request: http.ServerRequest, response: http.ServerResponse) => void;
	export default createApp;
}

declare module 'quinn/respond' {
	interface VirtualResponseOptions {
		body?: any;
		statusCode?: number;
		headers?: any;
	}

	export function respond(options?: VirtualResponseOptions): Quinn.VirtualResponse;
	export function json(data: any): Quinn.VirtualResponse;
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
