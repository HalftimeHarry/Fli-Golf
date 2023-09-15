import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["FAV_NEW.png","FLI_BLK.png","FLI_NEW_BLK.png","dgi_1.jpg","dgi_2.jpg","disc_beach.jpg","disc_close.jpg","fav.png","favicon.ico","throw.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.ca1df77e.js","app":"_app/immutable/entry/app.d08aaf3b.js","imports":["_app/immutable/entry/start.ca1df77e.js","_app/immutable/chunks/index.c063a4d7.js","_app/immutable/chunks/singletons.ac1cbc72.js","_app/immutable/chunks/index.22c2a792.js","_app/immutable/chunks/paths.89209808.js","_app/immutable/entry/app.d08aaf3b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c063a4d7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js')),
			__memo(() => import('../server/nodes/16.js')),
			__memo(() => import('../server/nodes/17.js')),
			__memo(() => import('../server/nodes/18.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/players",
				pattern: /^\/players\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/pro",
				pattern: /^\/pro\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/rank",
				pattern: /^\/rank\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/schedule",
				pattern: /^\/schedule\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/sponsors",
				pattern: /^\/sponsors\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/teams",
				pattern: /^\/teams\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/venues",
				pattern: /^\/venues\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
