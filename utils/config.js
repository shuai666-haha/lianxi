let url;

if (process.env.NODE_ENV == "development") {
	url = 'https://localhost:3000'
} else {
	url = 'https://api.aslegou.top/api/getbanner'
}
export default url
